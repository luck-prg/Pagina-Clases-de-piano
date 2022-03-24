(function(){

	const sliders = [...document.querySelectorAll(".testimony__body")]; // Hago un array con los elementos que contengan la clase .testimony__body
	const buttonNext = document.querySelector('#next'); // 
	const buttonBefore = document.querySelector('#before');
	console.log(sliders);

	let value;

	buttonNext.addEventListener('click',()=>{
		changePosition(1);
	})

	buttonBefore.addEventListener('click',()=>{
		changePosition(-1);
	})

	const changePosition = (add)=>{
		const currentTestimony = document.querySelector('.testimony__body--show').dataset.id; // llama a la etiqueta que tenga esa clase y le pide el ID 
		value = Number(currentTestimony);
		value += add; // 2

		sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
		
		if(value === sliders.length+1 || value === 0){
			value = value === 0 ? sliders.length : 1;
			// Dice: Si valuee es igual a 0, entonces (?) value = slider.length, caso contrario(:) value = 1 
		}

		sliders[value-1].classList.add('testimony__body--show');
		console.log(value);
	}



})();