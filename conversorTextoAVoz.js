// Conversor de texto a voz
 
function speech(){
    const $voices = document.getElementById('voices');
    const $message = document.getElementById('message');
    const $btnListen = document.getElementById('btn-listen');
    let speechMessage = new SpeechSynthesisUtterance();

    let voices = [];

    document.addEventListener('DOMContentLoaded', e => {
        speechSynthesis.addEventListener('voiceschanged', (e) =>{
            voices = speechSynthesis.getVoices();

            voices.forEach(voice => {
                let $option = document.createElement('option');
                $option.value = voice.name;
                $option.textContent = `${voice.name} - ${voice.lang}`;
                $voices.appendChild($option);
            });
        });
    });

    document.addEventListener('change', e => {
        if(e.target === $voices){
            speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        }
    });

    document.addEventListener('click', e => {
        if(e.target === $btnListen){
            speechMessage.text = $message.value;
            speechSynthesis.speak(speechMessage);
        }
    });

 }

 speech();
 