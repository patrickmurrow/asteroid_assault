﻿#pragma strict

// The speed fo the projectile
var speed : float;

// Flag identifyng whether the projectile
// is sent by enemy or the player
var enemyProjectile : boolean;
var edge : boolean;
// Per each frame...

function Update () {

   // The projectile travels up (in the direction of positive y axis), but
   // the movement is multiplies by speed (so negative speed will get 
   // move the projectile down)
   transform.Translate(Vector3.right * speed * Time.deltaTime);
   
   // Check if the game object is visible, if not, destroy self   
   if(!UtilScript.isVisible(renderer, Camera.main)) {
      Destroy(gameObject);
   }
}