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
							person_skin = document.getElementById('person-skin'),
							person_clothes = document.getElementsByClassName('person-clothes')[0],
							person_hair = document.getElementsByClassName('person-hair')[0],


					

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


			// цвет кожи слайдер
		let		prev = document.querySelector('.prev'),
							next = document.querySelector('.next');

			let	slideIndex = 1,
						 skin_color_1 = document.getElementsByClassName('skin-color-1')[0],
							skin_color_2 = document.getElementsByClassName('skin-color-2')[0],
							skin_color_3 = document.getElementsByClassName('skin-color-3')[0],
							skin_color = document.getElementsByClassName('skin-color');
	
			function showSlide(n){
				if (n > skin_color.length) {
						slideIndex = 1;
				};

				if (n < 1) {
					slideIndex = skin_color.length;

				};
				for (let i = 0; i < skin_color.length; i++) {
					skin_color[i].style.display = 'none';
				};

				skin_color[slideIndex - 1].style.display = 'block';

			};

			function plusSlides(n) {
				showSlide(slideIndex += n);
			};

			next.addEventListener('click', function(){
				 plusSlides(1);
				 colorSkin(slideIndex);

			});

			prev.addEventListener('click', function(){
					plusSlides(-1);
					colorSkin(slideIndex);
			});
	// изменения на самой модельке
	function colorSkin(a){

			if(a == 1){
						 person_skin.classList.remove('person-skin');
						 person_skin.classList.add('person-skin-2');
						 person_skin.classList.remove('person-skin-3')

			};

			if (a == 2){
							person_skin.classList.remove('person-skin-3');
						 person_skin.classList.add('person-skin-2');		
						 person_skin.classList.remove('person-skin')
			};

				if (a == 3){
							person_skin.classList.remove('person-skin-2');
						 person_skin.classList.add('person-skin-3');
						 person_skin.classList.remove('person-skin')
			};

			
	};
	

// Изменения прически

let indexHair = 1,
				next_hair = document.getElementsByClassName('next-hair')[0],
				prev_hair = document.getElementsByClassName('prev-hair')[0];
				hair_style = document.getElementsByClassName('hair-style');

next_hair.addEventListener('click', function(){

});

function sliderShowHair(b){
	if (b > hair_style.length) {
			indexHair = 1;
	};
	if (b < 1){
			indexHair = hair_style.length ;
	};

	for (let i = 0; i < hair_style.length; i++) {
		hair_style
	}
};

	
});

