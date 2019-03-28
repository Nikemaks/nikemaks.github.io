let progressBar = document.getElementById('progressBar'),
	buttonAllProgress = document.querySelector('.button-two'),
	linkPromise = document.querySelector('.left-sidebar__nav-1');



let promise = new Promise(function(resolve, reject){

	linkPromise.childNodes[11].addEventListener('click', function  () {
		updateProgressBar();
	});	

	function updateProgressBar() {
		var curr = progressBar.value,
			update = setInterval(function() {
		if ( curr < 0) {
		    clearInterval(update);
		  	resolve();
		}
			progressBar.value = curr--;
		}, 25)
	}
});

promise
	.then(
		result => {
			console.log('1');
			return promise;
		}
	)
	.then(
		result => console.log('2')
	);