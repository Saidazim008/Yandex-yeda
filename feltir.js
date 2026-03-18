// Barcha filter tugmalarini va kartalarni olamiz
const filterButtons = document.querySelectorAll(".lilar");
const cards = document.querySelectorAll(".card");

// Kartalarni filtrlaydigan funksiya
function filterCards(category) {
    cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "flex"; // flex saqlanadi, layout buzilmaydi
        } else {
            card.style.display = "none";
        }
    });
}

// Bosilgan tugmani faollashtiradigan funksiya
function setActiveButton(activeBtn) {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");
}

// Har bir tugmaga click event qo‘shamiz
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;

        filterCards(category);
        setActiveButton(button);
    });
});