const mobileNav = document.querySelector('nav');
const hamburgerMenu = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close-button');
const gridItems = document.querySelectorAll('.grid-item');

hamburgerMenu.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(0)';
});

closeButton.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(100%)';
})

gridItems.forEach(grid => {
  grid.addEventListener('mouseover', () => {
    grid.children[0].style.color = "var(--black)";
  });
  grid.addEventListener('mouseout', () => {
    grid.children[0].style.color = "var(--white)";
  })
})