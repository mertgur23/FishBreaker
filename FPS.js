#pragma strict
private var time : float;
private var fps : int;
function Start () {

}

function Update () {
	if(Time.time > time){
		time = Time.time + 1;
		gameObject.GetComponent(TextMesh).text = ""+fps;
		fps = 0;
	}
	fps++;

}