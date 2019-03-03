let blockButton =  document.querySelector('.block-button');
blockButton.addEventListener('click', clickMe);
function clickMe(event){
	if (event.target.style.backgroundColor == event.target.value) {
		event.target.style.backgroundColor = 'buttonface';
	} else {
		event.target.style.backgroundColor = event.target.value;	
	}
}