self.onmessage = function(event) {
    const { text, voiceURI } = event.data;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voiceURI = voiceURI;
    speechSynthesis.speak(utterance);
};
