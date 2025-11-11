"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
// student.ts
var Student = /** @class */ (function () {
    function Student(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }
    Student.prototype.getAverage = function () {
        if (this.marks.length === 0)
            return 0;
        var sum = this.marks.reduce(function (acc, mark) { return acc + mark; }, 0);
        return sum / this.marks.length;
    };
    Student.prototype.displayInfo = function () {
        var average = this.getAverage();
        console.log("Student Name: ".concat(this.name));
        console.log("Roll Number: ".concat(this.rollNo));
        console.log("Average Marks: ".concat(average.toFixed(2)));
        console.log('----------------------------');
    };
    return Student;
}());
exports.Student = Student;
