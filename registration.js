class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Bootcamp {
    constructor(name, level, student = []) {
        this.name = name;
        this.level = level;
        this.students = student;
    }

    registerStudent(studentToRegister) {
        if (!studentToRegister.name) || (!studentToRegister.email) {  //do the ! instead of === so that you catch all falsey values
            console.log('Invalid name or email');
            return false;
        }
    }
    
    for(this.students.length; i=0; i++) {
        if(this.students.email[i] === studentToRegister.email) {
            console.log('That email is already registered');
        }
        else {
            students.push(studentToRegister)
        }
    }


    //or
    for(let student of this.students) {  //unclear if you need the variable declaration word const, let or var
        if (student.email === studentToRegister.email) {
            console.log("email is already registered");
            return false;
        }
    }
this.students.push(studentToRegister);
console.log(`${studentToRegister.name} registered successfully!`);
return false;
    }




testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}


reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}