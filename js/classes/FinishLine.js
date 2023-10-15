class FinishLine extends Particle {
	/**
	 * Displays after a certain number of roads passed
	 * @param {int} x the x position of the finish line
	 * @param {int} y the y position of the finish line
	 * @param {int} width the width of finish line
	 * @param {int} height the height of finish line
	 * @param {string} color the color of finish line
	 */
	constructor(x, y, width, height, color) {
		super(x, y, color);
		this.width = width;
		this.height = height;
		this.dy = GAMESPEED;
	}

	/**
	 * Displays the finish line on the screen
	 */
	draw() {
		context.fillStyle = this.color;
		if (finishLineLoaded) {
			context.drawImage(finishLineImg, this.x, this.y, this.width, this.height);
		}
	}

	/**
	 * moves the finish line downwards for a moving effect
	 */
	move() {
		this.y += this.dy;
		this.draw();
	}
}
