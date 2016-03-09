#pragma strict

var asteroidPrefab : Transform;
var difficulty : float;
var speed : float;
var points: int = 100;



function Start () {
   for(var y : int = 0; y < 5; y++) {		
      for(var x : int = 0; x < 6; x++) {
         // Create new game object (from the prefab)
         var asteroid = Instantiate(asteroidPrefab);
         asteroid.parent = transform;
         // Position the newly created object in the wave
         asteroid.position = new Vector3((Random.Range(8.0 ,37.0)) ,(Random.Range(-3.0 ,4.0)),0);        
      }
   
   }

}

function Update () {
	if (Time.fixedTime > difficulty){
		if (GameMaster.gameWon){
			speed = speed + 0.05;
			}
		speed = speed + 0.1;
		difficulty = difficulty * 2;
	}
   // Move the wave on the horisonatal axis
	transform.Translate( new Vector3(Time.deltaTime * -1 *speed , 0, 0));
	

}