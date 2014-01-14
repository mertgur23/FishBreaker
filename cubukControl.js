#pragma strict
private var touchX : Vector3;
private var rightTouch : boolean = false;
private var leftTouch : boolean = false;


function Start () {

	
}

function Update () {
	for (var touch : Touch in Input.touches) {
		if (touch.phase == TouchPhase.Moved || touch.phase == TouchPhase.Began) {
			var a : Vector3 = touch.position;
			var v : Vector3;
			v = Camera.main.ScreenToWorldPoint(a);
			touchX = v;
			
			
		}
		
	}
	if(leftTouch || rightTouch){
		if(Input.touchCount==0){
			gameObject.rigidbody.velocity.x = 0;
		}
	}
	if(leftTouch && touchX.x > gameObject.transform.position.x){
	
	gameObject.rigidbody.velocity.x = (touchX.x - gameObject.transform.position.x)*20;
	
	}
	else if(rightTouch && touchX.x < gameObject.transform.position.x){
	
	gameObject.rigidbody.velocity.x = (touchX.x - gameObject.transform.position.x)*20;
	
	}
	else if(!rightTouch && !leftTouch){
	
	gameObject.rigidbody.velocity.x = (touchX.x - gameObject.transform.position.x)*20;
	
	}
	
	
	
}
function OnCollisionEnter(collision : Collision){
	
}
function OnTriggerEnter(collision : Collider){
	if(collision.gameObject.name == "left"){leftTouch = true;}
	if(collision.gameObject.name == "right"){rightTouch = true;}
}
function OnTriggerExit(collision : Collider){
	if(collision.gameObject.name == "left"){leftTouch = false;}
	if(collision.gameObject.name == "right"){rightTouch = false;}
}
