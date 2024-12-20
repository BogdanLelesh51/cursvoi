const cards = document.querySelectorAll(".card, .card2");

cards.forEach((card) => {
  const decrementButton = card.querySelector(".decrement, #decrement");
  const incrementButton = card.querySelector(".increment, #increment");
  const countInput = card.querySelector(".count, #count, #count2");
  const addToCartButton = card.querySelector(".add-to-cart, .add-to-cart2");
  const fastOrderButton = card.querySelector(".fast button, .fast2 button");

  if (decrementButton && incrementButton && countInput) {
    decrementButton.addEventListener("click", () => {
      let count = parseInt(countInput.value);
      if (count > 1) {
        countInput.value = count - 1;
      }
    });

    incrementButton.addEventListener("click", () => {
      let count = parseInt(countInput.value);
      countInput.value = count + 1;
    });
  }

  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      const articul = card.querySelector(
        ".card-articul, .card-articul2"
      ).textContent;
      console.log(`Товар добавлен в корзину: ${articul}`);
    });
  }

  if (fastOrderButton) {
    fastOrderButton.addEventListener("click", function () {
      const articul = card.querySelector(
        ".card-articul, .card-articul2"
      ).textContent;
      console.log(`Быстрый заказ оформлен для товара: ${articul}`);
    });
  }
});
function handleTextInButton(event) {
  const clickedButton = event.target;
  if (clickedButton.textContent === "В корзину") {
    clickedButton.textContent = "Товар добавлен";
  } else {
    clickedButton.textContent = "В корзину";
  }
}
const cartButtons = document.querySelectorAll(".add-to-cart, .add-to-cart2");
cartButtons.forEach((button) => {
  button.addEventListener("click", handleTextInButton);
});
