	#pragma strict
	
	var hitSound : AudioClip;
	var hittSound : AudioClip;
	var hitttSound : AudioClip;
	var fireBallMode : boolean = false;
	private var maxVelocity : float = 5f;
	var brickBasic : BrickBasic;
	var mat : PhysicMaterial;
	var v : Vector3;
	var mainScript : MainPorps;
	var ballPreFab : GameObject;
	var gameHealt : GameObject;
	var dead : boolean = true;
	var allDead : boolean = true;
	private var hiz : float;
	private var nota : float;
	var rot: Quaternion;
	var ballCount : int = 0;
	var pause : GameObject;
	
	var fire : Material;
	var norm : Material;
	
	private var bug : int;
	var fitted : boolean = false;
	
	//------------
	
	private var _transform : Transform;
	private var _rigidbody : Rigidbody;
	
	function Start () {
		_transform = transform;
		_rigidbody = rigidbody;
		rot = gameObject.transform.localRotation;
		if(gameObject.name == "balla"){
			rigidbody.AddForce(100,0,0);
		}
	}
	
	function Update () {
		if (Input.GetKeyDown(KeyCode.Escape)) { 
			if(Application.loadedLevel != 0 && Time.timeScale == 1){
			Instantiate(pause);
			Time.timeScale = 0.00000001; 
			}
			else if(Time.timeScale == 0.00000001){
				Application.LoadLevel(0);
			}
			else {
			 Application.Quit();
			}
	
		}
		if(_transform.position.x < -10 || _transform.position.x > 10){
			Destroy(gameObject);
			
		}
		if((dead == false) && (_rigidbody.velocity.y < 1.5) && (_rigidbody.velocity.y > -1.5)){
			if(_rigidbody.velocity.y <= 0){_rigidbody.velocity.y = -1.5;}
			if(_rigidbody.velocity.y > 0){_rigidbody.velocity.y = 1.5;}
		}
		if((dead == false) && (_rigidbody.velocity.x < 0.1) && (_rigidbody.velocity.x > -0.1)){
			_rigidbody.AddForce(1,0,0);
			
		}
		if((dead == false) && (_rigidbody.velocity.x < 2) && (_rigidbody.velocity.x > -2) && (gameObject.name == "balla")){
			if(_rigidbody.velocity.x < 0){_rigidbody.velocity.x = -2;}
			if(_rigidbody.velocity.x > 0){_rigidbody.velocity.x = 2;}
		}
		
		if(dead == false){
		_rigidbody.velocity = _rigidbody.velocity.normalized * maxVelocity;
		}
		if (allDead){
			
			var player : GameObject;
			player = GameObject.Find("Player");
			_transform.localPosition = Vector3(player.transform.localPosition.x,player.transform.localPosition.y+gameObject.transform.localScale.y/2+player.transform.localScale.y/2,player.transform.localPosition.z);
			_transform.localRotation=rot;
			var translation : float = Input.GetAxis("Jump");
			if(translation!=0){
				allDead = false;
				dead = false;
				_rigidbody.AddForce(Vector3(1f,1f,0));
			}
			if (Input.touchCount > 0 && Input.GetTouch (0).phase == TouchPhase.Ended) {
				allDead = false;
				dead = false;
				_rigidbody.AddForce(Vector3(1f,1f,0));
				
				
			}
		}
		
		
	}
	function OnCollisionExit(collision : Collision) {
	if ( collision.gameObject.name == "Player"){
			
			_rigidbody.velocity.x = hiz + (nota * 2);
			}
	}
	function OnCollisionEnter(collision : Collision) {
		
		if(collision.gameObject.name == "BrickStone" || collision.gameObject.name == "leftWall" || collision.gameObject.name == "rightWall"){
			bug++;
			if(bug>5){
				_rigidbody.AddForce(Vector3(3f,3f,0));
			}
		}
		else{
			bug = 0;
		}
	
	
		if (fireBallMode){
			if(collision.gameObject.tag == "Brick"){
			//rigidbody.velocity = v;
			collision.gameObject.GetComponent(BrickBasic).pow = 20;
			
			
			}
		}
		if ( collision.gameObject.name == "Player"){
			if(rigidbody.velocity.y < 15){
				_rigidbody.AddForce(Vector3(0,0,0));
			}
			var carpmaX : float = collision.contacts[0].point.x;
			var cubukX : float = collision.gameObject.transform.localPosition.x;
			var fark : float = carpmaX-cubukX;
			
			nota = fark;
			
			hiz = _rigidbody.velocity.x;
			
			
			
		}
		
		
		
		if(collision.gameObject.name == "Taban"){
			dead = true;
			_transform.position.z = -4;
			_rigidbody.useGravity = true;
			gameObject.collider.material = mat;
			var cloneBall : GameObject;
			cloneBall = gameObject;
			yield WaitForSeconds(2);
			Destroy(gameObject);
			fireBallOff();
			if(ballCount == 1){
			allDead=true;
			
			
			
			
		}}
		
		if(dead == false){
			
			if(collision.gameObject.name == "BrickRed" || collision.gameObject.name == "Player")
			audio.PlayOneShot(hittSound);
			else if(collision.gameObject.name == "BrickBlue" || collision.gameObject.name == "BrickGreen")
			audio.PlayOneShot(hitSound);
			else if(collision.gameObject.name == "BrickStone")
			audio.PlayOneShot(hitttSound);
		} 
		
		
	}
	
	
	function ballCountMet(){
	ballCount =0;
	for (var ball : GameObject in GameObject.FindGameObjectsWithTag("Ball")){
				ballCount = ballCount + 1 ;
			}
	}
	
	function fireBallOn(){
	fireBallMode = true;
	
	  for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
	  bricks.collider.isTrigger = true;
	  }
	  
	  
	  
	}
	function fireMatOn(){
		for (var ballss : GameObject in GameObject.FindGameObjectsWithTag("Ball")){
	  	ballss.renderer.material = fire;
	  	}
	}
	function fireBallOff(){
	
	fireBallMode = false;
		for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
	  bricks.collider.isTrigger = false;
	  }
	 
	  for (var ballss : GameObject in GameObject.FindGameObjectsWithTag("Ball")){
	  ballss.renderer.material = norm;
	  }
	}
	function velocityIncrease(){
	if(maxVelocity == 5 || maxVelocity == 3.5){
		maxVelocity+=1.5;
		}
	}
	function velocityDecrease(){
	if(maxVelocity == 6.5 || maxVelocity == 5){
		maxVelocity-=1.5;
		}
	}
	function whenDead(){
		ballCountMet();
			
			
			if(ballCount == 1){
			MainPorps.decreaseHealth();
			allDead=true;
			
			}
			
			
	}