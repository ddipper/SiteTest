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
    }
})


let isVisibleBurger = false

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
}