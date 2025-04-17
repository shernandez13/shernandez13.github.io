document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tip-form");
    const billTotalInput = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const tipAmountOutput = document.getElementById("tipAmount");
    const totalWithTipOutput = document.getElementById("totalWithTip");
    const totalWithTaxOutput = document.getElementById("totalWithTax");
    const currencySelect = document.getElementById("currency");
    const convertedTotalOutput = document.getElementById("convertedTotal");
    const errorDisplay = document.getElementById("error");
    const tipLiveValue = document.getElementById("tipLiveValue");
  
    form.addEventListener("input", calculateAndDisplay);
    currencySelect.addEventListener("change", calculateAndDisplay);
  
    function isValidNumber(value) {
      return !isNaN(value) && Number(value) >= 0;
    }
  
    function calculateAndDisplay() {
      const billTotal = parseFloat(billTotalInput.value);
      const tipPercent = parseInt(tipSlider.value, 10);
      tipLiveValue.textContent = `${tipPercent}%`;
  
      if (!isValidNumber(billTotal)) {
        errorDisplay.textContent = "Please enter a valid non-negative number.";
        clearOutputs();
        return;
      } else {
        errorDisplay.textContent = "";
      }
  
      if (billTotal === 0) {
        clearOutputs();
        return;
      }
  
      const tipAmount = (billTotal * tipPercent) / 100;
      const totalWithTip = billTotal + tipAmount;
      const totalWithTax = totalWithTip * 1.11;
  
      tipAmountOutput.value = tipAmount.toFixed(2);
      totalWithTipOutput.value = totalWithTip.toFixed(2);
      totalWithTaxOutput.value = totalWithTax.toFixed(2);
  
      const currency = currencySelect.value;
      let convertedTotal = "";
      if (currency === "inr") {
        convertedTotal = (totalWithTip * 83.30).toFixed(2) + " INR";
      } else if (currency === "eur") {
        convertedTotal = (totalWithTip * 0.93).toFixed(2) + " EUR";
      }
      convertedTotalOutput.value = convertedTotal;
    }
  
    function clearOutputs() {
      tipAmountOutput.value = "";
      totalWithTipOutput.value = "";
      totalWithTaxOutput.value = "";
      convertedTotalOutput.value = "";
      tipLiveValue.textContent = "0%";
    }
  });
  