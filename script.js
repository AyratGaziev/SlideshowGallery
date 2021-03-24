const allImg = document.querySelectorAll(".slider__img");
const right = document.querySelector(".slider__right");
const left = document.querySelector(".slider__left");
const thumbImg = document.querySelectorAll(".thumb__img-wrap");
const fullImgWrap = document.querySelector(".full");
const fullCloseBtn = document.querySelector(".full__btn");
const fullImgBg = document.querySelector(".full__bg");
const fullImg = document.querySelector(".full__img");
const fullLeft = document.querySelector(".full__left");
const fullRight = document.querySelector(".full__right");

let currentSlide = 0;

//Slide every 2sec
// setInterval(next, 2000);

function removeThumbFilter(index) {
    thumbImg.forEach((i) => i.classList.add("filter"));
    thumbImg[index].classList.remove("filter");
}

function next() {
    if (currentSlide < allImg.length - 1) {
        currentSlide++;

        removeThumbFilter(currentSlide);

        allImg.forEach((img) => {
            img.classList.remove("show");
        });
        allImg[currentSlide].classList.add("show");
    } else {
        currentSlide = 0;

        removeThumbFilter(currentSlide);

        allImg.forEach((img) => {
            img.classList.remove("show");
        });
        allImg[currentSlide].classList.add("show");
    }
}

function prev() {
    if (currentSlide > 0) {
        currentSlide--;

        removeThumbFilter(currentSlide);

        allImg.forEach((img) => {
            img.classList.remove("show");
        });
        allImg[currentSlide].classList.add("show");
    } else {
        currentSlide = allImg.length - 1;

        removeThumbFilter(currentSlide);

        allImg.forEach((img) => {
            img.classList.remove("show");
        });
        allImg[currentSlide].classList.add("show");
    }
}

right.addEventListener("click", next);

left.addEventListener("click", prev);

thumbImg.forEach((imgT) => {
    imgT.addEventListener("click", (e) => {
        thumbImg.forEach((i) => i.classList.add("filter"));

        e.target.classList.remove("filter");

        allImg.forEach((img) => {
            img.classList.remove("show");
        });

        allImg[e.target.id].classList.add("show");
    });
});

let fullCurrent = 0;

function showFullImg(e) {
    fullImg.src = e.target.src;
    fullCurrent = Array.from(allImg).findIndex((item) => item === e.target);
    fullImgWrap.classList.add("show-full");
}
function closeFullImg() {
    fullImgWrap.classList.remove("show-full");
}

fullCloseBtn.addEventListener("click", closeFullImg);
fullImgBg.addEventListener("click", closeFullImg);

allImg.forEach((img) => {
    img.addEventListener("click", showFullImg);
});

function nextFull() {
    if (fullCurrent < allImg.length - 1) {
        fullCurrent++;
        fullImg.src = allImg[fullCurrent].getAttribute("src");
    } else {
        fullCurrent = 0;
        fullImg.src = allImg[fullCurrent].getAttribute("src");
    }
}

function prevFull() {
    if (fullCurrent > 0) {
        fullCurrent--;
        fullImg.src = allImg[fullCurrent].getAttribute("src");
    } else {
        fullCurrent = allImg.length - 1;
        fullImg.src = allImg[fullCurrent].getAttribute("src");
    }
}
fullLeft.addEventListener("click", prevFull);
fullRight.addEventListener("click", nextFull);
fullImg.addEventListener("click", nextFull);
