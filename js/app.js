const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]',
);
const cards = document.querySelectorAll('[data-js="question-card"]');
const answerButtons = document.querySelectorAll('[data-js="button-answer"]');
const answers = document.querySelectorAll('[data-js="answer-text"]');
const darkmodeInput = document.querySelector('[data-js="dark-mode-input"]');

const savedTheme = localStorage.getItem("darkmode");

bookmarkButtons.forEach((bookmarkButton) => {
  bookmarkButton.addEventListener("click", () => {
    if (bookmarkButton.classList.contains("bookmarked")) {
      bookmarkButton.setAttribute("aria-pressed", "false");
      bookmarkButton.classList.remove("bookmarked");
    } else {
      bookmarkButton.classList.add("bookmarked");
      bookmarkButton.setAttribute("aria-pressed", "true");
    }
  });
});

cards.forEach((card) => {
  const button = card.querySelector("button[data-js='button-answer']");
  const answer = card.querySelector('[data-js="answer-text"]');
  const answerPlaceholder = card.querySelector(
    '[data-js="answer-placeholder"]',
  );

  button.addEventListener("click", handleAnswerbuttonClick);

  function handleAnswerbuttonClick() {
    answer.classList.toggle("visible");
    button.classList.toggle("active");
    answerPlaceholder.classList.toggle("visible");

    if (answer.classList.contains("visible")) {
      button.textContent = "Conceal Answer";
      button.setAttribute("aria-expanded", "true");
    } else {
      button.textContent = "Reveal Answer";
      button.setAttribute("aria-expanded", "false");
    }
  }
});

if (darkmodeInput) {
  darkmodeInput.addEventListener("change", () => {
    document.documentElement.classList.toggle(
      "dark-mode--active",
      darkmodeInput.checked,
    );
  });
}
