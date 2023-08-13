const roadImg = new Image()
roadImg.src = '/assets/images/road-new.png'
roadImg.onload = () => {
    roadLoaded = true
}

const enemyImg = new Image()
enemyImg.src = '/assets/images/truck4.png'
enemyImg.onload = () => {
    enemyLoaded = true
}

const playerImg = new Image()
playerImg.src = '/assets/images/car1.png'
playerImg.onload = () => {
    playerLoaded = true
}

const finishLineImg = new Image()
finishLineImg.src = '/assets/images/finish.png'
finishLineImg.onload = () => {
    finishLineLoaded = true
}