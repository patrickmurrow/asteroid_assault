#pragma strict

var font : Font;

function Update() {
   if(Input.anyKey) {
      // Start the new game
      
      // Reset the player lives and
      // score
      GameMaster.playerHealth = 3;
      // Load the first level
      Application.LoadLevel("Newspaper");      
   }
}

// Display main menu message
function OnGUI() {
   GUI.color = Color.white;   
   GUI.skin.label.alignment = TextAnchor.MiddleCenter;
   GUI.skin.label.fontSize = 40;
   GUI.skin.label.font = font;
   	if (GameMaster.gameWon){
   		GUI.skin.label.fontSize = 40;
		GUI.Label(new Rect(0,Screen.height/ 5f + 200 ,Screen.width -25 ,180),"Level 2");
		}
   GUI.Label(new Rect(0,60,Screen.width,Screen.height+240),"Press any key to start");
   GUI.skin.label.fontSize = 17;
   GUI.skin.label.font = font;
   GUI.Label(new Rect(Screen.width/1.5 ,Screen.height/1.2 ,200,100), "Music by : Reuben Gray");
   GUI.Label(new Rect(-(Screen.width/4),Screen.height/1.2 ,Screen.width -25 ,100), "Created by : Patrick Murrow");
}