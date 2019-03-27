function creataBall(){
	let ball = document.createElement('img'),
		body = document.querySelector('body');

		ball.setAttribute('src', 'img/ball.png');
		ball.className = 'animate-ball';

		body.appendChild(ball);
	
		setTimeout(function(){
			ball.classList.add('animate-ball__keyframe');
		}, 1000);

};
creataBall();
