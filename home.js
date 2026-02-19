// add money button functionality
const pin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    // console.log("asif");
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const bankAccountNumber = document.getElementById(
      "bank-account-number",
    ).value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addPin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText,
    );

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

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
    // console.log(bank, bankAccountNumber, addAmount, addPin, availableBalance);
  });

// cashout btn functionality
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentAccountNumber = document.getElementById(
    "agent-account-number",
  ).value;

  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value,
  );

  const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText,
  );

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

  document.getElementById("available-balance").innerText =
    newTotalAvailableBalance;
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
