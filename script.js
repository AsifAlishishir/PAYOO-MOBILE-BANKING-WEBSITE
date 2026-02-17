// login button functionality
document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("button clicked");
  //   console.log(e);

  const mobileNumber = 1234567890;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberIntegerValue = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberIntegerValue = parseInt(pinNumberValue);
  //   console.log(mobileNumberIntegerValue, pinNumberIntegerValue);

  if (
    mobileNumber === mobileNumberIntegerValue &&
    pinNumber === pinNumberIntegerValue
  ) {
    window.location.href = "./home.html";
    // console.log("all ok");
  } else {
    alert("Invalid Credentials!!!");
    // console.log("invalid credentials");
  }
});
