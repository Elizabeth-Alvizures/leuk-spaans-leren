
const audioButton = document.getElementById("play-audio");

audioButton.addEventListener("click", function () {
    const message = new SpeechSynthesisUtterance("Hola");

    message.lang = "es-ES";
    message.rate = 0.85;

    window.speechSynthesis.speak(message);
});
