document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tip-form");
    const billTotalInput = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const tipPercentageOutput = document.getElementById("tipPercentage");
    const tipAmountOutput = document.getElementById("tipAmount");
    const totalWithTipOutput = document.getElementById("totalWithTip");
    const totalWithTaxOutput = document.getElementById("totalWithTax");
    const errorDisplay = document.getElementById("error");
    const currencySelect = document.getElementById("currency");
    const convertedTotalOutput = document.getElementById("convertedTotal");
    
  
    function isValidNumber(value) {
      return !isNaN(value) && Number(value) >= 0;
    }
  
    function calculateAndDisplay() {
      const billTotal = parseFloat(billTotalInput.value);
      const tipPercent = parseInt(tipSlider.value, 10);
      const currency = currencySelect.value;
      let convertedTotal = "";

      if (currency === "inr") {
        convertedTotal = (totalWithTip * 83.30).toFixed(2) + " INR";
      } else if (currency === "eur") {
        convertedTotal = (totalWithTip * 0.93).toFixed(2) + " EUR";
      }

      convertedTotalOutput.value = convertedTotal;

  
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
  
      // Update tip percentage field
      tipPercentageOutput.value = `${tipPercent}%`;
  
      // Calculate tip
      const tipAmount = (billTotal * tipPercent) / 100;
      const totalWithTip = billTotal + tipAmount;
      const totalWithTax = billTotal * 1.11;
  
      // Display with 2 decimal places
      tipAmountOutput.value = tipAmount.toFixed(2);
      totalWithTipOutput.value = totalWithTip.toFixed(2);
      totalWithTaxOutput.value = totalWithTax.toFixed(2);
    }
  
    function clearOutputs() {
      tipPercentageOutput.value = "";
      tipAmountOutput.value = "";
      totalWithTipOutput.value = "";
      totalWithTaxOutput.value = "";
    }
  
    form.addEventListener("input", calculateAndDisplay);
  });
  