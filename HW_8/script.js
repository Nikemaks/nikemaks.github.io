

var forbiddenSymbols = ['@','#','$','%','&','?', ' ','*', '(', ')', '-', '|', '=','+','_', '{', '}', '[',']', ',', '\\', ':',';', '`', '^', '~','"',],
    numberSrting = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   


let validateObject = {
 pluseNumber: function pluseNumber(oneNumber, twoNumber){
 let newLenth,
     oneArray = oneNumber.split(''),
     twoArray = twoNumber.split(''),
     num1,
     num2,
     sum
     defoultIndex = 0,
     result = [];
 

  if (oneNumber.length < twoNumber.length){
     newLenth = twoNumber.length + 1; 
  }  else {
     newLenth = oneNumber.length + 1;
    }
 
for (let i = 1; i <= newLenth; i++) {
  num1 = +oneNumber[oneNumber.length - i] || 0;
  num2 = +twoNumber[twoNumber.length - i] || 0;
  sum = num1 + num2 + defoultIndex;

  if (sum > 9) {
    result[newLenth - i] = sum - 10;
    defoultIndex = 1;
  } else {
    result[newLenth - i] = sum;
    defoultIndex = 0;
  }
  
}

if (result[0] == 0) {
 return console.log(result.join('').substring(1));
} else {

return  console.log(result.join(''));

  }
},
validPassvord: function validatePassword(password) {
 let  validateSymbol = false,
      validateNumber = false,
      passwordValid = false;

 if (password.length > 6 && password.length < 20 ) {
  for (let i = 0; i < password.length; i++) {
    for (let k = 0; k < forbiddenSymbols.length; k++) {
       if ( password[i] == forbiddenSymbols[k] ) {
          validateSymbol = false;
          console.log('invalid(Использованы недопустимые знаки)');
          break;
       } else {
           validateSymbol = true;
         }
    }
  }
 } else {
  console.log('invalid(Не больше 20 символов и не меньше 6)');
 }     

  

  if (validateSymbol == true) {
    for (var m = 0; m < password.length; m++) {
     for (var n = 0; n < numberSrting.length; n++) {
      if (password[m] == numberSrting[n]) {
              validateNumber = true;
      }
     }
    }
  }

  if ( validateNumber == true) {
    console.log('valid');
    passwordValid = true;
  } else {
    console.log('invalid(Используйте цифры)');

  }
  return passwordValid;
},
checkNumber: function checkNumber(num){
 let  simpleNumber = false,
      evenNumber = false,
      multiple = false,
      arrayBool = [];
      flag = 0;
      

if (num % 10 == 0){
   multiple = true;
   simpleNumber = false;
   evenNumber = true;
}

 for (var i = 1; i < num+1; i++ ) {
  if ( num %  i == 0 ) {
      flag++;
  }
 }
 
 if (flag == 2){
  simpleNumber = true;

 }

 if (num % 2 == 0){
  evenNumber = true;

 }
 
 
 console.log(`[${simpleNumber}, ${evenNumber}, ${multiple}]`);
 arrayBool = [multiple, simpleNumber,evenNumber];
 return arrayBool;
}


};
logicsObject();
 function logicsObject(){
  let password =  prompt('Введите пароль:');
  if (validateObject.validPassvord(password) == true ) {
   check();
 };

 function check(){
   let num = +prompt('Введите число'),
       arrayBool   = validateObject.checkNumber(num);

    for (var i = 0; i < arrayBool.length; i++) {
      if(arrayBool[i] == true){
        sumNumb();
        break;
      }
    }
 }; 

  function sumNumb(){
    let num1 = prompt('Введите число'),
        num2 = prompt('Введите число');

   validateObject.pluseNumber(num1, num2);
   
  }
}
