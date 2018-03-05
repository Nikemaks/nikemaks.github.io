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
		if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++; alert('Перемога за	 хрестами');}
		if (allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Перемога за	 хрестами');}
		if (allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Перемога за	 хрестами');}
		if (allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Перемога за	 хрестами');}
		if (allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Перемога за	 хрестами');}
		if (allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Перемога за	 хрестами');}
		if (allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Перемога за	 хрестами');}
		if (allblock[6].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[2].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Перемога за	 хрестами');}
		if (allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X') {document.getElementById('winx').innerHTML=winx++;	alert('Перемога за	 хрестами');}


		/*Нyль*/
		if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++; alert('Перемога за  нуликами');}
		if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Перемога за  нуликами');}
		if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Перемога за  нуликами');}
		if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Перемога за  нуликами');}
		if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Перемога за  нуликами');}
		if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Перемога за  нуликами');}
		if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Перемога за  нуликами');}
		if (allblock[6].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[3].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Перемога за  нуликами');}
		if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') {document.getElementById('winy').innerHTML=winy++;	alert('Перемога за  нуликами');}
			
	}


/*релог*/
document.getElementById('btnrelog').onclick=function () {
	location.reload();
}
/* Теми	*/
$('#tema1').on('click', function() {
	$('body').css({background: "url(img/ucraine.jpg)center no-repeat"})
		$('#btn-game').css({background: "url(img/btn-1.jpg)center no-repeat"})
		$('#btnrelog').css({background: "url(img/btn-11.jpg)center repeat"})
			$('.block').css('color', '#2D2DFF')

}
);
/*тема 2*/
/* Теми	*/
$('#tema2').on('click', function() {
	$('body').css({background: "url(img/winter.jpg)center no-repeat"})
	$('#btn-game').css('background', '#54B1DC')
	$('.block').css('color', '#54B1DC')
	$('#btnrelog').css('background', '#54B1DC')
}
);
/* Тема3*/
$('#tema3').on('click', function() {
	$('body').css({background: "url(img/Spring.jpg)center no-repeat"})
		$('#btn-game').css('background', '#CDD63F')
		$('.block').css('color', '#CDD63F')
		$('#btnrelog').css('background', '#9BD63F')
}

);