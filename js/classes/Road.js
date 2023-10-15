class Road extends Particle {
	/**
	 * Road consists of three lanes
	 * @param {int} x the x position of the first lane of road
	 * @param {int} y the y position of the first lane of road
	 * @param {int} width the width of each lane
	 * @param {int} height the height of each lane
	 * @param {string} color the color of each lane
	 */
	constructor(x, y, width, height, color) {
		super(x, y, color);
		this.width = width;
		this.height = height;
		this.dy = GAMESPEED;
	}

	/**
	 * Displays the each lane of road on the screen and above the screen
	 */
	draw() {
		context.fillStyle = this.color;

		if (roadLoaded) {
			context.drawImage(roadImg, this.x, this.y, this.width, this.height);
			context.drawImage(
				roadImg,
				this.x + this.width,
				this.y,
				this.width,
				this.height
			);
			context.drawImage(
				roadImg,
				this.x + this.width * 2,
				this.y,
				this.width,
				this.height
			);

			context.drawImage(
				roadImg,
				this.x,
				this.y - this.height,
				this.width,
				this.height
			);
			context.drawImage(
				roadImg,
				this.x + this.width,
				this.y - this.height,
				this.width,
				this.height
			);
			context.drawImage(
				roadImg,
				this.x + this.width * 2,
				this.y - this.height,
				this.width,
				this.height
			);
		}
	}

	/**
	 * moves the road downwards for a moving effect
	 * and resets the y position if it reaches the
	 * canvas height
	 */
	move() {
		this.y += this.dy;

		if (this.y >= this.height) {
			this.y = 0;
			roadCount += 1;
		}

		this.draw();
	}
}
