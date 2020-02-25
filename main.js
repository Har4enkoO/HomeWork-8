//Base

class Student {
  marks = [5, 4, 4, 5];
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }
  getInfo() {
    return `Студент ${this.course}го курса ${this.university}, ${this.fullName}`;
  }
  get getMarks() {
    return this.marks;
  }
  set setMarks(value) {
    if (this.marks !== null) {
      this.marks = [...this.marks, value];
      return this.marks;
    } else {
      return null;
    }
  }
  getAverageMark() {
    if (this.marks !== null) {
      return (
        this.marks.reduce((accumulator, currentEl) => {
          return accumulator + currentEl;
        }, 0) / this.marks.length
      );
    } else {
      return null;
    }
  }
  dismiss() {
    this.marks = null;
  }
  recover() {
    if (this.marks === null) {
      return (this.marks = []);
    } else {
      return "This student doesn't need to be recover!";
    }
  }
}

let alex = new Student('НАУ', '3', 'Харченко Олександр');
console.log(alex.getInfo());
console.log(alex.getMarks);
alex.setMarks = 5;
console.log(alex.getMarks);
console.log(alex.getAverageMark());
console.log(alex.dismiss());
console.log(alex.recover());

//Advanced

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
  }
  getScholarship(value) {
    if (parseFloat(this.getAverageMark()) >= 4) {
      return setInterval(
        () => console.log(`Вы получили ${value} грн. стипендии`),
        30000
      );
       
    } else if (parseFloat(this.getAverageMark()) < 4) {
      return `${this}, ты плохо учишся!!`;
    } else {
      return `Ты исключен!!!`;
    }
  }
}

let petro = new BudgetStudent('МАУ', '4', 'Петренко Олександр');

console.log(petro.getScholarship(1400));
