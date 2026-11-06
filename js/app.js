const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]',
);
const cards = document.querySelectorAll('[data-js="question-card"]');
const answerButtons = document.querySelectorAll('[data-js="button-answer"]');
const answers = document.querySelectorAll('[data-js="answer-text"]');
const darkmodeInput = document.querySelector('[data-js="dark-mode-input"]');

const savedTheme = localStorage.getItem("darkmode");

const form = document.querySelector('[data-js="form-add-questions"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');

const questionsContainer = document.querySelector(
  '[data-js="questions-container"]',
);

const bookmarkedCards = [];

document.documentElement.classList.toggle(
  "dark-mode--active",
  savedTheme === "true",
);

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
  darkmodeInput.checked = savedTheme === "true";
  darkmodeInput.addEventListener("change", () => {
    document.documentElement.classList.toggle(
      "dark-mode--active",
      darkmodeInput.checked,
    );
    localStorage.setItem("darkmode", darkmodeInput.checked);
  });
}
