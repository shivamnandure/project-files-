# MongoDB Student Management System - Complete Setup Guide

## 📋 Table of Contents
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Project Setup](#project-setup)
- [Running the Application](#running-the-application)
- [Testing Individual Operations](#testing-individual-operations)
- [Troubleshooting](#troubleshooting)
- [Additional Operations](#additional-operations)

---

## 🔧 Prerequisites

Before starting, ensure you have the following installed on your system:

### 1. **Node.js** (v14 or higher)
- Download from: https://nodejs.org/
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### 2. **MongoDB Community Server**
- Download from: https://www.mongodb.com/try/download/community
- Choose your operating system and follow installation instructions

---

## 📦 Installation Steps

### Step 1: Install MongoDB

#### **For Windows:**
1. Download MongoDB installer from the link above
2. Run the installer (.msi file)
3. Choose "Complete" installation
4. Install MongoDB as a service (check the box)
5. Install MongoDB Compass (optional GUI tool)
6. Complete installation

#### **For macOS:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community
```

#### **For Linux (Ubuntu/Debian):**
```bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Create list file
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Update and install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Step 2: Verify MongoDB Installation

```bash
# Check if MongoDB is running
mongosh --version

# OR for older versions
mongo --version
```

---

## 🚀 Project Setup

### Step 1: Create Project Directory

```bash
# Create project folder
mkdir mongodb-student-app
cd mongodb-student-app
```

### Step 2: Initialize Node.js Project

```bash
# Initialize package.json
npm init -y
```

### Step 3: Install Required Dependencies

```bash
# Install MongoDB driver
npm install mongodb

# Optional: Install nodemon for auto-restart during development
npm install --save-dev nodemon
```

### Step 4: Create Application File

Create a file named `app.js` in your project directory and paste the MongoDB Student Management application code.

'''jasvscript
// MongoDB Student Management Application
// Install required packages: npm install mongodb

const { MongoClient } = require('mongodb');

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'studentDB';
const collectionName = 'students';

// Create a new MongoClient
const client = new MongoClient(url);

// Database connection function
async function connectDB() {
  try {
    await client.connect();
    console.log('✓ Connected successfully to MongoDB');
    return client.db(dbName);
  } catch (error) {
    console.error('✗ MongoDB connection error:', error);
    throw error;
  }
}

// 1. INSERT - Add a new student record
async function insertStudent(studentData) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    
    const result = await collection.insertOne(studentData);
    console.log(`✓ Student inserted with ID: ${result.insertedId}`);
    return result;
  } catch (error) {
    console.error('✗ Error inserting student:', error);
    throw error;
  }
}

// 2. RETRIEVE - Get all student records
async function getAllStudents() {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    
    const students = await collection.find({}).toArray();
    console.log('\n=== All Students ===');
    if (students.length === 0) {
      console.log('No students found in database');
    } else {
      students.forEach((student, index) => {
        console.log(`\nStudent ${index + 1}:`);
        console.log(`  Name: ${student.Name}`);
        console.log(`  Age: ${student.Age}`);
        console.log(`  Course: ${student.Course}`);
        console.log(`  Marks: ${student.Marks}`);
      });
    }
    return students;
  } catch (error) {
    console.error('✗ Error retrieving students:', error);
    throw error;
  }
}

// 3. UPDATE - Update student's marks by name
async function updateStudentMarks(name, newMarks) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    
    const result = await collection.updateOne(
      { Name: name },
      { $set: { Marks: newMarks } }
    );
    
    if (result.matchedCount === 0) {
      console.log(`✗ No student found with name: ${name}`);
    } else if (result.modifiedCount > 0) {
      console.log(`✓ Updated marks for ${name} to ${newMarks}`);
    } else {
      console.log(`⚠ Student found but marks were already ${newMarks}`);
    }
    return result;
  } catch (error) {
    console.error('✗ Error updating student:', error);
    throw error;
  }
}

// 4. DELETE - Remove a student record by name
async function deleteStudent(name) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    
    const result = await collection.deleteOne({ Name: name });
    
    if (result.deletedCount > 0) {
      console.log(`✓ Deleted student: ${name}`);
    } else {
      console.log(`✗ No student found with name: ${name}`);
    }
    return result;
  } catch (error) {
    console.error('✗ Error deleting student:', error);
    throw error;
  }
}

// Main function to demonstrate all operations
async function main() {
  try {
    console.log('=== MongoDB Student Management System ===\n');
    
    // 1. Insert student records
    console.log('--- Inserting Students ---');
    await insertStudent({
      Name: 'Alice Johnson',
      Age: 20,
      Course: 'Computer Science',
      Marks: 85
    });
    
    await insertStudent({
      Name: 'Bob Smith',
      Age: 22,
      Course: 'Mathematics',
      Marks: 78
    });
    
    await insertStudent({
      Name: 'Charlie Brown',
      Age: 21,
      Course: 'Physics',
      Marks: 92
    });
    
    // 2. Retrieve all students
    console.log('\n--- Retrieving All Students ---');
    await getAllStudents();
    
    // 3. Update a student's marks
    console.log('\n--- Updating Student Marks ---');
    await updateStudentMarks('Bob Smith', 88);
    
    // Verify update
    console.log('\n--- After Update ---');
    await getAllStudents();
    
    // 4. Delete a student
    console.log('\n--- Deleting Student ---');
    await deleteStudent('Charlie Brown');
    
    // Verify deletion
    console.log('\n--- After Deletion ---');
    await getAllStudents();
    
  } catch (error) {
    console.error('Application error:', error);
  } finally {
    // Close the connection
    await client.close();
    console.log('\n✓ Database connection closed');
  }
}

// Run the application
main();

// Export functions for use in other modules
module.exports = {
  insertStudent,
  getAllStudents,
  updateStudentMarks,
  deleteStudent,
  connectDB
};
'''

### Step 5: Update package.json (Optional)

Add scripts to your `package.json`:

```json
{
  "name": "mongodb-student-app",
  "version": "1.0.0",
  "description": "MongoDB Student Management System",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "keywords": ["mongodb", "nodejs", "crud"],
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "mongodb": "^6.3.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

---

## ▶️ Running the Application

### Step 1: Start MongoDB Service

#### **Windows:**
- MongoDB should start automatically if installed as a service
- Or manually start: Open Services → Find "MongoDB Server" → Start

#### **macOS:**
```bash
brew services start mongodb-community
```

#### **Linux:**
```bash
sudo systemctl start mongod
```

### Step 2: Verify MongoDB is Running

```bash
# Connect to MongoDB shell
mongosh

# You should see a connection message
# Type 'exit' to quit the shell
```

### Step 3: Run the Application

```bash
# Run the application
node app.js

# OR if you installed nodemon
npm run dev
```

### Expected Output:

```
=== MongoDB Student Management System ===

--- Inserting Students ---
✓ Connected successfully to MongoDB
✓ Student inserted with ID: 6547abc123def456789...
✓ Student inserted with ID: 6547abc123def456790...
✓ Student inserted with ID: 6547abc123def456791...

--- Retrieving All Students ---
✓ Connected successfully to MongoDB

=== All Students ===

Student 1:
  Name: Alice Johnson
  Age: 20
  Course: Computer Science
  Marks: 85

Student 2:
  Name: Bob Smith
  Age: 22
  Course: Mathematics
  Marks: 78

Student 3:
  Name: Charlie Brown
  Age: 21
  Course: Physics
  Marks: 92

--- Updating Student Marks ---
✓ Connected successfully to MongoDB
✓ Updated marks for Bob Smith to 88

--- After Update ---
[Shows updated records...]

--- Deleting Student ---
✓ Connected successfully to MongoDB
✓ Deleted student: Charlie Brown

--- After Deletion ---
[Shows remaining records...]

✓ Database connection closed
```

---

## 🧪 Testing Individual Operations

Create a separate test file `test.js`:

```javascript
const { 
  insertStudent, 
  getAllStudents, 
  updateStudentMarks, 
  deleteStudent 
} = require('./app.js');

async function testOperations() {
  try {
    // Test 1: Insert a student
    console.log('Test 1: Inserting student...');
    await insertStudent({
      Name: 'Test Student',
      Age: 25,
      Course: 'Testing',
      Marks: 95
    });

    // Test 2: Get all students
    console.log('\nTest 2: Getting all students...');
    await getAllStudents();

    // Test 3: Update marks
    console.log('\nTest 3: Updating marks...');
    await updateStudentMarks('Test Student', 100);

    // Test 4: Delete student
    console.log('\nTest 4: Deleting student...');
    await deleteStudent('Test Student');

    console.log('\n✓ All tests completed!');
    process.exit(0);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
}

testOperations();
```

Run tests:
```bash
node test.js
```

---

## 🔍 Viewing Database in MongoDB Compass

1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Navigate to `studentDB` database
4. View `students` collection
5. See all your records in a visual interface

---

## 🐛 Troubleshooting

### Problem 1: "Connection Refused" Error
**Solution:**
```bash
# Check if MongoDB is running
# Windows: Check Services
# macOS/Linux:
sudo systemctl status mongod
# or
brew services list | grep mongodb
```

### Problem 2: "Cannot find module 'mongodb'"
**Solution:**
```bash
# Reinstall the package
npm install mongodb
```

### Problem 3: Port 27017 Already in Use
**Solution:**
```bash
# Find process using port 27017
# Windows:
netstat -ano | findstr :27017

# macOS/Linux:
lsof -i :27017

# Kill the process or change port in app.js
```

### Problem 4: Permission Denied (Linux)
**Solution:**
```bash
# Fix MongoDB data directory permissions
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
```

### Problem 5: Database Not Found
**Solution:**
- MongoDB creates the database automatically on first write operation
- Ensure you're inserting data, not just connecting

---

## 📚 Additional Operations

### Search for Specific Student

Add this function to `app.js`:

```javascript
async function findStudentByName(name) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    
    const student = await collection.findOne({ Name: name });
    
    if (student) {
      console.log('Student found:', student);
    } else {
      console.log(`No student found with name: ${name}`);
    }
    return student;
  } catch (error) {
    console.error('Error finding student:', error);
    throw error;
  }
}
```

### Get Students by Course

```javascript
async function getStudentsByCourse(course) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    
    const students = await collection.find({ Course: course }).toArray();
    console.log(`Students in ${course}:`, students);
    return students;
  } catch (error) {
    console.error('Error finding students:', error);
    throw error;
  }
}
```

### Get Top Performers

```javascript
async function getTopStudents(limit = 5) {
  try {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    
    const students = await collection
      .find({})
      .sort({ Marks: -1 })
      .limit(limit)
      .toArray();
    
    console.log(`Top ${limit} students:`, students);
    return students;
  } catch (error) {
    console.error('Error getting top students:', error);
    throw error;
  }
}
```

---

## 🛠️ Configuration Options

### Change Database Name

In `app.js`, modify:
```javascript
const dbName = 'yourDatabaseName';  // Change this
```

### Change Collection Name

```javascript
const collectionName = 'yourCollectionName';  // Change this
```

### Use Remote MongoDB (MongoDB Atlas)

```javascript
const url = 'mongodb+srv://username:password@cluster.mongodb.net/';
```

---

## 📝 Project Structure

```
mongodb-student-app/
│
├── node_modules/          # Dependencies
├── app.js                 # Main application file
├── test.js               # Test file (optional)
├── package.json          # Project configuration
├── package-lock.json     # Dependency lock file
└── README.md             # This file
```

---

## 🎯 Quick Start Commands

```bash
# Complete setup in one go
mkdir mongodb-student-app && cd mongodb-student-app
npm init -y
npm install mongodb
# Create app.js file with the code
node app.js
```

---

## 📞 Support

- MongoDB Documentation: https://docs.mongodb.com/
- Node.js MongoDB Driver: https://mongodb.github.io/node-mongodb-native/
- Stack Overflow: Tag questions with `mongodb` and `node.js`

---

## ✅ Checklist

- [ ] Node.js installed and verified
- [ ] MongoDB installed and running
- [ ] Project directory created
- [ ] Dependencies installed (`npm install mongodb`)
- [ ] app.js file created with code
- [ ] Application runs successfully
- [ ] All CRUD operations working

---

**Congratulations! 🎉** Your MongoDB Student Management System is now up and running!

For questions or issues, review the troubleshooting section or check MongoDB logs.