var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const acceptButton = document.querySelector("#accept-button");
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const button = card.querySelector("button");
  button.addEventListener("click", () => {
    card.classList.toggle("selected");
  });
});

acceptButton.addEventListener("click", () => {
  const selectedCards = document.querySelectorAll(".selected");
  const players = Array.from(selectedCards).map(
    (card) => card.querySelector(".name").textContent
  );
  const teamCount = document.querySelector("#triangular-switch").checked
    ? 3
    : 2;

  if (players.length < teamCount) {
    alert("Not enough players to make teams");
    return;
  }

  const teams = [];
  for (let i = 0; i < teamCount; i++) {
    teams.push([]);
  }

  let teamIndex = 0;
  while (players.length > 0) {
    const randomIndex = Math.floor(Math.random() * players.length);
    const player = players.splice(randomIndex, 1)[0];
    teams[teamIndex].push(player);
    teamIndex = (teamIndex + 1) % teamCount;
  }

  const teamString = teams
    .map((team, index) => `Team ${index + 1}: ${team.join(", ")}`)
    .join("\n");
  alert(`Teams (${teamCount}):\n${teamString}`);
});
