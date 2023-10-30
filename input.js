function amountPercentage() {
  const inputElement = document.querySelector(".js-amount-input");
  const inputPercentage = document.querySelector(".js-input-percentage");
  const tipAmountResult = document.querySelector(".tip-amount-result");
  const totalBillWithTipResult = document.querySelector(
    ".total-bill-with-tip-result"
  );
  const percentageValueText = document.querySelector(".selected-percentage");

  inputElement.addEventListener("input", updateResults);
  inputPercentage.addEventListener("input", updateResults);

  function updateResults() {
    const billAmount = parseFloat(inputElement.value);
    const tipPercentage = parseFloat(inputPercentage.value);

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBillWithTip = billAmount + tipAmount;

    tipAmountResult.textContent = tipAmount.toFixed(2);
    totalBillWithTipResult.textContent = totalBillWithTip.toFixed(2);
    percentageValueText.textContent = tipPercentage + "%";
  }
}

amountPercentage();
