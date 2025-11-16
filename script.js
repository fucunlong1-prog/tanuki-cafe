const menuIcon = document.querySelector(`.menu-icon`);
const headerRight = document.querySelector(`.header-right`);

menuIcon.addEventListener(`click`, () => {
    headerRight.classList.toggle(`active`);
    menuIcon.classList.toggle(`active`);
});

const contents = document.querySelectorAll('.content');

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');
    }
  });
});

contents.forEach(content => observer1.observe(content));
