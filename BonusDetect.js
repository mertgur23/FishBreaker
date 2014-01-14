#pragma strict

var ballScript: ball;
var ballScriptt: ball;
var brickBasic: BrickBasic;
private
var time: float;
private
var noneBallControl: boolean = false;
private
var h: float = Screen.height;
private
var w: float = Screen.width;
private
var nball: float;
private
var bball: float;
private
var sball: float;
private
var nplay: float;
private
var bplay: float;
private
var splay: float;

function Start() {
    nball = 0.5 * w / h * 1.16;
    bball = nball * 3 / 2;
    sball = nball * 2 / 3;

    nplay = 0.6 * w / h * 5;
    bplay = nplay * 4 / 3;
    splay = nplay * 3 / 4;

}

function OnTriggerEnter(myTrigger: Collider) {

    // Positive Bonus

    if (myTrigger.gameObject.name == "BonusBiggerBall(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        for (var balls: GameObject in GameObject.FindGameObjectsWithTag("Ball")) {
            if (balls.transform.localScale.x == nball) {
                balls.transform.localScale = Vector3(bball, bball, bball);
            } else if (balls.transform.localScale.x == sball) {
                balls.transform.localScale = Vector3(nball, nball, nball);
            }
        }
    }
    if (myTrigger.gameObject.name == "BonusBiggerPlayer(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        if (gameObject.transform.localScale.x == nplay) {
            gameObject.transform.localScale.x = bplay;
        } else if (gameObject.transform.localScale.x == splay) {
            gameObject.transform.localScale.x = nplay;
        }
    }
    if (myTrigger.gameObject.name == "BonusSlowBall(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        for (var balll: GameObject in GameObject.FindGameObjectsWithTag("Ball")) {
            ballScriptt = balll.GetComponent(ball);
            ballScriptt.velocityDecrease();
        }

    }
    if (myTrigger.gameObject.name == "BonusFireBall(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        fireBall();
    }

    if (myTrigger.gameObject.name == "BonusMultiBall(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        for (var balls: GameObject in GameObject.FindGameObjectsWithTag("Ball")) {
            if (balls.GetComponent(ball).dead == false) {
                var player: GameObject;
                player = GameObject.Find("Player");

                var clone: GameObject = Instantiate(balls, Vector3(player.transform.position.x, player.transform.position.y + 0.5, -5), balls.transform.rotation);
                clone.rigidbody.AddForce(Vector3(0f, 1f, 0));
                break;
            }
        }

    }

    // Negative Bonus

    if (myTrigger.gameObject.name == "BonusLittleBall(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        for (var ballss: GameObject in GameObject.FindGameObjectsWithTag("Ball")) {
            if (ballss.transform.localScale.x == bball) {
                ballss.transform.localScale = Vector3(nball, nball, nball);
            } else if (ballss.transform.localScale.x == nball) {
                ballss.transform.localScale = Vector3(sball, sball, sball);
            }
        }
    }
    if (myTrigger.gameObject.name == "BonusLittlePlayer(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        if (gameObject.transform.localScale.x == bplay) {
            gameObject.transform.localScale.x = nplay;
        } else if (gameObject.transform.localScale.x == nplay) {
            gameObject.transform.localScale.x = splay;
        }
    }
    if (myTrigger.gameObject.name == "BonusSpeedBall(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        for (var balll: GameObject in GameObject.FindGameObjectsWithTag("Ball")) {
            ballScriptt = balll.GetComponent(ball);
            ballScriptt.velocityIncrease();
        }
    }
    if (myTrigger.gameObject.name == "BonusNoneBall(Clone)") {
        PlayerPrefs.SetInt("bonusOneGame", PlayerPrefs.GetInt("bonusOneGame") + 1);
        PlayerPrefs.SetInt("collectedBonus", PlayerPrefs.GetInt("collectedBonus") + 1);
        Destroy(myTrigger.gameObject);
        noneBall();
    }


}

function fireBall() {
    for (var brick: GameObject in GameObject.FindGameObjectsWithTag("Brick")) {
        brick.GetComponent(BrickBasic).noneModeOff();

    }
    ballScript.fireMatOn();
    if (ballScript.fireBallMode == false) {
        time = Time.time + 10;
        ballScript.fireBallOn();

        while (Time.time < time)
            yield;
        ballScript.fireBallOff();

    } else {
        time += 10;
    }
}

function noneBall() {

    if (noneBallControl == false) {
        for (var ballsss: GameObject in GameObject.FindGameObjectsWithTag("Ball")) {
            ballsss.GetComponent(ball).fireBallOff();
        }
        time = Time.time + 10;
        for (var brick: GameObject in GameObject.FindGameObjectsWithTag("Brick")) {
            brickBasic = brick.GetComponent(BrickBasic);
            if (brickBasic != null) {
                brickBasic.noneModeOn();
            }
        }

        while (Time.time < time)
            yield;
        for (var brick: GameObject in GameObject.FindGameObjectsWithTag("Brick")) {
            brickBasic = brick.GetComponent(BrickBasic);
            if (brickBasic != null) {
                brickBasic.noneModeOff();
            }
        }

    } else {
        time += 10;
    }
}