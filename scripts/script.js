"use strict";

const windowWidth1 = document.querySelector('#windowWidth');
windowWidth1.textContent = window.innerWidth;



const select = document.querySelector('.calculator__select');
const select_title = select.querySelector('.calculator__select-title');
const select_labels = select.querySelectorAll('.calculator__select-label');
const select_inputs = select.querySelectorAll('.calculator__select-input');
const select_content = select.querySelector('.calculator__select-content');

select_inputs.forEach((input) => {
    if (input.checked) {
        select_title.textContent = input.value;
    }
});

select_title.addEventListener('click', () => {
    const isVisuallyHidden = select_content.classList.contains("visually-hidden");
    if (isVisuallyHidden) {
        select_content.classList.remove("visually-hidden");
        select.setAttribute('data-state', 'active');
    } else {
        select_content.classList.add("visually-hidden");
        select.setAttribute('data-state', '');
    }
});

for (let i = 0; i < select_labels.length; i++) {
    select_labels[i].addEventListener('click', (e) => {
        select_title.textContent = e.target.textContent;
        select_content.classList.add("visually-hidden");
        select.setAttribute('data-state', '');
    });
}

// const selectSections = document.querySelector('.calculator__select--sections');
// const selectTitleSections = selectSections.querySelector('.calculator__select-title--sections');
// const selectLabelsSections = selectSections.querySelectorAll('.calculator__select-label--sections');
// const selectInputsSections = selectSections.querySelectorAll('.calculator__select-input--sections');
// const selectContentSections = selectSections.querySelector('.calculator__select-content--sections');
// const imgSection1 = document.querySelector(".calculator__img--sections1")
//
// selectInputsSections.forEach((input) => {
//     if (input.checked) {
//         selectTitleSections.textContent = input.value;
//         imgSection1.src = `../img/${input.value}.png`
//     }
// });
//
// selectTitleSections.addEventListener('click', () => {
//     const isVisuallyHidden = selectContentSections.classList.contains("visually-hidden");
//     if (isVisuallyHidden) {
//         selectContentSections.classList.remove("visually-hidden");
//         selectSections.setAttribute('data-state', 'active');
//     } else {
//         selectContentSections.classList.add("visually-hidden");
//         selectSections.setAttribute('data-state', '');
//     }
// });
//
// for (let i = 0; i < selectLabelsSections.length; i++) {
//     selectLabelsSections[i].addEventListener('click', (e) => {
//         selectTitleSections.textContent = e.target.textContent;
//         imgSection1.src = `img/${e.target.getAttribute("for")}.png`;
//         selectContentSections.classList.add("visually-hidden");
//         selectSections.setAttribute('data-state', '');
//     });
// }

const selectSections = document.querySelectorAll('.calculator__select--sections');

selectSections.forEach((section, index) => {
    const selectTitleSection = section.querySelector('.calculator__select-title--sections');
    const selectLabelsSections = section.querySelectorAll('.calculator__select-label--sections');
    const selectInputsSections = section.querySelectorAll('.calculator__select-input--sections');
    const selectContentSection = section.querySelector('.calculator__select-content--sections');
    const imgSection = document.querySelector(`img[data-section-number="${index + 1}"]`);

    selectInputsSections.forEach((input) => {
        if (input.checked) {
            selectTitleSection.textContent = input.value;
            imgSection.src = `../img/${input.value}.png`
        }
    });

    selectTitleSection.addEventListener('click', () => {
        const isVisuallyHidden = selectContentSection.classList.contains("visually-hidden");
        if (isVisuallyHidden) {
            selectContentSection.classList.remove("visually-hidden");
            selectSections.setAttribute('data-state', 'active');
        } else {
            selectContentSection.classList.add("visually-hidden");
            selectSections.setAttribute('data-state', '');
        }
    });

    for (let i = 0; i < selectLabelsSections.length; i++) {
        selectLabelsSections[i].addEventListener('click', (e) => {
            selectTitleSection.querySelector(".calculator__placeholder").textContent = e.target.textContent;
            imgSection.src = `img/${e.target.getAttribute("data-section")}.png`;
            selectContentSection.classList.add("visually-hidden");
            selectSections.setAttribute('data-state', '');
        });
    }
});

//PROCESS
const processImage = document.querySelector(".process__wrap");
const processList = document.querySelector(".process__list");
if (window.innerWidth < 760) {
    processList.style.display = "flex";
    processImage.style.display = "none";
} else {
    processList.style.display = "none";
    processImage.style.display = "inline-block";
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 760) {
        processList.style.display = "flex";
        processImage.style.display = "none";
    } else {
        processList.style.display = "none";
        processImage.style.display = "inline-block";
    }
});

//SLIDER

const slider = document.querySelector(".slider");
const sliderNext = slider.querySelector(".slider__next");
const sliderBack = slider.querySelector(".slider__back");
const sliderList = slider.querySelector(".slider__list");
const sliderItems = slider.querySelectorAll(".slider__item");
// const sliderOverflow = slider.querySelector(".slider__overflow");

let windowWidth = window.innerWidth;
let visibleElementsNumber = 0;

let sliderShift;

if (windowWidth < 380) {
    sliderShift = 285;
} else if (windowWidth < 1170) {
    sliderShift = 325;
} else if (windowWidth >= 1170) {
    sliderShift = 365;
}

console.log(windowWidth);
console.log(sliderShift);

if (windowWidth < 860) {
    visibleElementsNumber = 1;
} else if (windowWidth < 1170) {
    visibleElementsNumber = 2;
} else if (windowWidth >= 1170) {
    visibleElementsNumber = 3;
}

window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    if (windowWidth < 380) {
        sliderShift = 285;
    } else if (windowWidth < 1170) {
        sliderShift = 325;
    } else if (windowWidth >= 1170) {
        sliderShift = 365;
    }

    if (windowWidth < 860) {
        visibleElementsNumber = 1;
    } else if (windowWidth < 1170) {
        visibleElementsNumber = 2;
    } else if (windowWidth >= 1170) {
        visibleElementsNumber = 3;
    }
});

let currentMargin = Number(sliderList.style.marginLeft);

if (currentMargin === 0) {
    sliderBack.disabled = true;
}

sliderNext.addEventListener("click", () => {
    currentMargin -= sliderShift;
    sliderList.style.marginLeft = `${currentMargin}px`;
    if (sliderBack.disabled) {
        sliderBack.disabled = false
    }
    if (currentMargin <= sliderShift * -(sliderItems.length - visibleElementsNumber)) {
        sliderNext.disabled = true;
    }
});

sliderBack.addEventListener("click", () => {
    currentMargin += sliderShift;
    sliderList.style.marginLeft = `${currentMargin}px`;
    if (sliderNext.disabled) {
        sliderNext.disabled = false
    }
    if (currentMargin === 0) {
        sliderBack.disabled = true;
    }
});
