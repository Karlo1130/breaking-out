function setup() {
    createCanvas(700, 400)
}

function draw() {
    if (isFinish) {
        drawFinishGame()
        return
    }
    background(150)
    drawPoints()
    drawLives()
    ball.draw()
    player.draw()
    blocks.forEach(block => {
        block.draw()
    });


    update()
}

function keyPressed() {
    if (keyCode == 74) {
        blocks = []
    }

    if (keyCode == 82) {
        ball.y = 300
        ball.x = 350
        ball.xVelocity = 0
        ball.yVelocity = 0

        player.x = 300
        player.y = 350

        blocks = []

        lives = 3

        switch (lvl) {
            case 1:
                createLvl1()
                break
            case 2:
                createLvl2()
                break
            case 3:
                createLvl3()
                break
        }
    }

    if (keyCode == 32) {
        switch (lvl) {
            case 1:
                ball.yVelocity = -1
                break
            case 2:
                ball.yVelocity = -2
                break
            case 3:
                ball.yVelocity = -5
                break
        }
    }
}

function update() {
    ball.update() 
    player.update()

    blocks.forEach(block => {

        if(isColliding(block, ball)){
            block.durability -= 1
        }

        if(block.durability == 0){
            points++
            blocks.splice(blocks.indexOf(block), 1)
        }
    })

    if (keyIsDown(65)) {
        player.x += player.velocity
        if (isColliding(player, ball)){
            ball.xVelocity = 3
        }
    }

    else if (keyIsDown(68)) {
        player.x -= player.velocity
        if (isColliding(player, ball)){
            ball.xVelocity = -3
        }
    }

    else if (isColliding(player, ball)) {
        ball.xVelocity = 0
    }
    
    if (blocks.length == 0) {

        if (lvl == 1) {
            lvl = 2
            createLvl2()
        }

        else if (lvl == 2) {
            lvl = 3
            createLvl3()
        }

        else if (lvl == 3) {
            finishGame()
        }
    }

    if (ball.y >= 400) {
        loseLive()
    }
}
