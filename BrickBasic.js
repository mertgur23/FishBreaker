         
         var health : int = 1;
         var pow : int = 1;
         var noneMode : boolean = false;
         var matLeftTwoHealth : Material;
         var matLeftOneHealth : Material;
         var destroyAudio : AudioClip;
         var biggerBallBonus : GameObject;
         var biggerPlayerBonus : GameObject;
         var slowBallBonus : GameObject;
         var fireBallBonus : GameObject;
         var multiBallBonus : GameObject;
         
         var speedBallBonus : GameObject;
         var littlePlayerBonus : GameObject;
         var littleBallBonus : GameObject;
         var noneBallBonus : GameObject;
         var expo : ParticleSystem;
         
         var mainScript : MainPorps;
         
         var crashedBomb : boolean = false;
         
         var norm : Material ;
         var ice : Material;
         var parca : GameObject;
   
         
         function Start () {
             gameObject.transform.position.x = gameObject.transform.position.x * 0.6;
             gameObject.transform.position.y = gameObject.transform.position.y * 0.35 - 0.5;
             gameObject.transform.position.z = -5;
         }
         
         function OnCollisionEnter(collision : Collision){
             if ( collision.gameObject.tag == "Ball"){
                 if(!noneMode){
                 health = health -pow;
                 }
                 if (health == 2 ){
                 renderer.material = matLeftTwoHealth;
                 }
                 else if (health == 1 ){
                 renderer.material = matLeftOneHealth;
                 }
                 else if( health <= 0){
                 
                 
                 whenDead();
                 if(gameObject.name=="Dynamite"){
                 	collision.gameObject.audio.PlayOneShot(destroyAudio);
                 	Instantiate(expo,gameObject.transform.position,gameObject.transform.rotation);
                     //for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Bomb")){
                        // if((mutlakFloat(bricks.transform.parent.gameObject.transform.position.x-gameObject.transform.position.x)<=gameObject.transform.localScale.x*2)&&(mutlakFloat(bricks.transform.parent.gameObject.transform.position.y-gameObject.transform.position.y)<=gameObject.transform.localScale.y*2)){
                         
                        // crashedBomb = true;
                         
                         //if(bricks.name == "Dynamite"&& bricks.GetComponent(BrickBasic).crashedBomb == false){
                         //    bomb(bricks);
                        // }
                         //bricks.GetComponent(BrickBasic).whenDead();
                         
                             
                        // }
                    // }
                    var par : GameObject = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    /*par.rigidbody.AddForce(Vector3(300,0,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(-300,0,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(0,300,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(0,-300,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(300,-300,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(-300,-300,0));
                     par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(300,300,0));
                     par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(-300,300,0));
                    */
             }
                 randomBonus();
                 }
                 
                 
                 
                 
             }
         }
         function OnTriggerEnter(collider : Collider){
             if (collider.gameObject.tag == "Ball"){
             whenDead();
             if(gameObject.name=="Dynamite"){
             		collider.gameObject.audio.PlayOneShot(destroyAudio);
                 	Instantiate(expo,gameObject.transform.position,gameObject.transform.rotation);
                     var par : GameObject = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    /*par.rigidbody.AddForce(Vector3(300,0,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(-300,0,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(0,300,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(0,-300,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(300,-300,0));
                    par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(-300,-300,0));
                     par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(300,300,0));
                     par = Instantiate(parca,gameObject.transform.position, gameObject.transform.rotation);
                    par.rigidbody.AddForce(Vector3(-300,300,0));
                     */
                 }
             collider.gameObject.audio.PlayOneShot(destroyAudio);
             randomBonus();
             
             }
             else if (collider.gameObject.tag == "Bomb"){
             	whenDead();
             	Destroy(collider.gameObject);
             }
         
         }
             /////
             var bonus : GameObject;
             function biggerBall(){
                 bonus = Instantiate(biggerBallBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             function biggerPlayer(){
                 bonus = Instantiate(biggerPlayerBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             function slowBall(){
                 bonus = Instantiate(slowBallBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             function fireBall(){
                 bonus = Instantiate(fireBallBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             function multiBall(){
                 bonus = Instantiate(multiBallBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             /////
             function speedBall(){
                 bonus = Instantiate(speedBallBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             function noneBall(){
                 bonus = Instantiate(noneBallBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             function littleBall(){
                 bonus = Instantiate(littleBallBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             function littlePlayer(){
                 bonus = Instantiate(littlePlayerBonus,Vector3(transform.position.x,transform.position.y,transform.position.z-0.1),fireBallBonus.transform.rotation);
                 bonus.rigidbody.AddForce(Vector3(0,-100f,0));
             }
             
             
             
             function randomBonus(){
             var randomnumber=Random.Range(1,6);
             
                 if (randomnumber == 1)
                 {
                     randomnumber=Random.Range(1,10);
                     
                     if(randomnumber == 1){biggerPlayer();}
                     else if(randomnumber == 2){slowBall();}
                     else if(randomnumber == 3){fireBall();}
                     else if(randomnumber == 4){multiBall();}
                     else if(randomnumber == 5){biggerBall();}
                     else if(randomnumber == 6){speedBall();}
                     else if(randomnumber == 7){noneBall();}
                     else if(randomnumber == 8){littleBall();}
                     else if(randomnumber == 9){littlePlayer();}
                     
                 }
             }
             function noneModeOn(){
             noneMode = true;
             for(var balls : GameObject in GameObject.FindGameObjectsWithTag("Ball")){
             	if(balls.renderer.material != ice){
             		balls.renderer.material = ice;
             	}
             }
             
             }
             function noneModeOff(){
             noneMode = false;
             for(var balls : GameObject in GameObject.FindGameObjectsWithTag("Ball")){
             	if(balls.renderer.material != norm){
             		balls.renderer.material = norm;
             	}
             }
             }
             function point(a : int){
                 MainPorps.increaseScore(a);
             }
             function mutlakFloat(a : float) : float{
                 if(a<0){
                     a = -a;
                 }
                 return a;
             }
             function whenDead(){
             PlayerPrefs.SetInt("destroyedBlocks",PlayerPrefs.GetInt("destroyedBlocks")+1);
             Destroy(gameObject);
                 if(gameObject.name=="BrickRed"){
                     point(10 * PlayerPrefs.GetInt("multiple"));
                 }
                 else if(gameObject.name=="BrickBlue"){
                     point(20 * PlayerPrefs.GetInt("multiple"));
                 }
                 else if(gameObject.name=="BrickGreen"){
                     point(40 * PlayerPrefs.GetInt("multiple"));
                 }
             }
             function bomb(b : GameObject){
                 for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
                         if((mutlakFloat(bricks.transform.position.x-b.transform.position.x)<=1.5)&&(mutlakFloat(bricks.transform.position.y-b.transform.position.y)<=1.0)){
                             
                             b.GetComponent(BrickBasic).crashedBomb = true;
                             if(bricks.name == "Dynamite"&& bricks.GetComponent(BrickBasic).crashedBomb == false){
                             bomba(bricks);
                             }
                             bricks.GetComponent(BrickBasic).whenDead();
                             
                         }
                     }
             }
             function bomba(c : GameObject){
                 for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
                         if((mutlakFloat(bricks.transform.position.x-c.transform.position.x)<=1.5)&&(mutlakFloat(bricks.transform.position.y-c.transform.position.y)<=1.0)){
                         
                         c.GetComponent(BrickBasic).crashedBomb = true;
                         if(bricks.name == "Dynamite"&& bricks.GetComponent(BrickBasic).crashedBomb == false){
                             bombas(bricks);
                             }
                             bricks.GetComponent(BrickBasic).whenDead();
                             
                         }
                     }
             }
             function bombas(c : GameObject){
                 for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
                         if((mutlakFloat(bricks.transform.position.x-c.transform.position.x)<=1.5)&&(mutlakFloat(bricks.transform.position.y-c.transform.position.y)<=1.0)){
                         
                         c.GetComponent(BrickBasic).crashedBomb = true;
                         if(bricks.name == "Dynamite"&& bricks.GetComponent(BrickBasic).crashedBomb == false){
                             bombass(bricks);
                             }
                             bricks.GetComponent(BrickBasic).whenDead();
                             
                         }
                     }
             }
             function bombass(c : GameObject){
                 for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
                         if((mutlakFloat(bricks.transform.position.x-c.transform.position.x)<=1.5)&&(mutlakFloat(bricks.transform.position.y-c.transform.position.y)<=1.0)){
                         
                         c.GetComponent(BrickBasic).crashedBomb = true;
                         if(bricks.name == "Dynamite"&& bricks.GetComponent(BrickBasic).crashedBomb == false){
                             bombasss(bricks);
                             }
                             bricks.GetComponent(BrickBasic).whenDead();
                             
                         }
                     }
             }
             function bombasss(c : GameObject){
                 for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
                         if((mutlakFloat(bricks.transform.position.x-c.transform.position.x)<=1.5)&&(mutlakFloat(bricks.transform.position.y-c.transform.position.y)<=1.0)){
                         
                         c.GetComponent(BrickBasic).crashedBomb = true;
                         if(bricks.name == "Dynamite"&& bricks.GetComponent(BrickBasic).crashedBomb == false){
                             bombassss(bricks);
                             }
                             bricks.GetComponent(BrickBasic).whenDead();
                             
                         }
                     }
             }
             function bombassss(c : GameObject){
                 for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
                         if((mutlakFloat(bricks.transform.position.x-c.transform.position.x)<=1.5)&&(mutlakFloat(bricks.transform.position.y-c.transform.position.y)<=1.0)){
                         
                         c.GetComponent(BrickBasic).crashedBomb = true;
                         if(bricks.name == "Dynamite"&& bricks.GetComponent(BrickBasic).crashedBomb == false){
                             bombasa(bricks);
                             }
                             bricks.GetComponent(BrickBasic).whenDead();
                             
                         }
                     }
             }
             function bombasa(c : GameObject){
                 for (var bricks : GameObject in GameObject.FindGameObjectsWithTag("Brick")){
                         if((mutlakFloat(bricks.transform.position.x-c.transform.position.x)<=1.5)&&(mutlakFloat(bricks.transform.position.y-c.transform.position.y)<=1.0)){
                         
                             bricks.GetComponent(BrickBasic).whenDead();
                         }
                     }
             }
