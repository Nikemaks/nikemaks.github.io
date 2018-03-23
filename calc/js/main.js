let total = 2500,// финальная цена
				time = 1, //время
				hoyrRate,
				tabLeft = document.querySelector('.tab-left'),
				tabRight = document.querySelector('.tab-right'),
				blocksBlock = document.getElementById('blocks-block'),
				pagesBlock = document.getElementById('pages-block'),
				counterBlock = document.getElementById('counter-block'),
				counterPages = document.getElementById('counter-pages'),
				counterHours = document.getElementById('counter-hours'),
				counterRate = document.getElementById('counter-rate'),
				changesCheck = document.getElementById('changes-check'),
				cmsCheck = document.getElementById('changes-cms'),
				totalValue = document.getElementsByClassName('total-count')[0],
				input = document.getElementsByTagName('input');


				

const land = 2500, // ландинг
      corp = 6000,// корпаративный сайт
      cms = 2000,
      changes = 500;
      blocks = 250,// цена за блок
      pages = 1000;//цена за страницу


window.addEventListener('DOMContentLoaded',function () {

	tabLeft.addEventListener('click', () => {

			for(let i = 0; i < input.length; i++){
				input[i].value = '';

			};

			blocksBlock.style.display = 'flex';
			pagesBlock.style.display = 'none';

			tabLeft.classList.add('active');
			tabRight.classList.remove('active');

			if (changesCheck.checked) {
					changesCheck.checked = false;

			};

			if (cmsCheck.checked) {
			cmsCheck.checked = false;
					
			};

			total = land;
			totalValue.value = total;


	});


	tabRight.addEventListener('click', () => {

			for(let i = 0; i < input.length; i++){
				input[i].value = '';

			};
			blocksBlock.style.display = 'none';
			pagesBlock.style.display = 'flex';

			tabRight.classList.add('active');
			tabLeft.classList.remove('active');

			if (changesCheck.checked) {
					  changesCheck.checked = false;

			};

			if (cmsCheck.checked) {
			    cmsCheck.checked = false;
					
			};

			total = corp;
			totalValue.value = total;


	});
});