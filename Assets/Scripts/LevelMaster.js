#pragma strict

static var population: float;
static var score: int;
static var highScore: int;


// HUD
function OnGUI() {
   score = Mathf.Round(Time.fixedTime) - InstructionClass.scoreBefore;
   population = (GameMaster.playerHealth*2.3 + GameMaster.playerHealth*.02*(Mathf.Round(Time.fixedTime)-InstructionClass.scoreBefore));
   // Show player score in white on the top left of the screen
   GUI.color = Color.white;   
   GUI.skin.label.alignment = TextAnchor.UpperLeft;
   GUI.skin.label.fontSize = 35;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   GUI.Label(new Rect(50,Screen.height/ 9f ,200,100), "Year: " + (2019 + score));

   // Show the player lives in red on the top right of the screen
   GUI.color = Color.white;
   GUI.skin.label.alignment = TextAnchor.UpperRight;
   GUI.skin.label.fontSize = 35;
   GUI.skin.label.fontStyle = FontStyle.Bold;
   GUI.Label(new Rect(0,Screen.height/ 9f ,Screen.width -25 ,100), "Population: " + (Mathf.Round(population*100)/100) + " billion");
}

