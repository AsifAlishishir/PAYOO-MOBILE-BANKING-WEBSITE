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

// function for toggle feature
function setToggle(id) {
  const forms = document.getElementsByClassName("form");
  // console.log(forms);

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to set activeRoute
function setActiveRoute(id) {
  const cardBtn = document.getElementsByClassName("card");
  for (const btn of cardBtn) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]");
  }

  document.getElementById(id).classList.remove("border-[#0808081a]");
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
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

// transfer btn functionality
document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const userAccountNumber = getInputValue("user-account-number");
  const transferAmount = getInputValueNumber("transfer-amount");
  const transferPin = getInputValueNumber("transfer-pin");
  const availableBalance = getInnerText("available-balance");

  // console.log(userAccountNumber, transferAmount, transferPin, availableBalance);

  if (availableBalance <= 0 || availableBalance < transferAmount) {
    alert("Insufficient Balance!");
    return;
  }

  if (userAccountNumber.length < 11) {
    alert("Please enter valid 11 digit user account number!");
    return;
  }

  if (transferAmount <= 0) {
    alert("Please provide a valid amount!");
    return;
  }

  if (transferPin !== pin) {
    alert("Please provide a valid pin number!");
    return;
  }

  const newTotalAvailableBalance = availableBalance - transferAmount;

  setInnerText(newTotalAvailableBalance);
});

// toggleling feature
document
  .getElementById("add-money-toggle-btn")
  .addEventListener("click", function () {
    setToggle("add-money-section");
    setActiveRoute("add-money-toggle-btn");
  });

document
  .getElementById("cashout-toggle-btn")
  .addEventListener("click", function () {
    setToggle("cash-out-section");
    setActiveRoute("cashout-toggle-btn");
  });

document
  .getElementById("transfer-money-toggle-btn")
  .addEventListener("click", function () {
    setToggle("transfer-money-section");
    setActiveRoute("transfer-money-toggle-btn");
  });

  
