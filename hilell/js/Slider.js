
function ready(){
	function SliderMax(element, speed){
	this.el = document.querySelector(element);
	this.speed = speed;
	this.init(speed);
	}

	SliderMax.prototype = {
		init: function (speed) {
			this.wrapper =  this.el.querySelector('.slider-wrapp');
			this.link = this.el.querySelectorAll('.slider-dots ul li');
			this.prevBtn = this.el.querySelector('.prev');
			this.nextBtn = this.el.querySelector('.next');
			this.slideAll = this.el.querySelectorAll('.slider-item');
			this.slide = this.el.querySelector('.slider-item');
			this.speed = speed;
			this.autoplay(this.wrapper,this.slide,this.slideAll, this.speed);	
		},
		navigation: function () {

		},
		slide: function(element){	

		},
		setCurrentLink: function () {

		},
		autoplay: function (wrapper,slide,slideAll, speed) {
			let offsetSlid = slide.offsetWidth; 
			let autoplayTimer = setInterval(function(){
				
				if ((slideAll.length * slide.offsetWidth) == offsetSlid) {
					wrapper.style.left = 0;
					offsetSlid = 0;
				} else {
					wrapper.style.left = '-' + offsetSlid +'px';
					offsetSlid += slide.offsetWidth;
				}
			}, speed);	
			
		}
	};
var slider1 = new SliderMax("#slider", 2500);
var slider1 = new SliderMax("#slider2", 3500);
}
document.addEventListener("DOMContentLoaded", ready);