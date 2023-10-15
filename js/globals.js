/** ---------- GLOBAL PROPERTIES ---------- **/

// HTML canvas
const canvas = document.getElementById("canvas");
/** @type {HTMLCanvasElement} */
const context = canvas.getContext("2d");

// width of the canvas
canvas.width = 500;
// height of the canvas
canvas.height = 600;

// enemies array
// let ENEMIES = []

let ALLENEMIES = [];
// positions the enemies can generate in
const enemiesPositions = [
	[0, 1, 1],
	[1, 1, 0],
	[1, 0, 1],
];
// speed of the road and the enemy cars
let GAMESPEED = 10;
// time interval at which the enemies are generated
const INTERVAL = 1000;
// the count of start press
let sPressCount = 0;
// the gameover state
let gameOverState = false;
// the number of roads passed by the car
let roadCount = 0;
// win if this number of roads is passed
let winCount = 30;

// the interval id for generating enemies
let enemiesIntervalId, animationId;

/** ----- PLAYER CAR PROPERITES -----  **/

// the width of the player car
const carWidth = 50;
// the height of the player car
const carHeight = 100;
// initial x position of the player car
const playerX = canvas.width / 2 - carWidth / 2;
// the constant y position of the player car
const playerY = canvas.height - (carHeight + carHeight / 2);

let roadLoaded = false;
let finishLineLoaded = false;
let playerLoaded = false;
let enemyLoaded = false;
