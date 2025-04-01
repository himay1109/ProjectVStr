console.log("Welcome to VibeStream");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myPrgressBar ');

let songs = [
    {songName: "Saibo", filePath: "song/1.mp3", coverPath: "covers/1.jpg"}
]
// audioElement.play();

// Handle play/pause click

//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // Update SeekBar
})