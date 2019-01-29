
var studentList = [ student_1 = {
  name: 'Vasay',
  dataStart: 2001,
  dataEnd: 2006
},  student_2 = {
  name: 'Petya',
  dataStart: 2003,
  dataEnd: 2008
},student_3 = {
  name: 'Andrey',
  dataStart: 2004,
  dataEnd: 2007
}, student_4 = {
  name: 'Kiril',
  dataStart: 2005,
  dataEnd: 2007
},student_5 = {
  name: 'Kiril2',
  dataStart: 2002,
  dataEnd: 2004
}];
getListStudent(2005, 2008);

function getListStudent(dataStart, dataEnd) {
  let arrayStudent = [];
   for (var i = 0; i < studentList.length; i++) {
    if (studentList[i].dataStart >= dataStart && studentList[i].dataEnd <= dataEnd || studentList[i].dataStart <= dataStart && studentList[i].dataEnd <= dataEnd && studentList[i].dataEnd >= dataStart ) {
     console.log(studentList[i]);
     arrayStudent.push(studentList[i]);
    }
  }
  return arrayStudent;
}
//2 
//  getMaxStudent(2001, 2005);
// function getMaxStudent(dataStart, dataEnd) {

// } 