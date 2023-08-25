let music_data = [
    [
        {
          img: "/assets/DPs/SP.jpg",
          label: "C418 - Aria Math | Synthwave",
          audio: "Asset/Sounds/C418 - Aria Math (Synthwave).mp3"
        },
        {
          img: "/assets/DPs/rey.png",
          label: "Heartbeat - Childish Gambino",
          audio: "Asset/Sounds/heartbeat.mp3"
        },
        {
          img: "/assets/DPs/2.png",
          label: "Creep | Acoustic - Radiohead",
          audio: "Asset/Sounds/Creep.mp3"
        },
        {
          img: "assets/DPs/V.png",
          label: "BRAZILIAN DANCA PHONKA - 6NTHMANE",
          audio: "Asset/Sounds/phonk.mp3"
        },
        {
          img: "/assets/DPs/S.png",
          label: "Can't Stop - Red Hot Chilli Peppers",
          audio: "Asset/Sounds/rhcp.mp3"
        },
        {
          img: "/assets/DPs/V2.jpg",
          label: "Better - Khalid",
          audio: "Asset/Sounds/Better.mp3"
        }
      ]
]

let musiG = document.getElementById("musiG");

const player = document.getElementById("player");
const playPauseButton = document.getElementById("playPause");
const seekbar = document.getElementById("seekbar");

playPauseButton.addEventListener("click", () => {
    if (player.paused || player.ended) {
        player.play();
        playPauseButton.textContent = "PAUSE";
    } else {
        player.pause();
        playPauseButton.textContent = "PLAY";
    }
});

player.addEventListener("timeupdate", () => {
    const currentTime = player.currentTime;
    const duration = player.duration;
    seekbar.value = currentTime / duration;
});

seekbar.addEventListener("click", (event) => {
    const clickedTime = event.offsetX / seekbar.offsetWidth * player.duration;
    player.currentTime = clickedTime;
});



const currentTimeDisplay = document.getElementById("currentTime");
const totalTimeDisplay = document.getElementById("totalTime");


player.addEventListener("timeupdate", () => {
    const currentTime = player.currentTime;
    const duration = player.duration;
    seekbar.value = currentTime / duration;

    const formattedCurrentTime = formatTime(currentTime);
    currentTimeDisplay.textContent = formattedCurrentTime;

    const formattedTotalTime = formatTime(duration);
    totalTimeDisplay.textContent = formattedTotalTime;
});

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

let currentIndex = 0;

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + music_data[0].length) % music_data[0].length;
    loadAlbum(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % music_data[0].length;
    loadAlbum(currentIndex);
});

function loadAlbum(index) {
    const album = music_data[0][index];
    
    const albumCover = document.querySelector(".album_cover");
    const label = document.querySelector(".label");
    const audio = document.getElementById("player");
    
    albumCover.src = album.img;
    label.textContent = album.label;
    audio.src = album.audio;
    
    playPauseButton.textContent = "PLAY";
    player.play();
    seekbar.value = 0;
    
    currentTimeDisplay.textContent = "0:00";
    totalTimeDisplay.textContent = formatTime(audio.duration);
}

player.addEventListener("ended", () => {
    playNext();
});


player.addEventListener("ended", () => {
    currentIndex = (currentIndex + 1) % music_data[0].length;
    loadAlbum(currentIndex);
    
    playPauseButton.textContent = "PAUSE";
    player.play();
});


const animatedImage = document.getElementById("animatedImage");
        const audio = document.getElementById("player");

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(audio);

        source.connect(analyser);
        analyser.connect(audioContext.destination);

        analyser.fftSize = 256; // Adjust for higher resolution

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        audio.addEventListener("play", () => {
            audioContext.resume().then(() => {
                analyser.getByteFrequencyData(dataArray);
                animateImage();
            });
        });

        audio.addEventListener("pause", () => {
            stopAnimation();
        });

        function animateImage() {
            requestAnimationFrame(animateImage);
            
            analyser.getByteFrequencyData(dataArray);
            const average = dataArray.reduce((acc, val) => acc + val, 0) / dataArray.length;
            
            // Modify the image scale based on the audio analysis
            const scale = 1 + average / 250; // Adjust scale factor
            
            animatedImage.style.transform = `scale(${scale})`;
        }

        let currentColorIndex = 0;

        function changeBoxShadowColor() {
            const colors = ['#fd3a59', 
                            '#DE3163', 
                            '#702963', 
                            '#ffffff', 
                            '#FF3131', 
                            '#0000ff', 
                            '#9900cc', 
                            '#ff00ff', 
                            '#fd3a59', 
                            '#00cc99', 
                            '#ff9933', 
                            '#6600cc', 
                            '#00ffcc'];
            const color = colors[currentColorIndex];
            animatedImage.style.boxShadow = `0px 0px 15px 10px ${color}`;
        
            currentColorIndex = (currentColorIndex + 1) % colors.length;
        
            setTimeout(changeBoxShadowColor, 1000); // Change color every 1 second
        }
        
        changeBoxShadowColor();
