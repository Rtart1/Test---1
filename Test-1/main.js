//task - 1

const containsOnlyDigits = (str) => {
  const regExp = /^[0-9]+$/;
  return regExp.test(str);
};

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

//Task - 2

const secondPassed = () => {
  setInterval(() => {
    console.log(`Прошла секунда`);
  }, 1000);
};

secondPassed();

//Task - 3

const count = () => {
  let i = 1;
  const interval = setInterval(() => {
    console.log(i++);
    if (i > 10) clearInterval(interval);
  }, 1000);
};

count();

//Task - 4

const colorBlock = document.querySelector(".color_block");

colorBlock.addEventListener("click", () => {
  colorBlock.classList.toggle("color_new");
});

//Task - 5

const xhr = new XMLHttpRequest();
xhr.open("GET", "test.json");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();

xhr.onload = function () {
  const test = JSON.parse(xhr.response);
  console.log(test);
};
