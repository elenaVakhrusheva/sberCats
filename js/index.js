const cardsContainer = document.querySelector(".cards");
const btnOpenPopupForm = document.querySelector("#add");
const btnOpenPopupLogin = document.querySelector("#login");
const formCatAdd = document.querySelector("#popup-form-cat");
const formLogin = document.querySelector("#popup-form-login");

const popupAddCat = new Popup("popup-add-cats");
popupAddCat.setEventListener();

const popupLogin = new Popup("popup-login");
popupLogin.setEventListener();