var student = {
    name : "Umar Khayam",
    sclass : "VI",
    rollno : 65 };
    
console.log('Before Deleting: '+student.rollno)
delete student.rollno;
console.log('After Deleting: '+student.rollno)