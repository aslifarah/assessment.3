console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function hover(){
	alert("You look good today")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

img.addEventListener('onmouseover', hover)