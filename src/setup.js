var ball = new Ball(350, 300)
var player = new Player(300, 350)

var blocks = []

var lvl = 1
var lives = 3
var points = 0

var isFinish = false

createLvl1()

function createLvl1() {
    createBlocks(4, 5)

    ball.x = 350
    ball.y = 300
    ball.xVelocity = 0
    ball.yVelocity = 0
}

function createLvl2() {
    createBlocks(5, 5)

    blocks.push(new Block(300, 250, 100, 20, 3, "red"))

    ball.x = 350
    ball.y = 300
    ball.xVelocity = 0
    ball.yVelocity = 0
}

function createLvl3() {
    createBlocks(6, 5)

    blocks.push(new Block(200, 150, 100, 20, 3, "red"))
    blocks.push(new Block(300, 150, 100, 20, 3, "red"))
    blocks.push(new Block(400, 150, 100, 20, 3, "red"))
    blocks.push(new Block(300, 170, 100, 20, -1, "blue"))

    ball.x = 350
    ball.y = 300
    ball.xVelocity = 0
    ball.yVelocity = 0
}

function finishGame() {
    blocks = []
    isFinish = !isFinish
}

function createBlocks(rows, columns) {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            blocks.push(new Block(i*700/columns, 20*j, 700/columns, 20, 1))
        }
    }
}

function isColliding(block, ball) {

    if(block.x < ball.x + (ball.diameter / 2)
    && block.x + block.width > (ball.x - (ball.diameter / 2))
    && block.y < ball.y+ (ball.diameter / 2)
    && block.y + block.height > (ball.y - (ball.diameter / 2))){
                
        if(isCollidingX(block, ball)){
            ball.xVelocity *= -1;
        }

        if(isCollidingY(block, ball)){
            ball.yVelocity *= -1;
        }

        return true;
    }

    return false;
};

function isCollidingX(block, ball){

    if(block.x < ball.xPosition + (ball.diameter / 2)
    && block.x + block.width > (ball.x - (ball.diameter / 2))) {

        return true;
    }

    return false;
}

function isCollidingY(block, ball){

    if(block.y < ball.y + (ball.diameter / 2)
    && block.y + block.height > (ball.y - (ball.diameter / 2))) {

        return true;
    }

    return false;
}

function loseLive() {
    lives--

    ball.y = 300
    ball.x = 350
    ball.xVelocity = 0
    ball.yVelocity = 0

    player.x = 300
    player.y = 350

}

function drawPoints() {
    fill(0)
    textSize(25)
    text(`points: ${points}`, 10, 380)
}

function drawLives() {
    fill(0)
    textSize(25)
    text(`lives: ${lives}`, 600, 380)
}

function drawFinishGame() {
    fill(0)
    rect(0, 0, 700, 400)

    fill(255)
    textSize(50)
    text(`Has Ganado`, 210, 200)
    text(`Puntaje: ${points}`, 240, 250)
}
