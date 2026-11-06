const remainingCharactersQuestionElement = document.querySelector(
  '[data-js="question-character-count"]',
);
const remainingCharactersAnswerElement = document.querySelector(
  '[data-js="answer-character-count"]',
);
const questionInputMaxCharacters = questionInput.maxLength;
const answerInputMaxCharacters = answerInput.maxLength;

remainingCharactersQuestionElement.innerHTML = questionInputMaxCharacters;
remainingCharactersAnswerElement.innerHTML = answerInputMaxCharacters;

function calculateCharactersLeft(maxCharacters, totalCharacters) {
  return maxCharacters - totalCharacters;
}

questionInput.addEventListener("input", () => {
  const numberCharactersTyped = questionInput.value.length;
  const remainingCharacters = calculateCharactersLeft(
    questionInputMaxCharacters,
    numberCharactersTyped,
  );

  remainingCharactersQuestionElement.innerHTML = remainingCharacters;
});
answerInput.addEventListener("input", () => {
  const numberCharactersTyped = answerInput.value.length;
  const remainingCharacters = calculateCharactersLeft(
    answerInputMaxCharacters,
    numberCharactersTyped,
  );

  remainingCharactersAnswerElement.innerHTML = remainingCharacters;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const question = data.questionInput;
  const answer = data.answerInput;
  const tag = data.tagInput;

  questionsContainer.insertAdjacentHTML(
    "afterbegin",
    `<article class="question-card" data-js="question-card-new">
      <button
        type="button"
        aria-label="bookmark question"
        aria-pressed="false"
        class="question-card__bookmark"
        data-js="button-bookmark-new"
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
          data-js="answer-placeholder-new"
        />
        <p id="answer-1" class="question-card__answer" data-js="answer-text-new">
          ${answer}
        </p>
      </div>
      <button
        class="question-card__button active"
        aria-expanded="false"
        aria-controls="answer-1"
        data-js="button-answer-new"
        type="button"
      >
        Reveal Answer
      </button>
      <ul class="question-card__tags">
        <li class="question-card__tag">${tag}</li>
      </ul>
    </article>`,
  );

  const newCard = document.querySelector('[data-js="question-card-new"]');

  const newAnswerButton = newCard.querySelector(
    "button[data-js='button-answer-new']",
  );
  const button = newCard.querySelector("button[data-js='button-answer-new']");
  const newAnswer = newCard.querySelector('[data-js="answer-text-new"]');
  const answerPlaceholder = newCard.querySelector(
    '[data-js="answer-placeholder-new"]',
  );
  const newBookmarkButton = document.querySelector(
    '[data-js="button-bookmark-new"]',
  );
  newAnswerButton.addEventListener("click", () => {
    newAnswer.classList.toggle("visible");
    button.classList.toggle("active");
    answerPlaceholder.classList.toggle("visible");

    if (newAnswer.classList.contains("visible")) {
      button.textContent = "Conceal Answer";
      button.setAttribute("aria-expanded", "true");
    } else {
      button.textContent = "Reveal Answer";
      button.setAttribute("aria-expanded", "false");
    }

    console.log("click handler ran");
  });

  newBookmarkButton.addEventListener("click", () => {
    if (newBookmarkButton.classList.contains("bookmarked")) {
      newBookmarkButton.setAttribute("aria-pressed", "false");
      newBookmarkButton.classList.remove("bookmarked");
    } else {
      newBookmarkButton.classList.add("bookmarked");
      newBookmarkButton.setAttribute("aria-pressed", "true");
    }
  });
});
