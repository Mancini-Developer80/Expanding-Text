const expText = document.getElementById('text');
const textSpeed = document.getElementById('speed');
const uiText = 'Expand your vision...';
let index = 1;
let speed = 300 / textSpeed.value;

writeText()

function writeText() {
    expText.innerText = uiText.slice(0, index);

    index++

    if (index > uiText.length) {
        index = 1;
    }

    setTimeout(writeText, speed)
}


textSpeed.addEventListener('input', (e) => speed = 300 / e.target.value);





