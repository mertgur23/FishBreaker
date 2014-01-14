#pragma strict
var True: Material;
private
var touchUp: boolean = false;
private
var touchDown: boolean = false;
private
var first: GameObject;
private
var last: GameObject;

//-----------
private
var _ftransform: Transform;
private
var _ltransform: Transform;

function Start() {

    first = GameObject.Find("Mission1");
    last = GameObject.Find("Mission30");

    _ftransform = first.transform;
    _ltransform = last.transform;
    if (gameObject.name == "One" && PlayerPrefs.GetInt("bonusOneMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "Six" && PlayerPrefs.GetInt("bonusTwoMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneOne" && PlayerPrefs.GetInt("bonusThreeMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneFour" && PlayerPrefs.GetInt("bonusFourMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneNine" && PlayerPrefs.GetInt("bonusFiveMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoFour" && PlayerPrefs.GetInt("bonusSixMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoEight" && PlayerPrefs.GetInt("bonusSevenMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "Two" && PlayerPrefs.GetInt("totalOneMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "Five" && PlayerPrefs.GetInt("totalTwoMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneZero" && PlayerPrefs.GetInt("totalThreeMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneThree" && PlayerPrefs.GetInt("totalFourMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneEight" && PlayerPrefs.GetInt("totalFiveMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoTwo" && PlayerPrefs.GetInt("totalSixMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoSix" && PlayerPrefs.GetInt("totalSevenMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoNine" && PlayerPrefs.GetInt("totalEightMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "Three" && PlayerPrefs.GetInt("scoreOneMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "Seven" && PlayerPrefs.GetInt("scoreTwoMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneTwo" && PlayerPrefs.GetInt("scoreThreeMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneFive" && PlayerPrefs.GetInt("scoreFourMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoOne" && PlayerPrefs.GetInt("scoreFiveMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoFive" && PlayerPrefs.GetInt("scoreSixMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "ThreeZero" && PlayerPrefs.GetInt("scoreSevenMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "Four" && PlayerPrefs.GetInt("oneBonusOneMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "Nine" && PlayerPrefs.GetInt("oneBonusTwoMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneSix" && PlayerPrefs.GetInt("oneBonusThreeMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoThree" && PlayerPrefs.GetInt("oneBonusFourMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "Eight" && PlayerPrefs.GetInt("blockTwoMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "OneSeven" && PlayerPrefs.GetInt("blockThreeMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoZero" && PlayerPrefs.GetInt("blockFourMission") == 1) {
        gameObject.renderer.material = True;
    } else if (gameObject.name == "TwoSeven" && PlayerPrefs.GetInt("blockFiveMission") == 1) {
        gameObject.renderer.material = True;
    }

}

function Update() {
    // x =  0.2205881	 

    if (touchDown && _ltransform.localPosition.y > 0.3) {
        for (var allMissions: GameObject in GameObject.FindGameObjectsWithTag("Mission")) {
            allMissions.transform.position.y += 2 * Time.deltaTime;
        }
    }
    if (touchUp && _ftransform.localPosition.y < -0.2) {
        for (var allMissions: GameObject in GameObject.FindGameObjectsWithTag("Mission")) {
            allMissions.transform.position.y -= 2 * Time.deltaTime;
        }
    }
    for (var allMissions: GameObject in GameObject.FindGameObjectsWithTag("Mission")) {
        if (-0.3 > allMissions.transform.localPosition.y && allMissions.transform.localPosition.x != 10) {
            allMissions.transform.localPosition.x = 10;
        } else if (-0.3 < allMissions.transform.localPosition.y && allMissions.transform.localPosition.x == 10) {
            if (0.4 > allMissions.transform.localPosition.y) {
                allMissions.transform.localPosition.x = 0.2205881;
            }
        }
        if (0.4 < allMissions.transform.localPosition.y && allMissions.transform.position.x != 10) {
            allMissions.transform.localPosition.x = 10;
        }
    }
}

function OnMouseDown() {
    if (gameObject.name == "Up") {
        touchUp = true;
    }
    if (gameObject.name == "Down") {
        touchDown = true;
    }
}

function OnMouseUp() {
    if (gameObject.name == "Up") {
        touchUp = false;
    }
    if (gameObject.name == "Down") {
        touchDown = false;
    }
}