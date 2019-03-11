
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
			this.speed = speed || 2000;
			this.autoplay(this.wrapper,this.slide,this.slideAll, this.speed);
			this.navigation(this.prevBtn,this.nextBtn,this.wrapper,this.slide,this.slideAll);
		},
		navigation: function (prevBtn, nextBtn,wrapper,slide,slideAll) {
			let offsetSlid = slide.offsetWidth;
			prevBtn.addEventListener('click', function() {
				if (offsetSlid == 0) {
					offsetSlid =  (slideAll.length * slide.offsetWidth) - slide.offsetWidth;
					wrapper.style.left = '-' + offsetSlid  +'px';
				} else{
					offsetSlid -=  slide.offsetWidth;
					wrapper.style.left = '-' + offsetSlid  +'px';
				}
			
			});
			nextBtn.addEventListener('click', function() {
				if ((slideAll.length * slide.offsetWidth) == offsetSlid) {
					wrapper.style.left = 0;
					offsetSlid = 0;
				} else {
					wrapper.style.left = '-' + offsetSlid +'px';
					offsetSlid += slide.offsetWidth;
				}

			});
		},
		stopSlide: function(autoplayTimer,wrapper,slide,slideAll,speed){	
			this.wrapper.addEventListener('mouseover', function(){
				clearInterval(autoplayTimer);
			});
			this.wrapper.addEventListener('mouseout', function(){
				
			});
		},
		setCurrentLink: function () {

		},
		autoplay: function (wrapper,slide,slideAll,speed) {
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
			this.stopSlide(autoplayTimer,wrapper,slide,slideAll,speed);
		}
	};
var slider1 = new SliderMax("#slider", 2000);
// var slider1 = new SliderMax("#slider2", 3500);
}
document.addEventListener("DOMContentLoaded", ready);