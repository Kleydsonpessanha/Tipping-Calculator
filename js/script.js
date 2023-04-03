const quantityInput = document.getElementById("bill");
const porcentInput = document.getElementById("porcent");
const peopleQuantityInput = document.getElementById("people");
const calculateButton = document.getElementById("submit");
const resultContainer = document.getElementById("totalTip");
const form = document.getElementById("tipsForm");

function calculateTip() {
  const quantity = parseFloat(quantityInput.value);
  const porcent = parseFloat(porcentInput.value);
  const tipAmount = (quantity * porcent) / 100;
  const totalPerPerson = tipAmount / peopleQuantityInput.value;

  const resultParagraph = document.createElement("p");
  resultParagraph.classList.add("paragraph-result");
  resultContainer.appendChild(resultParagraph);
  resultParagraph.innerHTML = `Gorjeta total: R$ ${totalPerPerson.toFixed(2)}`;
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
});

calculateButton.addEventListener("click", calculateTip);
