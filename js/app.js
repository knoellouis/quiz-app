const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]',
);
const cards = document.querySelectorAll('[data-js="question-card"]');
const answerButtons = document.querySelectorAll('[data-js="button-answer"]');
const answers = document.querySelectorAll('[data-js="answer-text"]');

const form = document.querySelector('[data-js="form-add-questions"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');

const questionsContainer = document.querySelector(
  '[data-js="questions-container"]',
);

const bookmarkedCards = [];

const darkmodeInput = document.querySelector('[data-js="dark-mode-input"]');

// saving the localstorage keyword as a variable by using the getItem method, getItem searches for the relevant keyword which was created inside the event listener of the darkmode toggle
const savedTheme = localStorage.getItem("darkmode");

// on page load, check to see if the savedTheme (local storage setting) is true, if true apply the class dark-mode--active
// on page load if there is no savedTheme, it will load the default of the website style (aka without darkmode class in this case)
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

// if darkmode input exists do the following
if (darkmodeInput) {
  // if darkmode input is checked, it updates the savedTheme value as "true"
  //string true instead of boolean because local storage only saves string data types
  darkmodeInput.checked = savedTheme === "true";
  // darkmode input eventlistener listens for a change
  darkmodeInput.addEventListener("change", () => {
    // toggle can take more than one argument, the second one is a booleon and basically forces the toggling of the class based on the boolean
    // if true, it applies the class, if false, it removes the class
    document.documentElement.classList.toggle(
      "dark-mode--active",
      darkmodeInput.checked,
    );

    // setItem, sets and updates local storage, takes a keyword, and a boolean that will get saved as a string
    localStorage.setItem("darkmode", darkmodeInput.checked);
  });
}
