var contactUs = document.querySelector(".button-contact");
var popup = document.querySelector(".contuct-us");
var close = popup.querySelector(".modal-close");
var popupName = popup.querySelector("[name=user-name]");
var popupEmail = popup.querySelector("[name=user-emai]");
var form = popup.querySelector(".contact-details");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try{
	storageName= localStorage.getItem("popupName");
	storageEmail= localStorage.getItem("popupEmail");
} catch (err) {
	isStorageSupport = false;
}

contactUs.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("modal-show");
	if(storageName){
		popupName.value = storageName;
		popupEmail.focus();
	} else {
		popupName.focus();
	}
});
form.addEventListener("submit", function(evt){
	if(!popupName.value || !popupName.value){
		evt.preventDefault();
		popup.classList.add("modal-error");
	} else {
		if(isStorageSupport){
			localStorage.setImet("popupName", popupName.value);
			localStorage.setImet("popupEmail", popupEmail.value);
		}
	}
});
close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error"); /*АНТОН, НАПИШИ АНИМАЦИЮ!!!*/
});
window.addEventListener("keydown", function(evt){
	if(popup.classList.contains("modal-show")){
		if(evt.keyCode==27){
			evt.preventDefault();
			popup.classList.remove("modal-show");
		}
	}
});

/*   SLIDER */

var slides = document.querySelectorAll('.slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 10000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var slidesBtn = document.querySelectorAll(".slide-radio");
for(var i = 0; i<slidesBtn.length; i++){
	var slide =slidesBtn[i];
	slide.addEventListener("click", nextSlide);
}




