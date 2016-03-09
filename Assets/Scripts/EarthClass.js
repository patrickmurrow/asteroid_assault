
#pragma strict
var hitSound: AudioClip = null;

function OnTriggerEnter2D(other : Collider2D) {
	  AudioSource.PlayClipAtPoint(hitSound, transform.position);

      // Destroy the Player game object
 
      // Collision with something that is not a wall
      // Check if collided with a projectile
      var asteroid : AlienClass;
      
      // A projectile has a ProjectileClass script component,
      // so try to get a reference to that component
      asteroid = other.GetComponent(AlienClass);
      Destroy(other.gameObject);

      //If that refernce is not null, then check if it's an enemyProjectile      
      if(asteroid != null && asteroid.enemyProjectile) {
         // Collided with an enemy projectile
         
         // Destroy the projectile game object
        
         
         // Report player hit to the game master
         // Destroy self
         GameMaster.PlayerHit();
         if (GameMaster.playerHealth < 1){
         	Destroy(gameObject);
         }
      }           
     }     
