window.onload = function(){
let sidebar = document.getElementById('left-sidebar'),
    content = document.getElementById('main-contant'),
    buton_menu = document.getElementById('btn-menu');

buton_menu.onclick = function(){
	if (content.classList.contains('sadebar-active')) {
       content.classList.remove("sadebar-active");
       sidebar.style.left = '-25%';
	}else{
		content.classList.add("sadebar-active");
		sidebar.style.left = '0';
	}
};

}