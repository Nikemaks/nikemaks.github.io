window.onload = function(){
	let sidebar = document.getElementById('left-sidebar'),
	    content = document.getElementById('main-contant'),
	    buton_menu = document.getElementById('btn-menu');

	buton_menu.onclick = function(){
		if (content.classList.contains('sadebar-active')) {
	       content.classList.remove("sadebar-active");
	       sidebar.classList.remove("sadebar-left");
		}else{
			content.classList.add("sadebar-active");
			sidebar.classList.add("sadebar-left");
		}
	};

	let menuActive = document.querySelector('.left-sidebar__nav-1');

	menuActive.onclick = function(event){
	event.preventDefault();
	let activeSection =	event.target.getAttribute('href'),
		sections = document.getElementsByClassName('section');

	for (let i = 0; i < menuActive.children.length; i++) {
		 menuActive.children[i].lastChild.classList.remove('left-sidebar__block-active');
	}
		event.target.classList.add("left-sidebar__block-active");
		checkIdSections(sections, activeSection);

	};

	function checkIdSections(sections, activeSection){

		for (let i = 0; i < sections.length; i++) {
			if (activeSection == sections[i].getAttribute('id')) {
				console.log(activeSection, sections[i].getAttribute('id'));
				showSection(i,sections);
			}
			
		}
	}
	function showSection(i,sections){
		for (let j = 0; j < sections.length; j++) {
			sections[j].classList.remove('section-active');
		}
		
		sections[i].classList.add('section-active');
	}
}
