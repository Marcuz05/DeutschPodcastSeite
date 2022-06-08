var audio = document.getElementById("audio-stream");

function toStart() {
    audio.currentTime=0;
};

function toMain() {
    audio.currentTime=5;
};

function toTheme() {
    audio.currentTime=10;
};


function toEnd() {
    audio.currentTime=15;
};