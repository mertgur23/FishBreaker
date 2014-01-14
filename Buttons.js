var a: GameObject;
var missionTablo: GameObject;
var color: Material;

static
var back: boolean = true;
static
var backa: boolean = true;
static
var statTablo: boolean = true;
static
var mission: boolean = true;
var pauseMenu: GameObject;

function Start() {


    if (PlayerPrefs.GetInt("multiple") == 0) {
        PlayerPrefs.SetInt("multiple", 10);
    }
    if (gameObject.name == "Multiple") {
        gameObject.GetComponent(TextMesh).text = "X" + PlayerPrefs.GetInt("multiple");

    }
    if (gameObject.name == "HighScore") {
        gameObject.renderer.material.color = color.color;
        gameObject.GetComponent(TextMesh).text = "" + PlayerPrefs.GetInt("firstScore");

    } else if (gameObject.name == "TotalGames") {
        gameObject.renderer.material.color = color.color;
        gameObject.GetComponent(TextMesh).text = "" + PlayerPrefs.GetInt("totalGames");

    } else if (gameObject.name == "DestroyedBlocks") {
        gameObject.renderer.material.color = color.color;
        gameObject.GetComponent(TextMesh).text = "" + PlayerPrefs.GetInt("destroyedBlocks");

    } else if (gameObject.name == "CompletedMissions") {
        gameObject.renderer.material.color = color.color;
        gameObject.GetComponent(TextMesh).text = "" + (PlayerPrefs.GetInt("multiple") - 10);

    } else if (gameObject.name == "CollectedBonus") {
        gameObject.renderer.material.color = color.color;
        gameObject.GetComponent(TextMesh).text = "" + (PlayerPrefs.GetInt("collectedBonus"));

    }


}

function OnMouseUp() {
    if (gameObject.name == "Mission" && mission) {
        backa = true;
        mission = false;
        missionTablo.animation["TabloGo"].speed = -1;
        missionTablo.animation["TabloGo"].time = missionTablo.animation["TabloGo"].length;;
        missionTablo.animation.Play("TabloGo");
    } else if (gameObject.name == "Back" && back) {

        back = false;
        statTablo = true;
        a.animation["TabloGo"].speed = 1;
        a.animation["TabloGo"].time = 0;
        a.animation.Play("TabloGo");
    } else if (gameObject.name == "Backa" && backa) {

        backa = false;
        mission = true;
        missionTablo.animation["TabloGo"].speed = 1;
        missionTablo.animation["TabloGo"].time = 0;
        missionTablo.animation.Play("TabloGo");
    } else if (gameObject.name == "Stats" && statTablo == true) {
        a.animation["TabloGo"].speed = -1;
        a.animation["TabloGo"].time = a.animation["TabloGo"].length;
        a.animation.Play("TabloGo");
        statTablo = false;
        back = true;
    } else if (gameObject.name == "Pause") {
        Instantiate(pauseMenu);
        Time.timeScale = 0.00000001;
    } else if (gameObject.name == "Play") {
        var a: GameObject = GameObject.Find("Pause Menu(Clone)");
        Destroy(a);
        Time.timeScale = 1;
    } else if (gameObject.name == "Menu") {
        Application.LoadLevel(0);
    } else if (gameObject.name == "TapToStart") {
        Application.LoadLevel(2);
    }

}