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
// Изменения пола

			let male = document.getElementById('male'),
							female = document.getElementById('female'),
							radioBtn = document.getElementsByClassName('radio')[0],
							person_skin = document.getElementsByClassName('person-skin')[0],
							person_clothes = document.getElementsByClassName('person-clothes')[0],
							person_hair = document.getElementsByClassName('person-hair')[0],


							skin_color_1 = document.querySelector('skin-color-1'),
							skin_color_2 = document.querySelector('skin-color-2'),
							skin_color_3 = document.querySelector('skin-color-3'),


							hair_style_1 = document.querySelector('hair-style-1'),
							hair_style_2 = document.querySelector('hair-style-2'),
							hair_style_3 = document.querySelector('hair-style-3'),
							hair_style_4 = document.querySelector('hair-style-4'),
							hair_style_5 = document.querySelector('hair-style-5'),
							hair_style_6 = document.querySelector('hair-style-6'),


							clothes_style_1 = document.querySelector('clothes-style-1'),
							clothes_style_2 = document.querySelector('clothes-style-2'),
							clothes_style_3 = document.querySelector('clothes-style-3'),
							clothes_style_4 = document.querySelector('clothes-style-4'),
							clothes_style_5 = document.querySelector('clothes-style-5'),
							clothes_style_6 = document.querySelector('clothes-style-6');

					female.addEventListener('change', function(){

			person_skin.style.background = 'url(../img/skin/skin-4.png) center no-repeat';
			person_clothes.style.background = 'url(../img/clothes/construct/clothes-4.png) center no-repeat';
			person_hair.style.background = 'url(../img/hair/construct/hair-4.png) center no-repeat';

});


	



	
});

