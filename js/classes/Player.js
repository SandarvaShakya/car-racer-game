class PlayerCar extends Particle {
	/**
	 * the player
	 * @param {int} x the x position of the player
	 * @param {int} y the y position of the player
	 * @param {int} width the width of the player object
	 * @param {int} height the height of the player object
	 * @param {string} color the color of the player
	 */
	constructor(x, y, width, height, color) {
		super(x, y, color);
		this.width = width;
		this.height = height;
		this.dx = 165;
	}

	/**
	 * displays the player car on the screen
	 */
	draw() {
		if (playerLoaded) {
			context.drawImage(playerImg, this.x, this.y, this.width, this.height);
		}
	}

	/**
	 * moves the car to the left lane
	 */
	moveLeft() {
		this.x -= this.dx;
	}

	/**
	 * moves the car to the right lane
	 */
	moveRight() {
		this.x += this.dx;
	}

	moveFast() {
		GAMESPEED = 25;
	}

	moveSlow() {
		GAMESPEED = 10;
	}
}
