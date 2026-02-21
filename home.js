const pin = 1234;
const transactionData = [];

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
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);

    console.log(transactionData);
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

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);

  console.log(transactionData);
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

  const data = {
    name: "Transfer Money",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

// get bonus btn functionality
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bonus = getInputValueNumber("bonus-coupon");
    // console.log(bonus);

    if (bonus > 70) {
      alert("Sorry! The coupon is not available!");
      return;
    }

    alert("congratulations! you have got " + bonus + "% bonus coupon.");
  });

// pay bill btn functionality
document.getElementById("pay-bil-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const bank = getInputValue("bank");
  const billerAccountNumber = getInputValue("biller-acount-number");
  const payAmount = getInputValueNumber("pay-amount");
  const payPin = getInputValueNumber("pay-pin");
  const availableBalance = getInnerText("available-balance");

  // console.log(bank, billerAccountNumber, payAmount, payPin, availableBalance);

  if (availableBalance <= 0 || availableBalance < payAmount) {
    alert("Insufficient Balance!");
    return;
  }

  if (billerAccountNumber.length < 11) {
    alert("Please enter valid 11 digit biller account number!");
    return;
  }

  if (payAmount <= 0) {
    alert("Please provide a valid amount!");
    return;
  }

  if (payPin !== pin) {
    alert("Please provide a valid pin number!");
    return;
  }

  const newTotalAvailableBalance = availableBalance - payAmount;

  setInnerText(newTotalAvailableBalance);

  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

// transaction section functionality
document
  .getElementById("transaction-toggle-btn")
  .addEventListener("click", function () {
    // e.preventDefault();

    const transactionDataContainer = document.getElementById(
      "transaction-data-container",
    );
    transactionDataContainer.innerHTML = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div
            class="flex items-center justify-between bg-white px-4 py-[13px] rounded-[12px] border border-[#0808081a] mb-3"
          >
            <div class="flex items-center justify-between gap-3">
              <div class="p-3 rounded-full bg-[#0808080d]">
                <img src="./assets/purse1.png" alt="" srcset="" />
              </div>
              <div>
                <h3 class="font-semibold text-[#080808b3] mb-[6px]">
                  ${data.name}
                </h3>
                <p class="text-[12px] text-[#080808b3]">${data.date}</p>
              </div>
            </div>
            <div>
              <span
                ><i
                  class="fa-solid fa-ellipsis fa-rotate-90 text-[#0808088f]"
                ></i
              ></span>
            </div>
          </div>`;

      transactionDataContainer.appendChild(div);
    }
    // console.log("asif");
    // console.log(transactionData);
  });

// logout btn functionality
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
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

document
  .getElementById("get-bonus-toggle-btn")
  .addEventListener("click", function () {
    setToggle("get-bonus-section");
    setActiveRoute("get-bonus-toggle-btn");
  });

document
  .getElementById("pay-bill-toggle-btn")
  .addEventListener("click", function () {
    setToggle("pay-bill-section");
    setActiveRoute("pay-bill-toggle-btn");
  });

document
  .getElementById("transaction-toggle-btn")
  .addEventListener("click", function () {
    setToggle("transaction-section");
    setActiveRoute("transaction-toggle-btn");
  });
