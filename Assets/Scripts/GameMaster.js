#pragma strict

// Static variables - there's only one instance
// of this variable for the entire game

// Player health - always start with 3 lives
static var playerHealth: int = 3;
static var alive : boolean;
static var hitsLeft : int = 90;
static var gameWon : boolean = false;

function Awake () {
   // Never destroy this object, even
   // when level is re-loaded
   DontDestroyOnLoad(this);
}

// Method to call when enemy is hit
static function EnemyHit(asteroid : AlienClass) {
   hitsLeft--;
   if(hitsLeft < 1) {
   	gameWon = true;
    Application.LoadLevel("Win");
   }   
}

static function PlayerHitShip() {
	alive = false;
    Application.LoadLevel("Game Over");
   }

// Method to call when player is hit
static function PlayerHit() {
	playerHealth--;
    if (playerHealth < 1){
      	Application.LoadLevel("Game Over");
      }
   }