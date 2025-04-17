document.addEventListener("DOMContentLoaded", function () {
    // Get all form elements
    const form = document.getElementById("tip-form");
    const billTotalInput = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const tipPercentageOutput = document.getElementById("tipPercentage");
    const tipAmountOutput = document.getElementById("tipAmount");
    const totalWithTipOutput = document.getElementById("totalWithTip");
    const totalWithTaxOutput = document.getElementById("totalWithTax");
    const currencySelect = document.getElementById("currency");
    const convertedTotalOutput = document.getElementById("convertedTotal");
    const errorDisplay = document.getElementById("error");
  
    // Listen for changes on any form inputs
    form.addEventListener("input", calculateAndDisplay);
    currencySelect.addEventListener("change", calculateAndDisplay);
  
    // Check if value is a valid non-negative number
    function isValidNumber(value) {
      return !isNaN(value) && Number(value) >= 0;
    }
  
    // Main function to calculate and update fields
    function calculateAndDisplay() {
      const billTotal = parseFloat(billTotalInput.value);
      const tipPercent = parseInt(tipSlider.value, 10);
  
      // Validate input
      if (!isValidNumber(billTotal)) {
        errorDisplay.textContent = "Please enter a valid non-negative number.";
        clearOutputs();
        return;
      } else {
        errorDisplay.textContent = "";
      }
  
      // Reset outputs if input is zero
      if (billTotal === 0) {
        clearOutputs();
        return;
      }
  
      // Calculate values
      const tipAmount = (billTotal * tipPercent) / 100;
      const totalWithTip = billTotal + tipAmount;
      const totalWithTax = billTotal * 1.11;
  
      // Display calculated values
      tipPercentageOutput.value = `${tipPercent}%`;
      tipAmountOutput.value = tipAmount.toFixed(2);
      totalWithTipOutput.value = totalWithTip.toFixed(2);
      totalWithTaxOutput.value = totalWithTax.toFixed(2);
  
      // Handle currency conversion
      const currency = currencySelect.value;
      let convertedTotal = "";
      if (currency === "inr") {
        convertedTotal = (totalWithTip * 83.30).toFixed(2) + " INR";
      } else if (currency === "eur") {
        convertedTotal = (totalWithTip * 0.93).toFixed(2) + " EUR";
      }
      convertedTotalOutput.value = convertedTotal;
    }
  
    // Clear all output fields
    function clearOutputs() {
      tipPercentageOutput.value = "";
      tipAmountOutput.value = "";
      totalWithTipOutput.value = "";
      totalWithTaxOutput.value = "";
      convertedTotalOutput.value = "";
    }
  });
  