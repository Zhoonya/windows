"use strict";

//CALCULATOR TYPES

const select = document.querySelector('.calculator__select');
const selectTitle = select.querySelector('.calculator__select-title');
const selectLabels = select.querySelectorAll('.calculator__select-label');
const selectInputs = select.querySelectorAll('.calculator__select-input');
const selectContent = select.querySelector('.calculator__select-content');

selectInputs.forEach((input) => {
    if (input.checked) {
        selectTitle.textContent = input.value;
    }
});

selectTitle.addEventListener('click', () => {
    const isVisuallyHidden = selectContent.classList.contains("visually-hidden");
    if (isVisuallyHidden) {
        selectContent.classList.remove("visually-hidden");
        select.setAttribute('data-state', 'active');
    } else {
        selectContent.classList.add("visually-hidden");
        select.setAttribute('data-state', '');
    }
});

for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (e) => {
        selectTitle.textContent = e.target.textContent;
        selectContent.classList.add("visually-hidden");
        select.setAttribute('data-state', '');
    });
}

//CALCULATOR SECTIONS

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

$('.examples__slider').slick({
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
        }

    }, {

        breakpoint: 500,
        settings: {
            slidesToShow: 1,
        }

    }],

});
