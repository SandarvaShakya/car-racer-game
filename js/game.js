/**
 * The main game loop
 */
const gameLoop = () => {
    animationId = requestAnimationFrame(gameLoop)
    context.clearRect(0, 0, canvas.width, canvas.height)

    roads.move()

    // winning logic
    if(roadCount >= winCount){
        if(finishLine.y > canvas.height){ 
            roadCount = 0
            finishLine.y = -finishLine.height
        }
        finishLine.move()

        if(player.y + player.height + 10 < finishLine.y && sPressCount !== 0){
            winScreen()
        }

    }
    
    // Displaying enemies and checking collision
    ALLENEMIES
        .filter(enemy => enemy.isDisplayed)
        .forEach(enemy => {
            enemy.move()

            if(enemy.y > canvas.height){
                enemy.isDisplayed = false
            }
            
            // stop game on collision
            if(hasCollided(player, enemy)){
                gameOver()
            }
    })
    player.draw()
}