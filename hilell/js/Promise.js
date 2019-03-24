var promise = new Promise(function(resolve, reject) {
  var progressBar = document.getElementById('progressBar');
  let buttonOneProgress = document.querySelector('.button-one').addEventListener('click', function  () {
  	updateProgressBar();
  })
  function updateProgressBar() {
    var curr = progressBar.value;
    var update = setInterval(function() {
      if ( curr < 0) {
        clearInterval(update);
        resolve("result");
      }
      progressBar.value = curr--;
    }, 25)
  }
});
promise
  .then(
    result => {
     animationArticle();
    },
    error => {
      alert("Rejected: " + error);
    }
  );

function  animationArticle(){
	let elemArticle = document.querySelectorAll('.section-promise__content-element');
	for (var i = 0; i < elemArticle.length; i++) {
		console.log(elemArticle[i].childNodes);
		elemArticle[i].childNodes[1].classList.add('opacityZeroAnimate');
		//elemArticle[i].childNodes[3].classList.add('opacityZeroAnimate');
	}
}


