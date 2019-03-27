var promise = new Promise(function(resolve, reject) {
  var progressBar = document.getElementById('progressBar');
  let buttonAllProgress = document.querySelector('.button-two'),
  linkPromise = document.querySelector('.left-sidebar__nav-1');
  linkPromise.childNodes[11].addEventListener('click', function  () {
  	updateProgressBar();
  })
  function updateProgressBar() {
    var curr = progressBar.value;
    var update = setInterval(function() {
      if ( curr < 0) {
        clearInterval(update);
        deleteDisabled();
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
document.querySelector('.button-two').addEventListener('click', animationArticle);
let elemArticle = document.querySelectorAll('.section-promise__content-element');
function  animationArticle(){
	for (var i = 0; i < elemArticle.length; i++) {
		console.log(elemArticle[i].childNodes);
		elemArticle[i].childNodes[1].classList.add('opacityZeroAnimate');
	}
  setTimeout(animationArticleText, 1500);
}

function  animationArticleText(){
  for (var i = 0; i < elemArticle.length; i++) {
    elemArticle[i].childNodes[3].childNodes[3].classList.add('opacityZeroAnimate');
  }
  setTimeout(animationArticleTitle, 1500);
}
function  animationArticleTitle(){
 for (var i = 0; i < elemArticle.length; i++) {
    elemArticle[i].childNodes[3].childNodes[1].classList.add('opacityZeroAnimate');
  }
  setTimeout(animationArticleBlock, 1500)

}
function animationArticleBlock() {
  for (var i = 0; i < elemArticle.length; i++) {
    elemArticle[i].classList.add('opacityZeroAnimate');
  }
   setTimeout(returnArticle, 4000)
}
function returnArticle() {
  for (var i = 0; i < elemArticle.length; i++) {
  elemArticle[i].childNodes[1].classList.add('opacityZeroAnimateRev');
  elemArticle[i].childNodes[3].childNodes[3].classList.add('opacityZeroAnimateRev');
  elemArticle[i].childNodes[3].childNodes[1].classList.add('opacityZeroAnimateRev');
  elemArticle[i].classList.add('opacityZeroAnimateRev');
  }
}
function deleteDisabled(){
  document.querySelector('.button-one').removeAttribute('disabled');
  document.querySelector('.button-two').removeAttribute('disabled');
}