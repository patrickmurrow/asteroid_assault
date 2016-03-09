#pragma strict

var enemyProjectile : boolean;
var shotSound: AudioClip = null;

function OnTriggerEnter2D(other : Collider2D) {
	
	 var projectile : ProjectileClass;
	  // Collision with something that is not a wall
      // Check if collided with a projectile
     
      // A projectile has a ProjectileClass script component,
      // so try to get a reference to that component
      projectile = other.GetComponent(ProjectileClass);


      //If that refernce is not null, then check if it's an enemyProjectile      
      if(projectile != null && !projectile.enemyProjectile) {
         // Collided with non enemy projectile (so a player projectile)
         AudioSource.PlayClipAtPoint(shotSound, transform.position);
         // Destroy the projectile game object
         if (!projectile.edge){
         	Destroy(other.gameObject);
         	GameMaster.EnemyHit(this);
         	Destroy(gameObject);
         }
         else{
         	GameMaster.EnemyHit(this);
         }
      }           
   }    