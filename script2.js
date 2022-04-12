
/* Устанавливаем индекс слайда по умолчанию */
let slideIndexW = 1;
showSlides2(slideIndexW);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide2() {
    showSlides2(slideIndexW += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide2() {
    showSlides2(slideIndexW -= 1);
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides2(slideIndexW = n);
}

/* Функция перелистывания */
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("calloutDivs");

    if (n > slides.length) {
        slideIndexW = 1
    }
    if (n < 1) {
        slideIndexW = slides.length
    }

    /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndexW - 1].style.display = "block";
}

