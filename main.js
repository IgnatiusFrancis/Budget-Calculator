let form = document.querySelector("#form");

const formSubmit = (e) => {
  e.preventDefault();
  let income = document.getElementById("income").value,
    age = document.getElementById("age").value,
    gender = document.querySelector("#gender").value,
    marital_status = document.querySelector("#marital_status").value,
    dependent = document.querySelector("#dependent").value,
    rent = document.querySelector("#rent").value,
    food = document.querySelector("#food").value,
    utilities = document.querySelector("#utilities").value,
    insurance = document.querySelector("#insurance").value,
    transportation = document.querySelector("#transportation").value,
    miscelleneous = document.querySelector("#miscelleneous").value;

  sessionStorage.setItem("income", JSON.stringify(income));
  sessionStorage.setItem("age", JSON.stringify(age));
  sessionStorage.setItem("gender", JSON.stringify(gender));
  sessionStorage.setItem("marital_status", JSON.stringify(marital_status));
  sessionStorage.setItem("dependent", JSON.stringify(dependent));
  sessionStorage.setItem("rent", JSON.stringify(rent));
  sessionStorage.setItem("food", JSON.stringify(food));
  sessionStorage.setItem("utilities", JSON.stringify(utilities));
  sessionStorage.setItem("insurance", JSON.stringify(insurance));
  sessionStorage.setItem("transportation", JSON.stringify(transportation));
  sessionStorage.setItem("miscelleneous", JSON.stringify(miscelleneous));

  window.location.href = "success.html";
};

form.addEventListener("submit", formSubmit);
