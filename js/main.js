document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
})

// Получаем кнопку и текст
const languageButton = document.getElementById('languageButton');
const languageText = document.getElementById('languageText');

// Устанавливаем начальное состояние
let isEnglish = true; // По умолчанию, EN

// Обработчик события клика
languageButton.addEventListener('click', function() {
    // Меняем текст и язык
    isEnglish = !isEnglish; // Переключаем язык
    if (isEnglish) {
        languageText.textContent = 'EN';
    } else {
        languageText.textContent = 'RUS';
    }
});

// Иконки слева движутся снизу вверх
function startAnimationLeft() {
    const circles = document.querySelectorAll('.left__circle');

    circles.forEach((circle, index) => {
        let delay = 1560;

        setTimeout(() => {
            circle.style.animation = 'leftRightAnimation 14s linear infinite';
        }, index * delay);
    });
}

startAnimationLeft();

// Иконки посередине движутся сверху вниз
function startAnimationCenter() {
    const circles = document.querySelectorAll('.center__circle');

    circles.forEach((circle, index) => {
        let delay = 1560;

        setTimeout(() => {
            circle.style.animation = 'centerAnimation 14s linear infinite';
        }, index * delay);
    });
}

startAnimationCenter();

// Иконки справа движутся снизу вверх
function startAnimationRight() {
    const circles = document.querySelectorAll('.right__circle');

    circles.forEach((circle, index) => {
        let delay = 1560;

        setTimeout(() => {
            circle.style.animation = 'leftRightAnimation 14s linear infinite';
        }, index * delay);
    });
}

startAnimationRight();


const scrollContainer = document.querySelector('.blog__content');
const listContainer = document.querySelector('.blog__list');


scrollContainer.addEventListener('scroll', () => {
  listContainer.style.transform = `translateY(-${scrollContainer.scrollTop}px)`;
});




