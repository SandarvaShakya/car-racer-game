class EnemyCar extends Particle{
    constructor(name, x, y, width, height, color){
        super(x, y, color)
        this.width = width
        this.height = height

        this.dy = GAMESPEED
        this.isDisplayed = false
        this.name = name
    }

    /**
     * displays the enemy car on the screen
     */
    draw(){
        context.drawImage(enemyImg, this.x, this.y, this.width, this.height)
        context.fillStyle = 'white'
        // context.fillText(this.name, this.x, this.y)
    }

    /**
     * moves the car towards the player
     */
    move(){
        this.y += this.dy
        this.draw()
    }


} 