// console.log("Working");
const btnTranslate = document.querySelector("#btn-translate");
const textInput = document.querySelector("#text-input");
const outputDiv = document.querySelector("#output");
const textGenerator = document.querySelector("#btn-text-generator");

const url = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text) {
  return url + "?text=" + text;
}

function handleError(err) {
  console.log(err);
  alert(
    "I know this is amazing, but go slow buddy. Let this API(free) breathe a bit!\n"
  );
}

const randomTextArray = [
  "I went to buy some camo pants but couldn’t find any.",
  "I failed math so many times at school, I can’t even count..",
  "I used to have a handle on life, but then it broke.",
  "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",
  "I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.",
  "Don’t you hate it when someone answers their own questions? I do.",
  "I can’t believe I got fired from the calendar factory. All I did was take a day off.",
  "Most people are shocked when they find out how bad I am as an electrician.",
  "Never trust atoms; they make up everything.",
  "My wife just found out I replaced our bed with a trampoline. She hit the ceiling!",
  "I used to think I was indecisive. But now I’m not so sure.",
];

textGenerator.addEventListener("click", function randomTextGenerator() {
  const randomText =
    randomTextArray[Math.floor(Math.random() * randomTextArray.length)];
  textInput.innerText = randomText;
});

btnTranslate.addEventListener("click", function clickEventListener() {
  console.log("Clicked");
  const text = textInput.value;
  fetch(constructURL(text))
    .then((response) => response.json())
    .then((json) => (outputDiv.innerText = json.contents.translated))
    .catch(handleError);
});
