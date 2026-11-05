const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]',
);
const answerButtons = document.querySelectorAll('[data-js="button-answer"]');
const answers = document.querySelectorAll('[data-js="answer-text"]');

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
