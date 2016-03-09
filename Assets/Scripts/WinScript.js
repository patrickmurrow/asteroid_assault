#pragma strict
var restart: KeyCode;
// Display game over message
function OnGUI() {
	

   // Show player score in white on the top left of the screen
   GUI.color = Color.white;   
   GUI.skin.label.alignment = TextAnchor.MiddleCenter;
   GUI.skin.label.fontSize = 50;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   

   var message : String;
   GUI.color = Color.white;
   GUI.skin.label.fontSize = 35;
   message = "The people that said you were crazy \n  will be shouting your name in the streets \n because against all odds...";
   GUI.Label(new Rect(0,Screen.height/ 9f, Screen.width +30,120), message);
   GUI.skin.label.fontSize = 50;
   GUI.Label(new Rect(0,Screen.height/ 4f + 50,Screen.width,90), "You Saved the World!");
   GUI.skin.label.fontSize = 35;
   GUI.Label(new Rect(0,Screen.height/ 4f + 100f,Screen.width,150), "High Score: Complete");
   GUI.Label(new Rect(0,80,Screen.width,Screen.height+200),"Press Enter to restart on Level 2");
   }
function Update() {
   if(Input.GetKey(restart)) {
      // Start the new game
      
      // Reset the player lives and
      // score
      GameMaster.hitsLeft = 90;
      GameMaster.playerHealth = 3;
      LevelMaster.highScore = 0;

      // Load the first level
      Application.LoadLevel("Main Menu");
      }      
   }