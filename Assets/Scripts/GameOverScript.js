#pragma strict
var restart: KeyCode;
// Display game over message
function OnGUI() {
	

   // Show player score in white on the top left of the screen
   GUI.color = Color.white;   
   GUI.skin.label.alignment = TextAnchor.MiddleCenter;
   GUI.skin.label.fontSize = 60;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   GUI.Label(new Rect(0,Screen.height/ 9f,Screen.width,60), "Game over");

   var message : String;
   var message2 : String;
   		
	if (GameMaster.gameWon){
		message2 = "Level 2 High Score: ";
	}
	else{
		message2 = "High Score: ";
		}


	if (LevelMaster.score > LevelMaster.highScore){
		LevelMaster.highScore = LevelMaster.score;
	}

   if(GameMaster.playerHealth <= 0 || !GameMaster.alive) {
      // The lost message will be shown in red

      GUI.skin.label.fontSize = 30;
      message = "The Human Race lasted: \n" + LevelMaster.score + " more years.";
      GUI.color = Color.red;   
   } else {
      // The won message will be shown in white
      message = "You won!!!";
      GUI.color = Color.white;
   }      
   // Show lost/won message
   GUI.skin.label.fontSize = 30;
   GUI.Label(new Rect(0,Screen.height/ 4f + 30f,Screen.width,100), message);
   GUI.color = Color.white;
   GUI.skin.label.fontSize = 40;
   GUI.Label(new Rect(0,80,Screen.width,Screen.height+240),"Press Enter to restart");
   GUI.Label(new Rect(0,Screen.height/ 4f + 85f,Screen.width,160), message2 + LevelMaster.highScore);
   }
function Update() {
   if(Input.GetKey(restart)) {
      // Start the new game
      
      // Reset the player lives and
      // score
      GameMaster.hitsLeft = 90;
      GameMaster.playerHealth = 3;
      // Load the first level
      Application.LoadLevel("Main Menu");
      }      
   }
