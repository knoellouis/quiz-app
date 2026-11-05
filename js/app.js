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

console.log(typeof savedTheme);

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const question = data.questionInput;
  const answer = data.answerInput;
  const tag = data.tagInput;

  questionsContainer.innerHTML = `<article class="question-card" data-js="question-card">
      <button
        type="button"
        aria-label="bookmark question"
        aria-pressed="false"
        class="question-card__bookmark"
        data-js="button-bookmark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon"
        >
          <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
        </svg>
      </button>
      <h2 class="question-card__title">${question}</h2>
      <div class="answer__wrapper">
        <img
          src="./assets/magic-concealment.svg"
          alt="answer concealment image"
          aria-hidden="true"
          class="question-card__placeholder visible"
          data-js="answer-placeholder"
        />
        <p id="answer-1" class="question-card__answer" data-js="answer-text">
          ${answer}
        </p>
      </div>
      <button
        class="question-card__button active"
        aria-expanded="false"
        aria-controls="answer-1"
        data-js="button-answer"
        type="button"
      >
        Reveal Answer
      </button>
      <ul class="question-card__tags">
        <li class="question-card__tag">${tag}</li>
      </ul>
    </article>`;

  //   questionsContainer.prepend(newQuestion);

  //   console.log(typeof newQuestion);
});
