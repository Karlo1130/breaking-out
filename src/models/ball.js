class Ball {
    constructor (x, y){
        
        this.x = x
        this.y = y

        this.diameter = 15

        this.xVelocity = 0
        this.yVelocity = 0

    }

    draw(){
        fill(255)
        circle(
            this.x,
            this.y,
            this.diameter
        )
    }

    update(){
        this.y += this.yVelocity
        this.x += this.xVelocity

        if (this.x <= 0 || this.x >= 700) {
            ball.xVelocity *= -1;
        }

        if (this.y <= 0){
            ball.yVelocity *= -1;
        }

        if (this.y <= 400){

        }

    }
}
