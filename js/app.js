const cars = document.querySelectorAll(".image-wrapper");

// choose the car
cars.forEach((car) => {
	car.addEventListener("click", (event) => {
		if (sPressCount === 0 || gameOverState === true) {
			playerImg.src = event.target.src;
		}
	});
});

// player controls
window.addEventListener("keydown", (event) => {
	if (event.code === "ArrowRight" || event.code === "KeyD") {
		if (player.x + player.height + player.dx < canvas.width) player.moveRight();
	}

	if (event.code === "ArrowLeft" || event.code === "KeyA") {
		if (player.x - player.dx > 0) player.moveLeft();
	}

	// Increase speed
	if (event.code === "ArrowUp" || event.code === "KeyW") {
		roads.dy = 20;
		finishLine.dy = 20;
		ALLENEMIES.forEach((enemy) => {
			enemy.dy = 20;
		});
	}

	if (event.code === "KeyS") {
		if (sPressCount === 0) {
			init();
			sPressCount++;
		}
	}

	if (event.code === "KeyR") {
		if (sPressCount > 0) {
			init();
		}
	}
});

window.addEventListener("keyup", (event) => {
	if (event.code === "ArrowUp" || event.code === "KeyW") {
		roads.dy = GAMESPEED;
		finishLine.dy = GAMESPEED;
		ALLENEMIES.forEach((enemy) => {
			enemy.dy = GAMESPEED;
		});
	}
});

// the player car
let player = new PlayerCar(playerX, playerY, carWidth, carHeight, "red");
// roads object
let roads = new Road(0, 0, canvas.width / 3, canvas.height, "black");
// finish line object
let finishLine = new FinishLine(0, 0, canvas.width, canvas.height / 12);

const init = () => {
	cancelAnimationFrame(animationId);
	clearInterval(enemiesIntervalId);

	roadCount = 0;
	finishLine.y = -finishLine.height;
	gameOverState = false;
	ALLENEMIES = [];

	generateAllEnemies();
	positionEnemies();

	player = new PlayerCar(playerX, playerY, carWidth, carHeight, "red");

	gameLoop();
};

gameLoop();
