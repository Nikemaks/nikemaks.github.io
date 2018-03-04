window.onload = function ready(){
for (var i = 0; i < 9; i++) {
	document.getElementById('game').innerHTML+='<div class="block"></div>';
}
}
var hod=0;
document.getElementById('game').onclick=function(event) {
	if (event.target.className == 'block') {
		if (hod%2==0){
		event.target.innerHTML = 'X';
	}
	else{
		event.target.innerHTML = '0';
	}
	hod++;
	checkwiner();
	}
	
};
document.getElementById('btn-game').onclick=function() {
		var clear =document.getElementsByClassName('block');
		clear[0].innerHTML='';
		clear[1].innerHTML='';
		clear[2].innerHTML='';
		clear[3].innerHTML='';
		clear[4].innerHTML='';
		clear[5].innerHTML='';
		clear[6].innerHTML='';
		clear[7].innerHTML='';
		clear[8].innerHTML='';
	}
var winx = 1;
var winy = 1;
function checkwiner() {
		var allblock=document.getElementsByClassName('block');
		if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++; alert('Выграли крестики');}
		if (allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Выграли крестики');}
		if (allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Выграли крестики');}
		if (allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Выграли крестики');}
		if (allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Выграли крестики');}
		if (allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Выграли крестики');}
		if (allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Выграли крестики');}
		if (allblock[6].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[2].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Выграли крестики');}
		if (allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Выграли крестики');}


		/*Ноль*/
		if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++; alert('Выграли нолики');}
		if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Выграли нолики');}
		if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Выграли нолики');}
		if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Выграли нолики');}
		if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Выграли нолики');}
		if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Выграли нолики');}
		if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Выграли нолики');}
		if (allblock[6].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[3].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Выграли нолики');}
		if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Выграли нолики');}
			
	}

