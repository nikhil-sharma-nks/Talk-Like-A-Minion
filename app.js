// console.log("Working");
const btnTranslate = document.querySelector("#btn-translate");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickEventListener() {
  console.log("Clicked");
  console.log(textInput.value);
  outputDiv.innerText = textInput.value;
});
