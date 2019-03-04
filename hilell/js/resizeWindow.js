
	window.onresize = function(){

		let timer = setTimeout(function(){
				paintScreen();
				clearTimeout(timer);
		}, 2000);
		//console.log(timer);
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