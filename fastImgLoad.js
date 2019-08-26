/******************************************************************************
* Date: 6/9/2019
* Description:  this script optimizes page loading by first assigning low res
*				versions of the images to by loaded to the picture elements.
*				once the high res images have loaded the picture elements are
*				assigned to the high res images' paths. This way the page does
*				not have to wait for the high res images to load before loading
*				itself.
*********************************************************************************/

document.addEventListener('DOMContentLoaded', loadHighRes);

function loadHighRes() {
	console.log("Loading High Res Images");
	const objects = document.getElementsByClassName('asyncImage');

	Array.from(objects).map( (item) => {

		const img = new Image();
		img.src = item.dataset.src;
		img.onload = () => {
			console.log(item.dataset.src + " Loaded");
			item.classList.remove('asyncImage');
			return item.style.backgroundImage = `url(${item.dataset.src})`;
		};


	});

}