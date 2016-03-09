#pragma strict



function Update() {
   if(Input.anyKey) {
      // Start the new game
      
      // Reset the player lives and
      // score
      GameMaster.playerHealth = 3;
      // Load the first level
      Application.LoadLevel("Instructions");      
   }
}


// Display main menu message
function OnGUI() {
   GUI.color = Color.white;   
   GUI.skin.label.alignment = TextAnchor.MiddleCenter;
   GUI.skin.label.fontSize = 33;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   GUI.Label(new Rect(0,0,Screen.width,Screen.height), "Captain, The world's people need your help.\n As you know, Scientists regard this Asteroid\n storm as unstoppable, meaning the end of\n the world as we know it. Your job\n is to prolong the life of the innocent\n people on our planet. Good Luck\n ...and Thank You");
   GUI.skin.label.fontSize = 30;
   GUI.Label(new Rect(0,80,Screen.width,Screen.height + 240), "Press any key to continue");
}