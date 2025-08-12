// Create floating hearts
for (let i = 0; i < 500; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${5 + Math.random() * 10}s`;
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);
}
// Surprise popup
function showSurprise() {
    alert("🎉 Wishing the best brother ever a fantastic birthday! May all your dreams come true and every moment bring you happiness. 💖");
}
