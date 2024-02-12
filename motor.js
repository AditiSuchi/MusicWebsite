console.log('Aditi')
    // Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songListPlay = document.getElementsByClassName('songListPlay');
let songs = [{
        songName: "Khad tenu main dasa",
        filePath: " songs/1.mp3",
        coverPath: "cover/1.jpg"

    },
    {
        songName: "Main Hu Sath Tere",
        filePath: "songs/7.mp3",
        coverPath: "cover/7.jpg"
    },
    {
        songName: "Main hu sath tere",
        filePath: "songs/6.mp3",
        coverPath: "cover/6.jpg"
    },
    {
        songName: "Chand Dekhiya Per Tere",
        filePath: "songs/5.mp3",
        coverPath: "cover/5.jpg"
    },
    {
        songName: "Phela Pyar",
        filePath: "songs/4.mp3",
        coverPath: "cover/4.jpg"
    },
    {
        songName: "Mubarak",
        filePath: "songs/3.mp3",
        coverPath: "cover/3.jpg"
    },
    {
        songName: "Kise Hua",
        filePath: "songs/2.mp3",
        coverPath: "cover/2.jpg"
    }
]

songItems.forEach((element, i) => {
    element.getElementsByClassName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();

            masterPlay.classList.remove('playCircle');
            masterPlay.classList.add('pauseCircle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('pauseCircle');
            masterPlay.classList.add('playCircle');
            gif.style.opacity = 0;
        }
    })
    // Listen to Event
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('pauseCircle');
        element.classList.add('playCircle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('playCircle');
        e.target.classList.add('pauseCircle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('playCircle');
        masterPlay.classList.add('pauseCircle');
    })
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('playCircle');
    masterPlay.classList.add('pauseCircle');
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('playCircle');
    masterPlay.classList.add('pauseCircle');

})