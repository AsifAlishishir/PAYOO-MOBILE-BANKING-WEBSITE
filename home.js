const pin = 1234;

// function to get input values converted to numbers
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

// function to get input values
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get innertext
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// add money button functionality
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    // console.log("asif");
    e.preventDefault();

    const bank = getInputValue("bank");
    const bankAccountNumber = getInputValue("bank-account-number");
    const addAmount = getInputValueNumber("add-amount");
    const addPin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    if (bankAccountNumber.length < 11) {
      alert("Please provide a valid 11 digit bank account number!");
      return;
    }

    if (addPin !== pin) {
      alert("Please provide a valid pin number!");
      return;
    }

    if (addAmount <= 0) {
      alert("Please provide a valid amount!");
      return;
    }

    const totalNewAvailableBalance = availableBalance + addAmount;

    setInnerText(totalNewAvailableBalance);
    // console.log(bank, bankAccountNumber, addAmount, addPin, availableBalance);
  });

// cashout btn functionality
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentAccountNumber = getInputValue("agent-account-number");

  const withdrawAmount = getInputValueNumber("withdraw-amount");

  const withdrawPin = getInputValueNumber("withdraw-pin");

  const availableBalance = getInnerText("available-balance");

  if (availableBalance <= 0 || availableBalance < withdrawAmount) {
    alert("Insufficient Balance!");
    return;
  }

  if (agentAccountNumber.length < 11) {
    alert("Please enter valid 11 digit agent account number!");
    return;
  }

  if (withdrawAmount <= 0) {
    alert("Please provide a valid amount!");
    return;
  }

  if (withdrawPin !== pin) {
    alert("Please provide a valid pin number!");
    return;
  }

  const newTotalAvailableBalance = availableBalance - withdrawAmount;

  setInnerText(newTotalAvailableBalance);
  // console.log(withdrawAmount, availableBalance);
});

// toggleling feature

document
  .getElementById("add-money-toggle-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("cash-out-section").style.display = "none";
  });

document
  .getElementById("cashout-toggle-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "block";
  });
