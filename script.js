let txt = document.querySelector("textarea");
let select = document.querySelector("select");
let button = document.querySelector("button");
let voices = [];
let speech = new SpeechSynthesisUtterance();

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    let option = document.createElement("option");
    option.innerText = voice.name;
    option.value = voice.lang;
    select.appendChild(option);
  })
}

button.addEventListener("click" , () => {
  speech.text = txt.value;
  let userSelectedLanguage = voices.find(voice => voice.lang === select.value)
  speech.voice = userSelectedLanguage;
  speechSynthesis.speak(speech);
})