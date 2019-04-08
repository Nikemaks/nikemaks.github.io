let mediatorBtn = document.querySelectorAll('.mediator-btn');

function clickbtnMediator() {
	for (var i = 0; i < mediatorBtn.length; i++) {
			mediatorBtn[i].addEventListener('click', (event)=>{
			event.target.parentNode.children[1].style.display = 'block';
				console.log(mediatorBtn[i]);
		});
	}
}
clickbtnMediator();
let mediator = (function(){
	let subscribers = {};
	return {
		subscribe: function (event, callback) {
			subscribers[event] = subscribers[event] || [];
			subscribers[event].push(callback);
		},
		unsubscribe: function (event, callback) {
			let subscriberIndex;

			if (!event) {
				subscribers = {};
			} else if (event && !callback) {
				subscribers[event] = [];
			} else {
				subscriberIndex = subscribers[event].indexOf(callback);
				if (subscribeIndex > -1) {
					subscribers[event].splice(subscriberIndex, 1);
				}
			}
		},
		publish: function (event, data) {
			if (subscribers[event]) {
				subscribers[event].forEach(function (callback){
					callback(data);
				})
			}
		}
	}
}());