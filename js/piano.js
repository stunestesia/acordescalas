document.onkeydown = t => {
    if (t.code === 'Tab') {
        return false;
    }
};

const keys = {
    'Tab': 'C1',
    'Digit1': 'C1-sharp',
    'KeyQ': 'D1',
    'Digit2': 'D1-sharp',
    'KeyW': 'E1',
    'KeyE': 'F1',
    'Digit4': 'F1-sharp',
    'KeyR': 'G1',
    'Digit5': 'G1-sharp',
    'KeyT': 'A1',
    'Digit6': 'A1-sharp',
    'KeyY': 'B1',
    'KeyU': 'C2',
    'Digit8': 'C2-sharp',
    'KeyI': 'D2',
    'Digit9': 'D2-sharp',
    'KeyO': 'E2',
    'KeyP': 'F2',
    'Minus': 'F2-sharp',
    'BracketLeft': 'G2',
    'Equal': 'G2-sharp',
    'BracketRight': 'A2',
    'Backspace': 'A2-sharp',
    'Backslash': 'B2'
};

const audioFiles = {};
for (const [key, note] of Object.entries(keys)) {
    audioFiles[key] = new Audio(`Virtual%20Piano/task/src/audio/${note}.mp3`);
}

const keyToNote = {
    'Tab': 'C1',
    'Digit1': 'C#',
    'KeyQ': 'D1',
    'Digit2': 'D#',
    'KeyW': 'E1',
    'KeyE': 'F1',
    'Digit4': 'F#',
    'KeyR': 'G1',
    'Digit5': 'G#',
    'KeyT': 'A1',
    'Digit6': 'A#',
    'KeyY': 'B1',
    'KeyU': 'C2',
    'Digit8': 'C#',
    'KeyI': 'D2',
    'Digit9': 'D#',
    'KeyO': 'E2',
    'KeyP': 'F2',
    'Minus': 'F#',
    'BracketLeft': 'G2',
    'Equal': 'G#',
    'BracketRight': 'A2',
    'Backspace': 'A#',
    'Backslash': 'B2'
};

let isRecording = false;
let isPlaying = false;
let notes = [];
let playInterval = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = notes.map(note => keyToNote[note] || note).join(' ');
}

function startRecording() {
    isRecording = true;
    notes = [];
    updateDisplay();
    document.getElementById('record').classList.add('active');
    document.getElementById('play').disabled = true;
    document.getElementById('stop').disabled = false;
}

function stopRecording() {
    isRecording = false;
    document.getElementById('record').classList.remove('active');
    document.getElementById('play').disabled = false;
    document.getElementById('stop').disabled = true;
    clearInterval(playInterval); 
}

function startPlaying() {
    if (isPlaying) {
        stopPlaying(); 
    }

    isPlaying = true;
    let index = 0;

    playInterval = setInterval(() => {
        if (index >= notes.length) {
            stopPlaying();
            return;
        }
        const key = notes[index];
        if (audioFiles[key]) {
            audioFiles[key].currentTime = 0;
            audioFiles[key].play();
        }
        index++;
    }, 500); 
}

function stopPlaying() {
    clearInterval(playInterval);
    isPlaying = false;
    document.getElementById('play').classList.remove('active');
}

function clearNotes() {
    notes = [];
    updateDisplay();
}

document.addEventListener('keydown', e => {
    const key = e.code;
    if (audioFiles[key]) {
        if (isRecording) {
            notes.push(key);
            updateDisplay();
        }
        audioFiles[key].currentTime = 0;
        audioFiles[key].play();
        document.querySelector(`#${key}`).classList.add('active');
    }
});

document.addEventListener('keyup', e => {
    const key = e.code;
    if (audioFiles[key]) {
        document.querySelector(`#${key}`).classList.remove('active');
    }
});

document.getElementById('record').addEventListener('click', () => {
    if (isRecording) {
        stopRecording();
    } else {
        startRecording();
    }
});

document.getElementById('stop').addEventListener('click', () => {
    if (isPlaying) {
        stopPlaying();
    } else if (isRecording) {
        stopRecording();
    }
});

document.getElementById('play').addEventListener('click', () => {
    if (isPlaying) {
        stopPlaying();
    } else {
        startPlaying();
    }
});

document.getElementById('clear').addEventListener('click', clearNotes);

for (let key in audioFiles) {
    document.querySelector(`#${key}`).addEventListener('click', () => {
        if (audioFiles[key]) {
            audioFiles[key].currentTime = 0;
            audioFiles[key].play();
        }
    });
}