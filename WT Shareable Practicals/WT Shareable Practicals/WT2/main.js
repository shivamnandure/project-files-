"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var student_1 = require("./student");
// Create student objects
var student1 = new student_1.Student('Alice Johnson', 101, [85, 92, 78, 88, 90]);
var student2 = new student_1.Student('Bob Smith', 102, [76, 82, 91, 79, 84]);
var student3 = new student_1.Student('Charlie Brown', 103, [95, 89, 93, 97, 91]);
// Display information for all students
console.log('=== Student Information ===\n');
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();
// Additional demonstration: Compare averages
console.log('=== Average Comparison ===');
console.log("".concat(student1.name, ": ").concat(student1.getAverage().toFixed(2)));
console.log("".concat(student2.name, ": ").concat(student2.getAverage().toFixed(2)));
console.log("".concat(student3.name, ": ").concat(student3.getAverage().toFixed(2)));
