var link1 = document.querySelector(".site-navigation-main")
var sublist = document.querySelector(".sublist");

var sliderlink1 = document.querySelector(".slider-controls-item-1");
var sliderlink2 = document.querySelector(".slider-controls-item-2");
var sliderlink3 = document.querySelector(".slider-controls-item-3");
var slide1 = document.querySelector(".slider-item-1");
var slide2 = document.querySelector(".slider-item-2");
var slide3 = document.querySelector(".slider-item-3");
var body = document.querySelector(".body");

var loginlink = document.querySelector(".login-button");
var popup1 = document.querySelector(".modal-login");

var searchlink = document.querySelector(".button-search");
var popup2 = document.querySelector(".modal-search");

var writelink = document.querySelector(".button-write");
var close1 = document.querySelector(".modal-write-close");
var close2 = document.querySelector(".modal-overlay");
var popup3 = document.querySelector(".modal-overlay");
var popup4 = document.querySelector(".modal-write-us");

//link1.addEventListener("mouseover", function(evt) {
//	evt.preventDefault();
//	sublist.classList.add("sublist-show");
//})

link1.addEventListener("click", function(evt) {
	evt.preventDefault();
	sublist.classList.toggle("sublist-show");
})

sliderlink1.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide1.classList.add("slider-show");
	slide2.classList.remove("slider-show");
	slide3.classList.remove("slider-show");
	body.classList.add("body-slide-1");
	body.classList.remove("body-slide-2");
	body.classList.remove("body-slide-3");
})
sliderlink2.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide1.classList.remove("slider-show");
	slide2.classList.add("slider-show");
	slide3.classList.remove("slider-show");
	body.classList.remove("body-slide-1");
	body.classList.add("body-slide-2");
	body.classList.remove("body-slide-3");
})
sliderlink3.addEventListener("click", function(evt) {
	evt.preventDefault();
	slide1.classList.remove("slider-show");
	slide2.classList.remove("slider-show");
	slide3.classList.add("slider-show");
	body.classList.remove("body-slide-1");
	body.classList.remove("body-slide-2");
	body.classList.add("body-slide-3");
})

//loginlink.addEventListener("mouseover", function(evt) {
//	evt.preventDefault();
//	popup1.classList.remove("modal-none");
//	popup1.classList.add("modal-show");
//})

loginlink.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup1.classList.toggle("modal-show");
	popup1.classList.toggle("modal-none");
})

//searchlink.addEventListener("mouseover", function(evt) {
//	evt.preventDefault();
//	popup2.classList.remove("modal-none");
//	popup2.classList.add("modal-show");
//})

searchlink.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup2.classList.toggle("modal-show");
	popup2.classList.toggle("modal-none");
})

writelink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup3.classList.toggle("modal-show");
	popup3.classList.toggle("modal-none");
	popup4.classList.toggle("modal-show");
	popup4.classList.toggle("modal-none");
})
close1.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup3.classList.toggle("modal-show");
	popup3.classList.toggle("modal-none");
	popup4.classList.toggle("modal-show");
	popup4.classList.toggle("modal-none");
})
close2.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup3.classList.toggle("modal-show");
	popup3.classList.toggle("modal-none");
	popup4.classList.toggle("modal-show");
	popup4.classList.toggle("modal-none");
})
