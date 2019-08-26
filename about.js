/*********************************************************************************
* CS 290 - Web Design - Project
* Author:  Tommy Armstrong
* Date:    5/22/2019
* Description: This javascript file implements a slide show of various pictures for
*              the about me page in my personal website. It rotates through several
*              pictures utilizing the fadeIn and fadeOut functions.
*************************************************************************************/


document.addEventListener('DOMContentLoaded', slideShow);

function slideShow() {
	
	$("#slide1").delay(6000).fadeOut(3000, function(){
		$("#slide2").fadeIn(3000, function(){
			$("#slide2").delay(6000).fadeOut(3000, function(){
				$("#slide3").fadeIn(3000, function(){
					$("#slide3").delay(6000).fadeOut(3000, function(){
						$("#slide4").fadeIn(3000, function(){
							$("#slide4").delay(6000).fadeOut(3000, function(){
								$("#slide1").fadeIn(3000, slideShow);
							});
						});
					});
				});
			});
		});
	});
	
}
