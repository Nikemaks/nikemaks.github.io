//1
let errorMessage = document.getElementsByClassName('error-message')[0];

let countBtn = document.getElementById('count').onclick = function (){
	let priceApple = document.getElementById('price-apple').value,
	    discountApple = document.getElementById('discount-apple').value,
	    priceOrange = document.getElementById('price-orange').value, 
	    discountOrange = document.getElementById('discount-orange').value, 
	    price, 
	    price1,
	    result1 = document.getElementById('result1'),
	    result2 = document.getElementById('result2');
    	count(priceApple, discountApple, priceOrange, discountOrange);
    } 

function count(priceApple, discountApple, priceOrange, discountOrange){
  if (parseInt(priceApple) > 0 && parseInt(discountApple) <= 100 && parseInt(priceOrange) > 0 && parseInt(discountOrange) <= 100 ) {
   if (parseInt(discountApple) > 0 && parseInt(discountOrange) > 0) {
     price = priceApple - (priceApple * (discountApple/100));
     price1 = priceOrange - (priceOrange * (discountOrange/100));
     console.log('Ябоки украинские. \n цена: '+ price + 'грн.');
     console.log(`Ябоки украинские. 
      цена: ${price}грн.`);
     console.log('Апельсины заморские. \n цена: '+ price1 + 'грн.');
     console.log(`Апельсины заморские. 
      цена: ${price1}грн.`);
    result1.value = price,
    result2.value = price1;
   }else{
    errorMessage.style.opacity = '1';
   }
  }
};

//2
