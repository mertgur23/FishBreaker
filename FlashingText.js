#pragma strict
private var revert : boolean = false;
function Start () {
	
}

function Update () {
	
	if(gameObject.renderer.material.color.a >= -0.2 && revert == false){
		gameObject.renderer.material.color.a -= Time.deltaTime;
	}
	if(gameObject.renderer.material.color.a < -0.2){
		revert = true;
	}
	if(gameObject.renderer.material.color.a <= 1.2 && revert == true){
		gameObject.renderer.material.color.a += Time.deltaTime;
	}
	if(gameObject.renderer.material.color.a > 1.2){
		revert = false;
	}
	
}