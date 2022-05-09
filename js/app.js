const p = document.querySelector(".p");

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const repeatpassword = document.querySelector("#repeat_password");

const btnsubmit = document.querySelector(".btn");

const checkform = () => {
  btnsubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value.length < 8) {
      p.textContent = "❌ Votre UserName doit etre superieur à 8 carctères";
    } else if (/\d/.test(username.value)) {
      p.textContent = "❌ Votre UserName ne doit pas contenir de chiffres";
    } else {
      p.textContent = "";
    }

    const passwordselect = document.querySelectorAll(".pasword");

    for (let i = 0; i < passwordselect.length; i++) {
      if (!(password.value === repeatpassword.value)) {
        passwordselect[i].textContent =
          "❌ Les deux Password doivent etre indentiques";
        passwordselect[i].textContent =
          "❌ Les deux Password doivent etre indentiques";
      }
    }
  });
};

checkform();
