//1
 var oneNumber = '1125',
     twoNumber = '99999999999';

pluseNumber(oneNumber, twoNumber);

function pluseNumber(oneNumber, twoNumber){
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
  console.log(result.join('').substring(1));
} else {
  
  console.log(result.join(''));

  }
}


//2 valid password
var password = 'dsfdsffddsds1524536',
    forbiddenSymbols = ['@','#','$','%','&','?', ' ','*', '(', ')', '-', '|', '=','+','_', '{', '}', '[',']', ',', '\\', ':',';', '`', '^', '~','"',],
    numberSrting = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


validatePassword(password);

function validatePassword(password) {
 let  validateSymbol = false,
      validateNumber = false;

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
	} else {
		console.log('invalid(Используйте цифры)');

	}
}
// 3

checkNumber(20);

function checkNumber(num){
 let  simpleNumber = false,
      evenNumber = false,
      multiple = false,
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
}