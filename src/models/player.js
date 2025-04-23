class Player {
    
    constructor (x, y){
        this.x = x
        this.y = y

        this.width = 100
        this.height = 20

        this.velocity = 5
    }

    draw(){
        fill(180)
        rect(
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    update(){
        if (this.x <= 0) {
            this.x = 0
        }
        if (this.x + this.width >= 700) {
            this.x = 700 - this.width
        }
    }
}
