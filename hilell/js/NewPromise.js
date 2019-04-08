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
			btnTwo.addEventListener('click', ()=> resolve(true));
		}
			progressBar.value = curr--;
		}, 50)
	}
});

let promise2 = new Promise(function (resolve, reject) {
	btnOne.addEventListener('click', ()=> resolve(false));
})
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
				elemArticle[i].children[0].addEventListener('animationend', function addClass(event){
					event.stopPropagation();
					elemArticle[i].children[1].children[1].classList.add('opacityZeroAnimate');
				});
				return promise;
			}

		)
		.then(
			result => {
				elemArticle[i].children[1].children[1].addEventListener('animationend', (event)=>{
					event.stopPropagation();
					elemArticle[i].children[1].children[0].classList.add('opacityZeroAnimate');
					return promise;
				})
			}
		)
		.then(
			result => {	
				elemArticle[i].children[1].children[0].addEventListener('animationend', (event)=>{
					event.stopPropagation();
					elemArticle[i].classList.add('opacityZeroAnimate');
					return promise;
				})
			}	
		)
		.then(
			elemArticle[i].addEventListener('animationend', (event)=>{
				event.stopPropagation();
			 	returnAll();
			})
		);	
}
function returnAll() {
		for (let i = 0; i < elemArticle.length; i++) {
			event.stopPropagation();
			elemArticle[i].classList.add('opacityZeroAnimateRev');
			elemArticle[i].children[1].children[0].classList.add('opacityZeroAnimateRev');
			elemArticle[i].children[1].children[1].classList.add('opacityZeroAnimateRev');
			elemArticle[i].children[0].classList.add('opacityZeroAnimateRev');
		}	
 }

 for (let i = 0; i < elemArticle.length; i++) {
	promise2
	  .then(
	  	result => {
			// hideElem(i)
	  		console.log('11');
	  	}
	  )
	  .then(
	
	  )
	  .then(

	  )
 }
function hideElem(i){
		event.stopPropagation();

		elemArticle[i].children[1].children[0].classList.add('opacityZeroAnimate');

		elemArticle[i].children[1].children[0].addEventListener('animationend', function hideimg(){
			event.stopPropagation();
			elemArticle[i].children[1].children[1].classList.add('opacityZeroAnimate');
			elemArticle[i].children[1].children[0].removeEventListener('animationend', hideimg)
		})
		elemArticle[i].children[1].children[1].addEventListener('animationend', function hideTitle() {
			event.stopPropagation();
			elemArticle[i].children[0].classList.add('opacityZeroAnimate');
			elemArticle[i].children[1].children[1].removeEventListener('animationend', hideTitle);
		})
		elemArticle[i].children[0].addEventListener('animationend', ()=>{
			event.stopPropagation();
			elemArticle[i].classList.add('opacityZeroAnimate');
		})
		
	//elemArticle[i].children[0].classList.add('opacityZeroAnimate');

}