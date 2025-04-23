function setup() {
    createCanvas(700, 400)
}

function draw() {
    background(150)
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
        ball.x = 350
        ball.y = 300
        ball.xVelocity = 0
        ball.yVelocity = 0

        player.x = 300
        player.y = 350

        blocks = []

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

    if (lvl == 1) {
        if (blocks.length == 0) {
            lvl = 2
            createLvl2()
        }
    }

    else if (lvl == 2) {
        if (blocks.length == 0) {
            lvl = 3
            createLvl3()
        }
    }

    else if (lvl == 3) {
        if (blocks.length == 0) {
            finishGame()
        }
    }

}
