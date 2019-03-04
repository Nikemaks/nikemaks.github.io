function SliderMax(element){
this.el = document.querySelector(element);
this.init();
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

	slide: function(){
		this.prevBtn.addEventListenear('click', function (e) {
			console.log('click');
		})	

	},
	setCurrentLink: function () {

	},
	autoplay: function () {
		
	}
};
var slider1 = new SliderMax("#slider");