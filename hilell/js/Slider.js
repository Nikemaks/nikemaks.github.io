
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
			this.index = 0;
			this.autoplay(this.wrapper,this.slide,this.slideAll, this.speed, this.link, this.index);
			this.navigation(this.prevBtn,this.nextBtn,this.wrapper,this.slide,this.slideAll,this.index, this.link);
		},
		navigation: function (prevBtn, nextBtn,wrapper,slide,slideAll, index, link) {
			let offsetSlid = slide.offsetWidth;
			prevBtn.addEventListener('click', function() {
				--index;
				if (wrapper.style.left == '0px') {
					offsetSlid = (slideAll.length - 1) * slide.offsetWidth ;
					wrapper.style.left = '-' + offsetSlid  +'px';
					index = link.length - 1;
				} else {
					wrapper.style.left = '-' + offsetSlid  +'px';
					offsetSlid -= slide.offsetWidth;

				}
				SliderMax.prototype.setCurrentLink(index, link);
			
			});
			nextBtn.addEventListener('click', function() {
				++index;
				if ((slideAll.length * slide.offsetWidth) == offsetSlid) {
					wrapper.style.left = 0;
					offsetSlid = 800;
					index = 0;
				} else {
					wrapper.style.left = '-' + offsetSlid +'px';
					offsetSlid += slide.offsetWidth;
				}
				    SliderMax.prototype.setCurrentLink(index, link);
			});
		},
		stopSlide: function(autoplayTimer,wrapper,slide,slideAll,speed){	
			this.wrapper.addEventListener('mouseenter', function(){
				clearInterval(autoplayTimer);
			});
			this.wrapper.addEventListener('mouseleave', function(){
				
			});
		},
		setCurrentLink: function (index, link) {
			for (var i = 0; i < link.length; i++) {
				link[i].classList.remove('dot-active');
				if (link[i].getAttribute('data-slide') == index) {
					link[i].classList.add('dot-active');
				}
			}
		},
		autoplay: function (wrapper,slide,slideAll,speed,link,index) {
			let offsetSlid = slide.offsetWidth; 
			let autoplayTimer = setInterval(function(){
				if ((slideAll.length * slide.offsetWidth) == offsetSlid) {
					wrapper.style.left = 0;
					offsetSlid = 800;
					index = 0;
				} else {
					wrapper.style.left = '-' + offsetSlid +'px';
					offsetSlid += slide.offsetWidth;
					index++;
				}
				SliderMax.prototype.setCurrentLink(index, link);

			}, speed);	
			this.stopSlide(autoplayTimer,wrapper,slide,slideAll,speed);
		}
	};
var slider1 = new SliderMax("#slider", 2000);
// var slider1 = new SliderMax("#slider2", 3500);
}
document.addEventListener("DOMContentLoaded", ready);