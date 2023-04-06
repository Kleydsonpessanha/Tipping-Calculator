
// Variáveis - Variables

const inputBillValue = document.getElementById("bill-value");
const inputServicesQualityValue = document.getElementById("services-quality-value");
const inputPeopleInvolved = document.getElementById("peoples-value");

const buttonCalculate = document.getElementById("calculate-result");

const modalTotalResult = document.getElementById("result-modal");
const spanResult = document.getElementById("total-value");

const form = document.getElementById("tipsForm");

// Eventos - Events

buttonCalculate.addEventListener("click", function() {
  calculateTip( // Enviando parâmetros - Sending parameters
    parseInt(inputBillValue.value),
    parseInt(inputServicesQualityValue.value),
    parseInt(inputPeopleInvolved.value)
  )
 }
);

form.addEventListener("submit", function(e) {
  e.preventDefault();
});

buttonCloseModal = document.querySelector('.modal-button');
buttonCloseModal.addEventListener('click', function(){
  modalTotalResult.style.display = 'none';
});

// Funções - Functions

function calculateTip(billValue, serviceQuality, peopleValue) {
  let tipFee;

  if (serviceQuality >= 1 && serviceQuality < 3) {
    tipFee = [0.05, 'Péssimo']; // Qualidade má de serviço - Bad quality of service
  } else if (serviceQuality >= 3 && serviceQuality < 7) {
    tipFee = [0.1, 'Normal']; // Qualidade regular de serviço - Regular quality of service
  } else if (serviceQuality >= 7 && serviceQuality <= 10) {
    tipFee = [0.15, 'Ótimo']; // Qualidade boa de serviço - Good quality of service
  } else {
    alert('Os valores digitados estão inválido...')
  }

  // Calculando os valores - Calculating the values

  const tipValue = billValue * tipFee[0];
  const totalTipValue = billValue + tipValue;
  const tipPerPerson = totalTipValue / peopleValue;

  // Mostrando resultado em modal - Showing result in modal

  modalTotalResult.style.display = "flex";
  modalTotalResult.style.flexDirection = "column";
  modalTotalResult.style.alignItems = "center";
  modalTotalResult.style.justifyContent = "center";

  spanResult.innerText = `Conta: R$ ${billValue};
   Qualidade do serviço: ${tipFee[1]};
   Taxa da gorjeta: ${tipFee[0]}%;
   
   Conta com gorjeta: R$ ${totalTipValue};
   Gorjetas por pessoa: R$ ${tipPerPerson.toFixed(2)};
   `;
}