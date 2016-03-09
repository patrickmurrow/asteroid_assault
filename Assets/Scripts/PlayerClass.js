#pragma strict

// Private variables (not visible in the Inspector panel)
// The speed of player movement
var speed : float;
//var moveLeft: KeyCode;
var stop: KeyCode;
var angle: int;
var hitSound: AudioClip = null;
var thrusterSound: AudioClip = null;
// When enemy collides with an object with a
// collider that is a trigger...
function OnTriggerEnter2D(other : Collider2D) {
	AudioSource.PlayClipAtPoint(hitSound, transform.position);
      // Collision with something that is not a wall
      // Check if collided with a projectile
      var asteroid : AlienClass;
      
      // A projectile has a ProjectileClass script component,
      // so try to get a reference to that component
      asteroid = other.GetComponent(AlienClass);

      //If that refernce is not null, then check if it's an enemyProjectile      
      if(asteroid != null && asteroid.enemyProjectile) {
         // Collided with an enemy projectile
         
         // Destroy the projectile game object
         //Destroy(other.gameObject);
         
         // Report player hit to the game master
         GameMaster.PlayerHitShip();
         
         // Destroy self
         Destroy(gameObject);
      }           
   }    

function Update () {
	var delta : float = speed * Time.deltaTime;
	if(Input.GetKey(stop)) {
		// Move to the left
		AudioSource.PlayClipAtPoint(thrusterSound, transform.position);
		transform.Translate(new Vector3(0,0,0));
		transform.Rotate( new Vector3(0,0,0));		
	}else{  
		transform.Translate(new Vector3(speed * delta,0,0));
		transform.Rotate( new Vector3(0,0,-speed * delta * angle));	
 }

   
   if(Input.GetButton("Jump")) {
      // Get player's attack component
      // and execute its Shoot() method
      var attack : AttackClass;
      attack = GetComponent(AttackClass);
      attack.Shoot();
   }
}
