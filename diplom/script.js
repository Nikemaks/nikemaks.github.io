document.addEventListener("DOMContentLoaded", function() {

	//Переход к костомизации

	let  popup_btn = document.getElementById('popup-btn'),
						overlay = document.querySelector('.overlay'),
						custom = document.getElementsByClassName('custom')[0],
						main = document.getElementsByClassName('main')[0],
						custom_info = document.getElementsByClassName('custom-info')[0],
						custom_char = document.getElementsByClassName('custom-char')[0],
						custom_style = document.getElementsByClassName('custom-style')[0];


						popup_btn.addEventListener('click', function(){
									overlay.style.display = 'none';
									main.style.display = 'none';
									custom.style.display = 'flex';
									custom_char.style.display = 'block';
									custom_info.style.display = 'block';
									custom_style.style.display = 'block';

						});

	
});

