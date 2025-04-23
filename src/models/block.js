class Block {
    constructor (x, y, width, height, durability, color){
        this.x = x
        this.y = y

        this.width = width
        this.height = height

        this.durability = durability

        this.color = color ?? 180 
    }

    draw(){
        fill(this.color)
        rect(
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}
