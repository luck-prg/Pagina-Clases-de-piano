(function(){
	const titleQuestions = [...document.querySelectorAll('.questions__title')]
	console.log(titleQuestions);

	titleQuestions.forEach(question =>{
		question.addEventListener('click',()=>{
			let height = 0;
			let answer = question.nextElementSibling; // me devuelve la etiqueta que le sigue a la que llame. Osea en este caso, llame al H3 y la que le sigue
			// es p
			if(answer.clientHeight === 0){ // client.Height te dice el valor del Height de la etiqueta
				height = answer.scrollHeight; // scrolHeight da el esto minimo para que se muestre
			}

			answer.style.height = (height + "px");
			console.log("funciona");

		})
	})
})();