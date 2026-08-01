//Adaptive sizes
const screenSizeLg = 1570; //px
const screenSizeMd = 1280; //px
const screenSizeSm = 920;  //px

const burgerButton = document.getElementsByClassName('header__mobile-burger-button')[0];
const mobileWrapper = document.getElementsByClassName('header__mobile-wrapper')[0];

burgerButton.addEventListener('click', () => ChangeState(burgerButton, mobileWrapper));
window.addEventListener('resize', () => ChangeDisplayState__wrapper(mobileWrapper));
function ChangeState(button, wrapper){
    ChangeState__button(button);
    ChangeState__wrapper(wrapper);
}

function ChangeState__button(button){
    const buttonLines = button.children;
    for(let i = 0; i < 3; ++i){
        buttonLines[i].classList.toggle(`header__mobile-burger-menu-item${i+1}_state_active`);
    }
}

function ChangeState__wrapper(wrapper){
    wrapper.classList.add(`header__mobile-wrapper_visibility_visible`);
    setTimeout(() => {}, 1000);
    wrapper.classList.toggle(`header__mobile-wrapper_state_opened`);
}

function ChangeDisplayState__wrapper(wrapper){
    let w = window.innerWidth;
    if(w <= screenSizeLg){
        wrapper.classList.add(`header__mobile-wrapper_visibility_visible`);
        wrapper.classList.remove(`header__mobile-wrapper_visibility_hidden`);
    }
    else{
        wrapper.classList.remove(`header__mobile-wrapper_visibility_visible`);
        wrapper.classList.add(`header__mobile-wrapper_visibility_hidden`);
    }
}