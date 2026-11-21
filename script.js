const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const counter = document.getElementById("counter");
const noResult = document.getElementById("noResult");
const clearBtn = document.getElementById("clearBtn");

searchInput.addEventListener("input", () => {

let value = searchInput.value.toLowerCase().trim();
let count = 0;

cards.forEach(card => {

let title = card.querySelector("h2").textContent.toLowerCase();

if(title.includes(value)){
card.style.display = "block";
count++;
} else {
card.style.display = "none";
}

});

counter.textContent = "Toplam Sonuç: " + count;
noResult.style.display = count === 0 ? "block" : "none";

});

clearBtn.addEventListener("click", () => {

searchInput.value = "";

cards.forEach(card => {
card.style.display = "block";
});

counter.textContent = "Toplam Sonuç: " + cards.length;

noResult.style.display = "none";

});
