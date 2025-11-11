// student.ts
export class Student {
  name: string;
  rollNo: number;
  marks: number[];

  constructor(name: string, rollNo: number, marks: number[]) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }

  getAverage(): number {
    if (this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  }

  displayInfo(): void {
    const average = this.getAverage();
    console.log(`Student Name: ${this.name}`);
    console.log(`Roll Number: ${this.rollNo}`);
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log('----------------------------');
  }
}