const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');
const ctaGroup = document.querySelector('.cta-group');
const rect1 = logo.getBoundingClientRect();
const rect2 = nav.getBoundingClientRect();
const rect3 = ctaGroup.getBoundingClientRect();

const distance = rect3.left - rect2.right;
console.log(distance);
