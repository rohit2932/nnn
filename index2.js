const sharebtn =
	document.querySelector('.sharebtn')

var bool = 0

sharebtn.addEventListener('click', () => {

	bool = !bool
	
	if (bool == 0) {
		sharebtn.innerHTML =
			'<i class="far fa-share-square"></i>'
	} else {
		sharebtn.innerHTML =
			'<i class="fas fa-times"></i>'
	}
})
