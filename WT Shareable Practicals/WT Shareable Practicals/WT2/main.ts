// main.ts
import { Student } from './student';

// Create student objects
const student1 = new Student('Alice Johnson', 101, [85, 92, 78, 88, 90]);
const student2 = new Student('Bob Smith', 102, [76, 82, 91, 79, 84]);
const student3 = new Student('Charlie Brown', 103, [95, 89, 93, 97, 91]);

// Display information for all students
console.log('=== Student Information ===\n');

student1.displayInfo();
student2.displayInfo();
student3.displayInfo();

// Additional demonstration: Compare averages
console.log('=== Average Comparison ===');
console.log(`${student1.name}: ${student1.getAverage().toFixed(2)}`);
console.log(`${student2.name}: ${student2.getAverage().toFixed(2)}`);
console.log(`${student3.name}: ${student3.getAverage().toFixed(2)}`);