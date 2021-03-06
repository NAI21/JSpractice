'use strict'

const score = document.querySelector('.score'),
      start = document.querySelector('.start'),
      gameArea = document.querySelector('.gameArea'),
      car = document.createElement('div');

car.classList.add('car');

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const settings = {
    start: false,
    score: 0,
    speed: 3,
    traffic: 3
};

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

function startGame() {
    settings.score = 0;
    gameArea.innerHTML = '';
    start.classList.add('hide');
   


    for (let i = 0; i < getQuantityElements(100); i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = i * 75 + 'px';
        line.y = i * 100;
        gameArea.appendChild(line);
    }

    for (let i = 0; i < getQuantityElements(100 * settings.traffic); i++) {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.y = -100 * settings.traffic * (i+1);
        enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        enemy.style.top = enemy.y + 'px';
        enemy.style.background = `transparent url("./image/enemy${Math.ceil(Math.random() * 1 + 0.5)}.png") center / cover no-repeat`;
        gameArea.appendChild(enemy);
    }

    settings.start = true;
    gameArea.appendChild(car);
    car.style.left = gameArea.offsetWidth/2 - car.offsetWidth/2;
    car.style.top = 'auto';
    car.style.bottom = '10px';
    settings.x = car.offsetLeft;
    settings.y = car.offsetTop;
    requestAnimationFrame(playGame);
}

function getQuantityElements(heightElement) {
    return document.documentElement.clientHeight / heightElement +1 ;
}

function playGame() {
    if (settings.start) {
        settings.score += settings.speed;
        score.innerHTML = 'СЧЕТ:<br>' + settings.score;
        moveRoad();
        moveEnemy();
        if (keys.ArrowLeft && settings.x > 0) {
            settings.x-= settings.speed;
        }
        if (keys.ArrowRight && settings.x < (gameArea.offsetWidth - car.offsetWidth)) {
            settings.x+= settings.speed;
        }
        car.style.left = settings.x + 'px';
        if (keys.ArrowUp && settings.y > 0) {
            settings.y-= settings.speed;
        }
        if (keys.ArrowDown && settings.y < (gameArea.offsetHeight - car.offsetHeight)) {
            settings.y+= settings.speed;
        }
        car.style.top = settings.y + 'px';
        requestAnimationFrame(playGame);
    }
}

function startRun(event) {
    event.preventDefault();
    keys[event.key] = true;
}

function stopRun(event) {
    event.preventDefault();
    keys[event.key] = false;
}

function moveRoad () {
    let lines = document.querySelectorAll('.line');
    lines.forEach(function(line){
    line.y += settings.speed;
    line.style.top = line.y + 'px';

    if (line.y >= document.documentElement.clientHeight) {
        line.y = -100;
    }
    });
}

function moveEnemy() {
    let enemy = document.querySelectorAll('.enemy');

    enemy.forEach(function(itemEnemy) {
        let carRect = car.getBoundingClientRect();
        let enemyRect = itemEnemy.getBoundingClientRect();

        if (carRect.top <= enemyRect.bottom &&
            carRect.right >= enemyRect.left &&
            carRect.left <= enemyRect.right &&
            carRect.bottom >= enemyRect.top) {
            settings.start = false;
            start.classList.remove('hide');
            start.style.top = score.offsetHeight;
            console.log('DTP!');

        }

        itemEnemy.y += settings.speed / 2;
        itemEnemy.style.top = itemEnemy.y + 'px';

     if (itemEnemy.y >= document.documentElement.clientHeight) {
        itemEnemy.y = -100 * settings.traffic;
        itemEnemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';

    }
    });
}
