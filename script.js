const menuIcon = document.querySelector(`.menu-icon`);
const headerRight = document.querySelector(`.header-right`);

menuIcon.addEventListener(`click`, () => {
    headerRight.classList.toggle(`active`);
    menuIcon.classList.toggle(`active`);
});
