#pragma strict

static var scoreBefore : int;

function Update() {
   if(Input.anyKey) {
      // Start the new game
      
      // Reset the player lives and
      // score
      GameMaster.playerHealth = 3;
      // Load the first level
      Application.LoadLevel("Asteroid Attack pt");      
   }
}


// Display main menu message
function OnGUI() {
   scoreBefore = Mathf.Round(Time.fixedTime);
   GUI.color = Color.white;   
   GUI.skin.label.alignment = TextAnchor.MiddleCenter;
   GUI.skin.label.fontSize = 33;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   GUI.Label(new Rect(0,0,Screen.width,Screen.height), "Hey Captain, Great to have you on board\n Just a reminder that we're in orbit and\n our main thrusters are down, luckily\n we still have power of our reverse\n thrusters (S) and Particle Gun (Space).\n Good Luck!");
   GUI.skin.label.fontSize = 30;
   GUI.Label(new Rect(0,80,Screen.width,Screen.height + 240), "Press any key to start");
}