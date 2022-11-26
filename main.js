let form = document.querySelector("#form"),
  age = document.querySelector("#age").value,
  gender = document.querySelector("#gender").value,
  marital_status = document.querySelector("#marital_status").value,
  dependent = document.querySelector("#dependent").value,
  rent = document.querySelector("#rent").value,
  food = document.querySelector("#food").value,
  utilities = document.querySelector("#utilities").value,
  insurance = document.querySelector("#insurance").value,
  transportation = document.querySelector("#transportation").value,
  miscelleneous = document.querySelector("#miscelleneous").value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const income = document.getElementById("income").value;

  sessionStorage.setItem("income", income);
  console.log(income);
  window.location.href = "success.html";
  // const formData = new FormData();

  // alert(
  //   income
  //   // age,
  //   // gender,
  //   // marital_status,
  //   // dependent,
  //   // rent,
  //   // food,
  //   // utilities,
  //   // insurance,
  //   // transportation,
  //   // miscelleneous
  // );
  //   window.location.href = "success.html";
});
