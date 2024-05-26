let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');
let checkMenuBtn = document.getElementById('check-menu-btn');

food1s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('food1.png')";
});

food2s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('food.jpg')";
});

let images = ["food1.png", "food.jpg", "food2.png"]; // Add more image URLs as needed
let currentImageIndex = 0;

checkMenuBtn.addEventListener('click', () => {
    let sliderInterval = setInterval(() => {
        foods.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 2000); // Change image every 2 seconds

    // Stop the slider after a certain time if needed
    setTimeout(() => clearInterval(sliderInterval), 20000); // Stop after 20 seconds
});
