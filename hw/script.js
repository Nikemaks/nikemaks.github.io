
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

// getListStudent(2005, 2008);

// function getListStudent(dataStart, dataEnd){
//   let arrayStudent = [];
//    for (var i = 0; i < studentList.length; i++) {
//     if (studentList[i].dataStart >= dataStart && studentList[i].dataEnd <= dataEnd || studentList[i].dataStart <= dataStart && studentList[i].dataEnd <= dataEnd && studentList[i].dataEnd >= dataStart ) {
//      console.log(studentList[i]);
//      arrayStudent.push(studentList[i]);
//     }
//   }
//   return arrayStudent;
// }
//2 
 getMaxStudent(2002, 2008);
function getMaxStudent(dataStart, dataEnd) {
  let arrayStudent = [],
      counter = [],
      years = [],
      count = 0,
      arrayRepeat = [];
  for (var i = 0; i < studentList.length; i++) {
    if (studentList[i].dataStart >= dataStart && studentList[i].dataEnd <= dataEnd || studentList[i].dataStart <= dataStart && studentList[i].dataEnd <= dataEnd && studentList[i].dataEnd >= dataStart ) {
     console.log(studentList[i]);
     arrayStudent.push(studentList[i]);
    }
  }

  for (var k = dataStart; k < dataEnd; k++) {
    for (var j = 0; j < arrayStudent.length; j++) {
      if( k == arrayStudent[j].dataStart || k == arrayStudent[j].dataEnd ){
         years.push(k);
      }
    };
  }
  
  for (var m = 0; m < years.length; m++) {
    for (var h = 0; h < years.length; h++) {
     if (years[m] == years[h]) {
         
     }; 
    };
  };

} 