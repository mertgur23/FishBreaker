#pragma strict
var boy: float;

function Start() {
    var h: float = Screen.height;
    var w: float = Screen.width;


    if (gameObject.name == "Pause Menu(Clone)") {
        gameObject.transform.localScale.x = w / h * gameObject.transform.localScale.y * 1.01;
    } else if (gameObject.tag == "Ball" && gameObject.GetComponent(ball).fitted == false) {
        gameObject.GetComponent(ball).fitted = true;
        gameObject.transform.localScale.x = w / h * gameObject.transform.localScale.y * 1.16;
        var e: float = w / h * gameObject.transform.localScale.y * 1.16;
        var f: float = gameObject.transform.localScale.y;

        gameObject.transform.localScale.y += e - f;

    } else if (gameObject.name == "z") {
        gameObject.transform.localScale.x = w / h * gameObject.transform.localScale.y * 1.165;
    } else if (gameObject.name == "Player") {
        gameObject.transform.localScale.x = w / h * gameObject.transform.localScale.y * 5;
    } else if (gameObject.name == "Pause") {
        var a: float = w / h * gameObject.transform.localScale.y * 1.16;
        var b: float = gameObject.transform.localScale.y;
        if (gameObject.transform.localScale.x > 0) {
            gameObject.transform.localScale.x -= a - b;
        } else
            gameObject.transform.localScale.x += a - b;

    } else if (gameObject.name == "Play" || gameObject.name == "Menu") {
        var c: float = w / h * gameObject.transform.localScale.y * 1.16;
        var d: float = gameObject.transform.localScale.y;

        gameObject.transform.localScale.y += c - d;

    } else if (gameObject.name == "TapToPass(Clone)") {
        gameObject.transform.localScale.x = w / h * gameObject.transform.localScale.y * 1;
    }
}