var a: Material;
private
var main: MainPorps;

function Start() {
    renderer.material.color = Color.black;
    if (gameObject.name == "Scorem") {
        gameObject.renderer.material.color = a.color;
        GetComponent(TextMesh).text = "" + MainPorps.Score;
    }

}

function Update() {

    if (gameObject.name == "Score") {
        GetComponent(TextMesh).text = "Score : " + MainPorps.Score;
    }
    if (gameObject.name == "Health") {
        GetComponent(TextMesh).text = "Health : " + MainPorps.playerHealth;
    }

}

function OnMouseOver() {
    if (gameObject.name == "OK")
        renderer.material.color = Color.red;
}

function OnMouseExit() {
    if (gameObject.name == "OK")
        renderer.material.color = Color.black;
}

function OnMouseUp() {
    if (gameObject.name == "OK") {
        Application.LoadLevel(0);
    } else if (gameObject.name == "TapToPass(Clone)") {
        if (Application.loadedLevel != 26) {
            Application.LoadLevel(Application.loadedLevel + 1);
        } else {
            Application.LoadLevel(3);
        }

    } else if (gameObject.name == "PlayAgain") {
        Application.LoadLevel(2);
    } else if (gameObject.name == "MainMenu") {
        Application.LoadLevel(0);
    }
}