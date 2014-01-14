#pragma strict
var sol : boolean;
var stop : int;

//---------------

private var _transform : Transform;

function Start () {
_transform = transform;
}

function Update () {
	
		if(sol){
		_transform.position.x -= Time.deltaTime; 
		}
		else{
		_transform.position.x += Time.deltaTime;
		}
		if(_transform.position.x < stop) {
			if(sol){
			_transform.position.x = 6;
			}
						
		}
		if(_transform.position.x > stop) {
			if(!sol){
				_transform.position.x = -6;
			}
		
		
	}

}
