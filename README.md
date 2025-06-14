# 🛠️ Relational to NoSQL Migration Project

This project demonstrates the migration of structured relational data (PostgreSQL) into a NoSQL format (MongoDB Atlas) using Node.js with Sequelize and Mongoose. It is designed for educational purposes and shows how to flatten and denormalize data for MongoDB.

## 📂 Project Structure

```
relational-to-nosql-project/
│
├── config/               # PostgreSQL Sequelize connection
├── models/
│   ├── pgModels/         # Sequelize models for relational DB
│   └── mongoModels/      # Mongoose schemas for MongoDB
├── migrations/
│   └── migrate.js        # Migration logic from PostgreSQL → MongoDB
├── index.js              # Express starter endpoint
├── package.json          # NPM scripts and dependencies
└── README.md             # Project documentation
```

## 🔧 Technologies Used

- **Node.js**
- **Express.js**
- **PostgreSQL** (Relational DB)
- **MongoDB Atlas** (NoSQL Document DB)
- **Sequelize** (ORM for PostgreSQL)
- **Mongoose** (ODM for MongoDB)

## 📌 Use Case

This project simulates an online course platform. A relational database is used for structured data integrity, while MongoDB is used for flexible querying and embedding documents like user registrations with full course info.

## 🧱 PostgreSQL Tables

- `users`: stores user accounts
- `course`: stores course info
- `categories`: course category list
- `contact`: stores messages from users
- `registrations`: join table (many-to-many) between users and courses

## 🍃 MongoDB Collections

- `users`: includes embedded `contact` and `registrations` with full `course` objects
- `courses`: simplified reference course collection

## 🔄 Migration Flow

1. Connect to both PostgreSQL and MongoDB
2. Fetch all data using Sequelize from:
   - `users`, `contacts`, `courses`, `registrations`
3. Insert `courses` into MongoDB as documents
4. For each user:
   - Embed contact form
   - Embed registrations with course details
5. Save enriched user objects in MongoDB

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure your database connections

#### PostgreSQL (in `config/db.js`)
```js
new Sequelize("your_db", "user", "pass", { dialect: "postgres" });
```

#### MongoDB (in `migrations/migrate.js`)
Update `mongoose.connect()` with your **MongoDB Atlas URI**.

### 3. Run the migration

```bash
npm run migrate
```

### 4. Start the express app

```bash
npm start
```

## 📊 Example MongoDB Document (after migration)

```json
{
  "UID": "2",
  "name": "Jane",
  "registrations": [
    {
      "course": {
        "CID": 1,
        "title": "Intro to JavaScript",
        "description": "Learn JavaScript from scratch.",
        "duration": "4 weeks",
        "category": {
          "CategoryID": 1
        }
      },
      "registrationDate": "2025-05-19T00:00:00.000Z"
    }
  ]
}
```

## 🧪 Optional Improvements

- Add data validation and error logging
- Build REST API to query from MongoDB
- Implement a web dashboard to visualize data

## 👨‍💻 Author

Created by **Allmir Miftari**  
Project for the course: **NoSQL Databases**
