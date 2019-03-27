class SliderMax{
	constructor(element, speed){
		this.element = element;
		this.el = document.querySelector(element);
		this.speed = speed || 2000;
		this.wrapper =  this.el.querySelector('.slider-wrapp');
		this.link = this.el.querySelectorAll('.slider-dots ul li');
		this.prevBtn = this.el.querySelector('.prev');
		this.nextBtn = this.el.querySelector('.next');
		this.slideAll = this.el.querySelectorAll('.slider-item');
		this.slide = this.el.querySelector('.slider-item');
		this.index = 0;
		this.offsetSlid = this.slide.offsetWidth;
		this.autoplayTimer = 0;
	}
	autoplay(){
		this.autoplayTimer = setInterval( () => {
			 this.nextSlider();
			 this.setCurrentLink();	
			 this.stopSlide();
		}, this.speed);			
	}
	nextSlider(){
		if ((this.slideAll.length * this.slide.offsetWidth) == this.offsetSlid ) {
			this.wrapper.style.left = 0;
			this.offsetSlid  = 800;
			this.index = 0;
		} else {
			this.wrapper.style.left = '-' + this.offsetSlid  +'px';
			this.offsetSlid  += this.slide.offsetWidth;
			this.index++;
		}
	}
	setCurrentLink(){
		for (var i = 0; i < this.link.length; i++) {
			this.link[i].classList.remove('dot-active');
			if (this.link[i].getAttribute('data-slide') == this.index) {
				this.link[i].classList.add('dot-active');
			}
		}
	}
	stopSlide(){	
		this.wrapper.addEventListener('mouseenter', ()=> {
			clearInterval(this.autoplayTimer);
		});
		this.wrapper.addEventListener('mouseleave', ()=> {
			clearInterval(this.autoplayTimer);
			this.autoplay();
		});
	}
}
let slider = new SliderMax('#slider', 2000);
slider.autoplay();
