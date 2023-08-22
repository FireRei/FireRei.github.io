document.addEventListener("DOMContentLoaded", function() {
  const calculateProfitButton = document.getElementById("calculate-profit-button");
  const calculateYieldButton = document.getElementById("calculate-yield-button");

  calculateProfitButton.addEventListener("click", calculateProfit);
  calculateYieldButton.addEventListener("click", calculateYield);
});

function calculateYield() {
  const days = parseFloat(document.getElementById("days").value);
    const selectedCrop = document.getElementById("crop").value;
    const cornDays = parseFloat(document.getElementById("corn-days").value);
    const chiliDays = parseFloat(document.getElementById("chili-days").value);
    const spinachDays = parseFloat(document.getElementById("spinach-days").value);
    let yieldPerDay = 0;
    let daysNeeded = 0;

    if (selectedCrop === "corn") {
        daysNeeded = cornDays;
        yieldPerDay = 5 / daysNeeded; // Example yield per day in kilograms per square meter for corn
    } else if (selectedCrop === "chili") {
        daysNeeded = chiliDays;
        yieldPerDay = 1 / daysNeeded; // Example yield per day in kilograms per square meter for chili
    } else if (selectedCrop === "spinach") {
        daysNeeded = spinachDays;
        yieldPerDay = 2 / daysNeeded; // Example yield per day in kilograms per square meter for water spinach
    }

    const totalYield = yieldPerDay * days * 25; // Calculate total yield for 25 square meters
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The estimated yield of ${selectedCrop} after ${daysNeeded} days is approximately ${totalYield.toFixed(2)} kilograms.`;
}

function calculateProfit() {
  const cornYield = parseFloat(document.getElementById("corn-yield").value);
  const chiliYield = parseFloat(document.getElementById("chili-yield").value);
  const spinachYield = parseFloat(document.getElementById("spinach-yield").value);

  const cornProfit = cornYield * cornPrice; // Set corn price per ton
  const chiliProfit = chiliYield * chiliPrice; // Set chili price per ton
  const spinachProfit = spinachYield * spinachPrice; // Set spinach price per ton

  const profits = [cornProfit, chiliProfit, spinachProfit];
  const maxProfit = Math.max(...profits);
  const cropNames = ["Corn", "Chili", "Water Spinach"];
  const bestCropIndex = profits.indexOf(maxProfit);
  const bestCropName = cropNames[bestCropIndex];

  const resultElement = document.getElementById("result");
  resultElement.textContent = `The profit for corn is RM${cornProfit.toFixed(2)}.\n\n\n\nThe profit for chili is RM${chiliProfit.toFixed(2)}.\nThe profit for water spinach is RM${spinachProfit.toFixed(2)}.\n\nThe best crop for maximum profit is ${bestCropName} with a profit of RM${maxProfit.toFixed(2)}`;
}

// Set your crop prices here
const cornPrice = 6; // Price per ton
const chiliPrice = 12; // Price per ton
const spinachPrice = 3.50; // Price per ton

export { calculateProfit }