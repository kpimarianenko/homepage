let isChaosActive = false;
let meteors;
const meteorsArr = [];
const meteorSize = 150;
const moveTimeout = 50;
const timeoutBetwMeteors = 500;
const timeout = 100;
const velocity = 45;
let intervalCode;
let moveIntervalCode;

const toggleChaos = () => {
    meteors = document.getElementById('meteors');
    isChaosActive = !isChaosActive;
    changeButtonView()
    if (isChaosActive) {
        intervalCode = setInterval(spawnMeteor, timeout);
        moveIntervalCode = setInterval(moveMeteors, moveTimeout);
        return;
    }
    if (intervalCode) {
        clearInterval(intervalCode);
        clearInterval(moveIntervalCode);
    }
    clearMeteors();
}

const changeButtonView = () => {
    const chaosBtn = document.getElementById('chaos');
    if (isChaosActive) {
        chaosBtn.classList.remove('inactive');
        chaosBtn.classList.add('active');
        chaosBtn.innerText = "Turn off the chaos";
    } else {
        chaosBtn.classList.remove('active');
        chaosBtn.classList.add('inactive');
        chaosBtn.innerText = "Turn on the chaos";
    }
}

const spawnMeteor = () => {
    const w = screen.width;
    const h = screen.height;
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    const style = getMeteorStyleRow(meteorSize, getRandomInt(-h, w), -meteorSize);
    meteor.setAttribute('style', style);
    meteors.appendChild(meteor);
    meteorsArr.push(meteor);
}

const moveMeteors = () => {
    let deleteLastOne = false;
    meteorsArr.forEach((meteor, index) => {
        const h = screen.height;
        const right = parseInt(meteor.style.right) + velocity;
        const top = parseInt(meteor.style.top) + velocity;
        if(top > h) {
            meteors.removeChild(meteor);
            deleteLastOne = true;
        }
        else {
            const style = getMeteorStyleRow(meteorSize, right, top);
            meteor.setAttribute('style', style)
        }
    })
    if(deleteLastOne) meteorsArr.splice(0, 1);
}

const clearMeteors = () => {
    meteorsArr.forEach(meteor => meteors.removeChild(meteor));
    meteorsArr.length = 0;
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getMeteorStyleRow = (size, right, top) => {
    return `width: ${size}px; height: ${size}px; top: ${top}px; right: ${right}px`;
}
