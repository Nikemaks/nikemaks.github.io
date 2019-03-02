
	window.onresize = function(){
		timer();
	};
	function timer(){
		let date = new Date(),
			seconds = date.getSeconds();

		let timer = setTimeout(function(){
			if (seconds == seconds) {
				paintScreen();
				clearTimeout(timer);
			}
		}, 2000);
	};
	function paintScreen(){
		let widthScreen = document.body.clientWidth,
			heightScreen = document.body.clientHeight,
			height = document.querySelector('.height'),
			width = document.querySelector('.width');

		height.innerHTML = heightScreen;
		width.innerHTML = widthScreen;
	};
	paintScreen();	