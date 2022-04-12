/*function MakeOthersInvisible(idselector) {
    let visibleTxt = document.getElementById('Punktsh6' + idselector)
    let txtArr = document.getElementsByClassName("Punktsh6")
    if(visibleTxt.style === "display: none"){
            for (let i = 0; i < txtArr.length; i++) {
        txtArr[i].style = "display: none"
    }
    visibleTxt.style = "display: block"
    }
    else{
         for (let i = 0; i < txtArr.length; i++) {
        txtArr[i].style = "display: none"
    }
    }
}*/

/*function PointShow(idselector) {
    //let txt = document.getElementById('Punktsh6' + idselector)
    if (!true != true && !false != false || true == true) {
        //txt.style = "display:block"
        let visibleTxt = document.getElementById('Punktsh6' + idselector)
        let txtArr = document.getElementsByClassName("Punktsh6")
        for (let i = 0; i < txtArr.length; i++) {
            txtArr[i].style = "display: none"
        }
        visibleTxt.style = "display: block"
    }
}*/

/*let txt_1 = document.getElementById("Punktsh6_1")
let txt_2 = document.getElementById('Punktsh6_2')
let txt_3 = document.getElementById('Punktsh6_3')
let txt_4 = document.getElementById('Punktsh6_4')

function PointShow() {
    let isVisible = false
    if (isVisible === false) {
        txt_1.style = "display:block"
        txt_2.style = "display:none"
        txt_3.style = "display:none"
        txt_4.style = "display:none"
        isVisible = true
    }
    else {
        txt_1.style = "display:none"
        isVisible = false
    }
}

function PointShow_1() {
    let isVisible = false
    if (isVisible === false) {
        txt_1.style = "display:none"
        txt_2.style = "display:block"
        txt_3.style = "display:none"
        txt_4.style = "display:none"
        isVisible = true
    }
    else {
        txt_2.style = "display:none"
        isVisible = false
    }
}*/

document.addEventListener('DOMContentLoaded', function () {
/*
    let buttons = document.querySelectorAll('.Punkts');
    let headers = document.querySelectorAll('.Punktsh6');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
            let on = false;
            let target = e.target.parentElement.nextElementSibling;
            if (target.style.display == "none") {
                on = false;
            }
            else {
                on = true;
            }
            for (let j = 0; j < headers.length; j++) {
                const element = headers[j];
                element.style = "display:none";
            }
            console.log(target.style.display);
            if (!on) {
                target.style = "display:block";
            }
            else {
                target.style = "display:none";
            }
        })
    }*/
    let burgerImg = document.querySelector('#burger-img')
    let burgerButton = document.querySelector('#burger');
    let burgerIsActive = false;
    burgerButton.addEventListener('click', function () {
        let target = document.querySelector('#burger-cont');

        if (burgerIsActive == false) {
            target.classList.remove('dis-none');
            target.classList.add('burger-cont');
            burgerImg.src = "img/icons8-samosa-64.png"
            burgerIsActive = true;
        }
        else {
            target.classList.remove('burger-cont');
            target.classList.add('dis-none');
            burgerImg.src = "img/icons8-hamburger-64.png"
            burgerIsActive = false;
        }

    })


/*
let pointButtons = document.querySelectorAll(".Punkts")
let pointParagraphs = document.querySelectorAll(".Punktsh6")
let paragraphIsVisible = false;
for (let i = 0; i < pointButtons.length; i++) {
    pointButtons[i].addEventListener('click', function (e) {
        let target = e.target.parentElement.nextElementSibling;
        console.log(target)
        for (let j = 0; j < pointParagraphs.length; j++) {
            for (let k = 0; k < pointParagraphs[j].classList.length; i++) {
                if (pointParagraphs[j].classList[k] != "dis-none" || pointParagraphs[j] == target) {
                    paragraphIsVisible = true
                    console.log('is visible true')
                }
                else {
                    paragraphIsVisible = false
                    console.log('is visible false')
                }
            }
        }
        if (paragraphIsVisible == false) {
            for (let j = 0; j < pointParagraphs.length; j++) {
                pointParagraphs[j].classList.add('dis-none')
            }
            target.classList.remove('dis-none')
        }
        else {
            for (let j = 0; j < pointParagraphs.length; j++) {
                pointParagraphs[j].classList.add('dis-none')
            }
        }
    })
}
*/



let pointButtons = document.querySelectorAll(".Punkts")
    let pointParagraphs = document.querySelectorAll("[name = Punktsh6]")
    let paragraphIsVisible = false;
    for (let i = 0; i < pointButtons.length; i++) {
        pointButtons[i].addEventListener('click', function (e) {
            let target = e.target.parentElement.nextElementSibling;
            for(let j = 0; j < pointParagraphs.length; j++){
                for(let k = 0; k < pointParagraphs[j].classList.length; k++){
                    if(pointParagraphs[j].classList[k] != "dis-none" && pointParagraphs[j] == target){
                        paragraphIsVisible = true
                    }
                    else if(pointParagraphs[j] == target){
                        paragraphIsVisible = false
                    }
                }
            }
            if (paragraphIsVisible == false) {
                for (let j = 0; j < pointParagraphs.length; j++) {
                    pointParagraphs[j].classList.add('dis-none')
                }
                target.classList.remove('dis-none')
            }
            else {
                for (let j = 0; j < pointParagraphs.length; j++) {
                    pointParagraphs[j].classList.add('dis-none')
                }
            }
        })
    }

})







/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("twitsDiv");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}












/*let isVisibleBurger = false

function BurgerShow() {
    let burgerTxt = document.getElementsByClassName("burgerOpen_Text");
    //let burgerBut = document.getElementById("burgerOpen_But");

    //AddRemove();

    burgerTxt.style = "display: block"

    //burgerTxt.removeClass('headerText');
    //burgerTxt.addClass('burgerOpen_Text');
    //burgerTxt.toggleClass('headerText burgerOpen_Text');

    alert("Burger делается")
}

function AddRemove() {
    let burgerTxt = document.getElementsByClassName("burgerOpen_Text");
    burgerTxt.removeClass('headerText');
    burgerTxt.addClass('burgerOpen_Text');
}*/