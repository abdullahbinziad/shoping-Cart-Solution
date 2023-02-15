//phn-plus-btn handler
document.getElementById("phn-btn-plus").addEventListener("click", function () {
    const takeQuantityInput = elementInputQuantity("phn-quantity-input", true);
    //update taka
    let elementUpdatedPrice = (takeQuantityInput + 1) * 1219;
    updatePrice("phn-price", elementUpdatedPrice);
    subTotal();
  });
  //phn-minus-btn handler
  document
    .getElementById("phone-btn-minus")
    .addEventListener("click", function () {
      const takeQuantityInput = elementInputQuantity("phn-quantity-input", false);
      //update taka
      if (takeQuantityInput - 1 > 0) {
        let elementUpdatedPrice = (takeQuantityInput - 1) * 1219;
        updatePrice("phn-price", elementUpdatedPrice);
        subTotal();
      }
    });
  
  
  
  