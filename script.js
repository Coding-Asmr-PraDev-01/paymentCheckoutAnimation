const btn = document.querySelector('.iconBx');
const rightBx = document.querySelector('.rightBx');
const leftBx = document.querySelector('.leftBx');
const mainImg = document.querySelector('.main-img');
const textBx = document.querySelector('.textBx');
const iconBx = document.querySelector('.iconBx');

btn.addEventListener('click', () => {
    rightBx.classList.add('active');
    leftBx.classList.add('active');
    mainImg.src = './imgs/stats.png';
    textBx.innerHTML = `
        <h1 class="mainHeading">Payment Successful</h2>
        <p class='text'>Your payment has been successfully paid to our service. Now you can enjoy
        our service without any disturbance</p>
    `;
    iconBx.innerHTML = `
    <i class='bx bxs-badge-check' ></i>
    `;
});