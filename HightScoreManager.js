#pragma strict

function Update () {
	if(gameObject.name=="First String"){
		gameObject.guiText.text="   1. " + PlayerPrefs.GetInt("firstScore");
	}
	else if(gameObject.name=="Second String"){
		gameObject.guiText.text="   2. " + PlayerPrefs.GetInt("secondScore");
	}
	else if(gameObject.name=="Third String"){
		gameObject.guiText.text="   3. " + PlayerPrefs.GetInt("thirthScore");
	}
	else if(gameObject.name=="Fourth String"){
		gameObject.guiText.text="   4. " + PlayerPrefs.GetInt("fourthScore");
	}
	else if(gameObject.name=="Fifth String"){
		gameObject.guiText.text="   5. " + PlayerPrefs.GetInt("fifthScore");
	}
	
}
function OnMouseUp(){
	if(gameObject.name == "BackButton"){
		Application.LoadLevel(0);
	}
	if(gameObject.name == "DeleteHighScores"){
		PlayerPrefs.DeleteAll();
	}
}
function writeScores(){

}
