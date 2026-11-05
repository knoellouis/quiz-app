const bookmarkButtons = document.querySelectorAll(
  '[data-js="button-bookmark"]',
);

bookmarkButtons.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("bookmarked");
  });
});
