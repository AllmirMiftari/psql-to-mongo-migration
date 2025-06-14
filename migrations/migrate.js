const { mongo } = require("../config/db"); // only for MongoDB
const UserMongo = require("../models/mongoModels/User");
const CourseMongo = require("../models/mongoModels/Course");

const {
  sequelize,
  User,
  Course,
  Contact,
  Registration
} = require("../models/pgModels");

(async () => {
  try {
    // Connect to both DBs
    await mongo();              
    await sequelize.authenticate();

    // Clear MongoDB data
    await UserMongo.deleteMany({});
    await CourseMongo.deleteMany({});

    // Fetch data from PostgreSQL
    const users = await User.findAll({ raw: true });
    const contacts = await Contact.findAll({ raw: true });
    const courses = await Course.findAll({ raw: true });
    const registrations = await Registration.findAll({ raw: true });

    // Insert Courses into MongoDB
    for (const course of courses) {
      await CourseMongo.create({
        CID: course.cid,
        title: course.title,
        description: course.description,
        duration: course.duration,
        category: {
          CategoryID: course.categoryid
        }
      });
    }

    // Build a map of courses by cid
    const courseMap = {};
    courses.forEach(course => {
      courseMap[course.cid] = {
        CID: course.cid,
        title: course.title,
        description: course.description,
        duration: course.duration,
        category: {
          CategoryID: course.categoryid
        }
      };
    });

    // Group registrations by user
    const userRegistrations = {};
    registrations.forEach(r => {
      const course = courseMap[r.cid];
      if (!userRegistrations[r.uid]) {
        userRegistrations[r.uid] = [];
      }
      userRegistrations[r.uid].push({
        course: course || { CID: r.cid },
        registrationDate: r.registrationdate
      });
    });

    // Build contact map
    const contactMap = Object.fromEntries(contacts.map(c => [c.contactid, c]));

    // Insert Users into MongoDB
    for (const user of users) {
      const contact = contactMap[user.contactid];

      await UserMongo.create({
        UID: user.uid,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        password: user.password,
        contact: {
          form: contact?.form || ""
        },
        registrations: userRegistrations[user.uid] || []
      });
    }

    console.log(" Migration completed.");
    process.exit();
  } catch (err) {
    console.error(" Migration failed:", err);
    console.error(err);
    process.exit(1);
  }
})();