class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage= loadImage("sprites/smoke.png");
    this.trajectory= [ ];  
  }

  display() {
    if (this.body.velocity.x > 5 && this.body.position.x > 200 ){
    var pos= [this.body.position.x , this.body.position.y];
    this.trajectory.push(pos);
    }
    //console.log(this.body.position.x); 
    //console.log(this.body.position.y);
    super.display();
    console.log(this.body.velocity.x);
    for (var i= 0 ; i< this.trajectory.length ; i++ )
    {
    image(this.smokeimage , this.trajectory[i][0] , this.trajectory[i][1] );
    }
  }
}
