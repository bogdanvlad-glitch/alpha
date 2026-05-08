const themeButtons = document.querySelectorAll("[data-theme-choice]");
const pageBody = document.body;

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { themeChoice } = button.dataset;
    pageBody.dataset.theme = themeChoice;

    themeButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
  });
});
