#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (myTrigger : Collider) {
	if(myTrigger.gameObject.name == "Taban"){
	
	Destroy(gameObject);
	}
}