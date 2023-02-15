//case-plus-btn handler
document.getElementById("case-btn-plus").addEventListener("click", function () {
    const takeQuantityInput = elementInputQuantity("case-quantity-input", true);
    //update taka
    let elementUpdatedPrice = (takeQuantityInput + 1) * 59;
    updatePrice("case-price", elementUpdatedPrice);
    subTotal();
  });
  //case-minus-btn handler
  document
    .getElementById("case-btn-minus")
    .addEventListener("click", function () {
      const takeQuantityInput = elementInputQuantity(
        "case-quantity-input",
        false
      );
      //update taka
      if (takeQuantityInput - 1 > 0) {
        let elementUpdatedPrice = (takeQuantityInput - 1) * 59;
        updatePrice("case-price", elementUpdatedPrice);
        subTotal();
      }
    });
  