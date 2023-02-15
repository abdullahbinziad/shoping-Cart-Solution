//getting innerText
function innerTextString(elementID) {
  const elementInnerText = document.getElementById(elementID);
  const elemetValueString = elementInnerText.innerText;
  const elementIntegerValue = parseFloat(elemetValueString);
  return elementIntegerValue;
}
//getting the input from Element Input Quantity
function elementInputQuantity(elementInputId, isAdd) {
    const elementQuantityInput = document.getElementById(elementInputId);
    const elementQuantityString = elementQuantityInput.value;
    const elementQuantity = parseInt(elementQuantityString);
    //update
    if (isAdd) {
      const updateElementQuantity = elementQuantity + 1;
      elementQuantityInput.value = updateElementQuantity;
    } else {
      if (elementQuantity - 1 > 0) {
        const updateElementQuantity = elementQuantity - 1;
        elementQuantityInput.value = updateElementQuantity;
      }
    }
    return elementQuantity;
  }

//function updatePrice
function updatePrice(elementPriceId, updatedPrice) {
    const elementPriceValue = document.getElementById(elementPriceId);
    elementPriceValue.innerText = updatedPrice;
    return elementPriceValue;
  }

//function calculate subTotal
function subTotal() {
  const phnTotal = innerTextString("phn-price");
  const caseTotal = innerTextString("case-price");
  const subTotal = phnTotal + caseTotal;
  updatePrice("sub-total", subTotal);
}
