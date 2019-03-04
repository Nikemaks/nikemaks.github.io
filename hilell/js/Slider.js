function SliderMax(element){
this.el = document.querySelector(element);
this.init();
//this.slide();
}

SliderMax.prototype = {
	init: function () {
		this.wrapper =  this.el.querySelector('.slider-wrapp');
		this.link = this.el.querySelectorAll('.slider-dots ul li');
		this.prevBtn = this.el.querySelector('.prev');
		this.nextBtn = this.el.querySelector('.next');	
	},
	navigation: function () {

	},

	slide: function(element){
		var index = parseInt(element.getAttribute("data-slide"),10) + 1;
		var currentSlide = this.el.querySelector(".slider-item:nth-child("+ index +")");
		this.prevBtn.addEventListener('click', function (e) {
			
		});	
		this.nextBtn.addEventListener('click', function (e) {
			wrapper.style.left = '-' + currentSlide.offsetLeft +'px';
			console.log(currentSlide.offsetLeft);

		});	

	},
	setCurrentLink: function () {

	},
	autoplay: function () {
		
	}
};
var slider1 = new SliderMax("#slider");