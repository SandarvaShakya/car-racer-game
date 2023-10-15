/**
 * Generate a random item from an array
 * @param {Array} allowedValues the array of values from which you want to select a random item
 * @returns the random item
 */
const generateRandom = (allowedValues) => {
	const randomIndex = Math.floor(Math.random() * allowedValues.length);
	return allowedValues[randomIndex];
};

/**
 * Checks for collision between two boxes
 * @param {PlayerCar} object1
 * @param {EnemyCar} object2
 * @returns true if two boxes collide
 */
const hasCollided = (object1, object2) => {
	if (
		object1.x + object1.width >= object2.x &&
		object1.x <= object2.x + object2.width &&
		object1.y + object1.height >= object2.y &&
		object1.y <= object2.y + object2.height
	) {
		return true;
	}
	return false;
};

/**
 * stops the animation and shows gameover screen
 */
const gameOver = () => {
	clearInterval(enemiesIntervalId);
	cancelAnimationFrame(animationId);
	context.fillStyle = "white";
	context.font = "48px monospace";
	context.textAlign = "center";
	context.fillText("GAMEOVER", canvas.width / 2, canvas.height / 2 - 16);
	gameOverState = true;
};

/**
 * stops the animation and shows winning screen
 */
const winScreen = () => {
	clearInterval(enemiesIntervalId);
	cancelAnimationFrame(animationId);
	context.fillStyle = "white";
	context.font = "48px monospace";
	context.textAlign = "center";
	context.fillText("WINNER!!", canvas.width / 2, canvas.height / 2 - 16);
	sPressCount = 0;
};

/**
 * Generated enemie's x position is selected randomly
 * based on the pattern specified in globals and displayed
 */
const positionEnemies = () => {
	let enemyX;
	enemiesIntervalId = setInterval(() => {
		const pattern = generateRandom(enemiesPositions);
		for (let i = 0; i < pattern.length; i++) {
			if (pattern[i] === 1) {
				if (i === 0) {
					enemyX = canvas.width / 2 - carWidth / 2 - 165;
				} else if (i === 2) {
					enemyX = canvas.width / 2 - carWidth / 2 + 165;
				} else {
					enemyX = canvas.width / 2 - carWidth / 2;
				}

				const enemyY = -carHeight;
				const enemy = ALLENEMIES.filter((enemy) => !enemy.isDisplayed)[0];
				enemy.x = enemyX;
				enemy.y = enemyY;
				enemy.isDisplayed = true;
			}
		}
	}, INTERVAL);
};

/**
 * Generate 10 enemies at the start of the game
 */
const generateAllEnemies = () => {
	for (let i = 0; i < 10; i++) {
		const enemy = new EnemyCar(i, 0, 0, carWidth, carHeight, "green");
		ALLENEMIES.push(enemy);
	}
};
