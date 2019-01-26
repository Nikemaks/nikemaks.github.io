// 1
var string = prompt("Введите текст:");
 
 if (string.length < 10 ) {
  for (var i = 0; i < string.length; i++) {
   console.log(string[i]); 
  }
 }else{
  console.log(string.substr(7, 1000)); 
 }

 //2
var string2 = prompt("Введите текст:"),
    newString = '';

for (let i = 0; i < string2.length; i++) {
	 newString += (string2[i-1] == " ")
	  ?string2[i].toUpperCase() 
	  :string2[i];
}

console.log(newString);
