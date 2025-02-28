document.addEventListener("DOMContentLoaded", () => {
    languageHandler();
});


const languageHandler = () => {
    const languageBox = document.querySelector("header .language");
    const languageButton = document.querySelector("header .language > div");

    languageButton.addEventListener("click", () => {
        languageBox.classList.toggle('on');
    });
}