function calculateTip() {
  // variables
  let billAmount = Number(document.querySelector(".bill-amount").value);
  let peopleCount = Number(document.querySelector(".numberPeople").value);
  let service = document.querySelector("#services").value;

  if (billAmount === " " && service === "Select") {
    alert("Please enter a value");
    return;
  }
  if (peopleCount == "" || peopleCount <= 1) {
    peopleCount = 1;
    document.querySelector("#each").style.display = "none";
  } else {
    document.querySelector("#each").style.display = "block";
  }

  let billDivided = billAmount / peopleCount;
  let total = (billAmount * service) / peopleCount;
  total = total.toFixed(2);

  document.querySelector("#totalTip").style.display = "block";
  document.querySelector("#tip").innerHTML = total;
  document.querySelector(".bill-divided").innerHTML = billDivided.toFixed(2);
}

document.querySelector("button").addEventListener("click", calculateTip);
