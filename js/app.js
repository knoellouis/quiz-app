const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]',
);
const answerButtons = document.querySelectorAll('[data-js="button-answer"]');

bookmarkButtons.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("bookmarked");
  });
});
answerButtons.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
    if (element.classList.contains === "active") {
      element.textContent = "Conceal Answer";
    } else {
      element.textContent = "Reveal Answer";
    }
  });
});
