static var playerHealth : int = 3; 
static var Score : int = 0;
var ballPreFab : GameObject;
var menuPrafab : GameObject;
var tapToPassPreFab : GameObject;

static var menu : GameObject;
static var a : GameObject;
static var tapToPass : GameObject;

private var oneTime :boolean = true;
private var time : float;


static function increaseScore (point : int) {
	Score += point;
}
static function decreaseHealth() {
		if(playerHealth >=1 ){
			playerHealth -= 1;
			
		if(playerHealth > 0){
			for (var brick : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
        			 brick.GetComponent(BrickBasic).noneModeOff();
         			
			}
			var clone : GameObject = Instantiate(a,Vector3(3,10,10),a.transform.rotation);
			//clone.transform.parent = GameObject.Find("z").transform;
			
		}
		else{
			Instantiate(menu,Vector3(0,1,-10),menu.transform.rotation);
			chooseHightScore();
			missionDetect();
			PlayerPrefs.SetInt("totalGames",PlayerPrefs.GetInt("totalGames") +1);
			
		}
	}
}
function Update(){
	
if(Time.time > time){
time = Time.time + 1;

	var bricks : GameObject[];
	bricks = GameObject.FindGameObjectsWithTag("Brick");
	
	if(bricks.Length == 0 && oneTime){
	nextLevel();
	Time.timeScale=0.00000001;
	
	}
	var balls : GameObject[];
	balls = GameObject.FindGameObjectsWithTag("Ball");
	
	if(balls.Length == 0){
			decreaseHealth();
		
	}
	}
}
function Start(){
	
	
	if(Application.loadedLevel == 2){
		playerHealth = 5;
		Score = 0;
		
		PlayerPrefs.SetInt("bonusOneGame",0);
	}
	else if(Application.loadedLevel == 0){
		missionDetect();
	}
	a = ballPreFab;
	menu = menuPrafab;
	tapToPass = tapToPassPreFab;
	
	Time.timeScale = 1;
}
function nextLevel(){
	Instantiate(tapToPassPreFab,tapToPassPreFab.transform.position,tapToPassPreFab.transform.rotation);
	oneTime=false;
	
}
static function chooseHightScore(){
	if(Score>PlayerPrefs.GetInt("firstScore")){
		PlayerPrefs.SetInt("fifthScore",PlayerPrefs.GetInt("fourthScore"));
		PlayerPrefs.SetInt("fourthScore",PlayerPrefs.GetInt("thirthScore"));
		PlayerPrefs.SetInt("thirthScore",PlayerPrefs.GetInt("secondScore"));
		PlayerPrefs.SetInt("secondScore",PlayerPrefs.GetInt("firstScore"));
		PlayerPrefs.SetInt("firstScore",Score);
	}
	else if(Score>PlayerPrefs.GetInt("secondScore")){
		PlayerPrefs.SetInt("fifthScore",PlayerPrefs.GetInt("fourthScore"));
		PlayerPrefs.SetInt("fourthScore",PlayerPrefs.GetInt("thirthScore"));
		PlayerPrefs.SetInt("thirthScore",PlayerPrefs.GetInt("secondScore"));
		PlayerPrefs.SetInt("secondScore",Score);
	}
	else if(Score>PlayerPrefs.GetInt("thirthScore")){
		PlayerPrefs.SetInt("fifthScore",PlayerPrefs.GetInt("fourthScore"));
		PlayerPrefs.SetInt("fourthScore",PlayerPrefs.GetInt("thirthScore"));
		PlayerPrefs.SetInt("thirthScore",Score);
	}
	else if(Score>PlayerPrefs.GetInt("fourthScore")){
		PlayerPrefs.SetInt("fifthScore",PlayerPrefs.GetInt("fourthScore"));
		PlayerPrefs.SetInt("fourthScore",Score);
	}
	else if(Score>PlayerPrefs.GetInt("fifthScore")){
		PlayerPrefs.SetInt("fifthScore",Score);
	}
}
static function missionDetect(){

//High Score Missions

	if(Score >= 10000){
		if(PlayerPrefs.GetInt("scoreOneMission") == 0){
			PlayerPrefs.SetInt("scoreOneMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(Score >= 25000){
		if(PlayerPrefs.GetInt("scoreTwoMission") == 0){
			PlayerPrefs.SetInt("scoreTwoMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(Score >= 50000){
		if(PlayerPrefs.GetInt("scoreThreeMission") == 0){
			PlayerPrefs.SetInt("scoreThreeMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(Score >= 100000){
		if(PlayerPrefs.GetInt("scoreFourMission") == 0){
			PlayerPrefs.SetInt("scoreFourMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(Score >= 250000){
		if(PlayerPrefs.GetInt("scoreFiveMission") == 0){
			PlayerPrefs.SetInt("scoreFiveMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(Score >= 500000){
		if(PlayerPrefs.GetInt("scoreSixMission") == 0){
			PlayerPrefs.SetInt("scoreSixMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(Score >= 1000000){
		if(PlayerPrefs.GetInt("scoreSevenMission") == 0){
			PlayerPrefs.SetInt("scoreSevenMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}

//Bonus Collect Missions

	if(PlayerPrefs.GetInt("collectedBonus") >=10 ){
		if(PlayerPrefs.GetInt("bonusOneMission") == 0){
			PlayerPrefs.SetInt("bonusOneMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("collectedBonus") >=25 ){
		if(PlayerPrefs.GetInt("bonusTwoMission") == 0){
			PlayerPrefs.SetInt("bonusTwoMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("collectedBonus") >=50 ){
		if(PlayerPrefs.GetInt("bonusThreeMission") == 0){
			PlayerPrefs.SetInt("bonusThreeMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("collectedBonus") >=100 ){
		if(PlayerPrefs.GetInt("bonusFourMission") == 0){
			PlayerPrefs.SetInt("bonusFourMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("collectedBonus") >=250 ){
		if(PlayerPrefs.GetInt("bonusFiveMission") == 0){
			PlayerPrefs.SetInt("bonusFiveMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("collectedBonus") >=500 ){
		if(PlayerPrefs.GetInt("bonusSixMission") == 0){
			PlayerPrefs.SetInt("bonusSixMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("collectedBonus") >=1000 ){
		if(PlayerPrefs.GetInt("bonusSevenMission") == 0){
			PlayerPrefs.SetInt("bonusSevenMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	
//Bonus in one game Missions

	if(PlayerPrefs.GetInt("bonusOneGame") >=10 ){
		if(PlayerPrefs.GetInt("oneBonusOneMission") == 0){
			PlayerPrefs.SetInt("oneBonusOneMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("bonusOneGame") >=25 ){
		if(PlayerPrefs.GetInt("oneBonusTwoMission") == 0){
			PlayerPrefs.SetInt("oneBonusTwoMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("bonusOneGame") >=50 ){
		if(PlayerPrefs.GetInt("oneBonusThreeMission") == 0){
			PlayerPrefs.SetInt("oneBonusThreeMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("bonusOneGame") >=100 ){
		if(PlayerPrefs.GetInt("oneBonusFourMission") == 0){
			PlayerPrefs.SetInt("oneBonusFourMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	
//Total Game Missions
	
	if(PlayerPrefs.GetInt("totalGames") >=5 ){
		if(PlayerPrefs.GetInt("totalOneMission") == 0){
			PlayerPrefs.SetInt("totalOneMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("totalGames") >=10 ){
		if(PlayerPrefs.GetInt("totalTwoMission") == 0){
			PlayerPrefs.SetInt("totalTwoMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("totalGames") >=25 ){
		if(PlayerPrefs.GetInt("totalThreeMission") == 0){
			PlayerPrefs.SetInt("totalThreeMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("totalGames") >=50 ){
		if(PlayerPrefs.GetInt("totalFourMission") == 0){
			PlayerPrefs.SetInt("totalFourMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("totalGames") >=100 ){
		if(PlayerPrefs.GetInt("totalFiveMission") == 0){
			PlayerPrefs.SetInt("totalFiveMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("totalGames") >=250 ){
		if(PlayerPrefs.GetInt("totalSixMission") == 0){
			PlayerPrefs.SetInt("totalSixMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("totalGames") >=500 ){
		if(PlayerPrefs.GetInt("totalSevenMission") == 0){
			PlayerPrefs.SetInt("totalSevenMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("totalGames") >=1000 ){
		if(PlayerPrefs.GetInt("totalEightMission") == 0){
			PlayerPrefs.SetInt("totalEightMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	
//Crashed Block Mission
	
	if(PlayerPrefs.GetInt("destroyedBlocks") >=500 ){
		if(PlayerPrefs.GetInt("blockTwoMission") == 0){
			PlayerPrefs.SetInt("blockTwoMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("destroyedBlocks") >=1000 ){
		if(PlayerPrefs.GetInt("blockThreeMission") == 0){
			PlayerPrefs.SetInt("blockThreeMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("destroyedBlocks") >=2500 ){
		if(PlayerPrefs.GetInt("blockFourMission") == 0){
			PlayerPrefs.SetInt("blockFourMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
	if(PlayerPrefs.GetInt("destroyedBlocks") >=5000 ){
		if(PlayerPrefs.GetInt("blockFiveMission") == 0){
			PlayerPrefs.SetInt("blockFiveMission",1);
			PlayerPrefs.SetInt("multiple",PlayerPrefs.GetInt("multiple")+1);
		}
	}
}

