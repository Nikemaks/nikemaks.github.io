let progressBar = document.getElementById('progressBar'),
	buttonAllProgress = document.querySelector('.button-two'),
	linkPromise = document.querySelector('.left-sidebar__nav-1'),
	btnOne = document.querySelector('.button-one'),
	btnTwo = document.querySelector('.button-two'),
	elemArticle = document.querySelectorAll('.section-promise__content-element');



let promise = new Promise(function(resolve, reject){

	linkPromise.childNodes[11].addEventListener('click', function  () {
		updateProgressBar();
	});	

	function updateProgressBar() {
		var curr = progressBar.value,
			update = setInterval(function() {
		if ( curr < 0) {
		    clearInterval(update);
		  	deleteDisabled();
			btnTwo.addEventListener('click', ()=> resolve());

		}
			progressBar.value = curr--;
		}, 10)
	}
});
function deleteDisabled(){
  btnOne.removeAttribute('disabled');
  btnTwo.removeAttribute('disabled');
}
for (let i = 0; i < elemArticle.length; i++) {
	promise
		.then(
			result => {
				elemArticle[i].children[0].classList.add('opacityZeroAnimate');
				return promise;
			}
		)
		.then(
			result => {
				let event = elemArticle[i].children[0].addEventListener('animationend', function addClass(){
					elemArticle[i].children[1].children[1].classList.add('opacityZeroAnimate');
				});
				return promise;
			}

		)
		.then(
			result => {
				elemArticle[i].children[1].children[1].addEventListener('animationend', ()=>{
					elemArticle[i].children[1].children[0].classList.add('opacityZeroAnimate');
					return promise;
				})
			}
		).then(
			result => {	
				elemArticle[i].children[1].children[0].addEventListener('animationend', ()=>{
					elemArticle[i].classList.add('opacityZeroAnimate');
					return promise;
				})
			}	
		).then(
			// elemArticle[i].addEventListener('animationend', ()=>{
			//  returnAll(i)
			// })
		);	
}
function returnAll(i) {
	if (i === 2) {
		for (let i = 0; i < elemArticle.length; i++) {
			elemArticle[i].classList.add('opacityZeroAnimateRev');
		}	
	}
 }