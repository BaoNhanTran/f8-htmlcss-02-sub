const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');
const ctaGroup = document.querySelector('.cta-group');
const heroContent = document.querySelector('.hero .content');
const heroVisual = document.querySelector('.hero .visual');
const rect1 = heroContent.getBoundingClientRect();
const rect2 = heroVisual.getBoundingClientRect();
const rect3 = ctaGroup.getBoundingClientRect();

const distance = rect2.left - rect1.right;
console.log(distance);
