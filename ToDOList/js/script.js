'use strict'
document.addEventListener("DOMContentLoaded", function(event) {
	let container = document.querySelector('.container'),
		addTodoList = document.getElementById('addTodoList'),
		createTodo = document.querySelectorAll('.create-todo');
	


	addTodoList.addEventListener('click', createTitleToDo);

	function createTitleToDo(){
		let createTitle =  '\
			<div class="todolist-header">\
				<div class="todolist-header__left-Create">\
					<img src="img/calendar.png" alt="calendar">\
					<h2 class="todolist-header__right-title__Create">\
						<input  type="text" value = "" placeholder="Create a Todo List">\
					</h2>\
				</div>\
				<div class="todolist-header__right-Create">\
					<button class = "create-todo">Add List</button>\
				</div>\
		</div>';
		let div = document.createElement('div');
		div.className = "todolist";
		div.innerHTML = createTitle;
		
		container.insertBefore(div, addTodoList);
	}

	function addNewList(){

	}
});