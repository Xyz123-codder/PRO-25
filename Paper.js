class Paper{

    constructor(x,y,radius){

        var options={
            isStatic:true,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.image = loadImage("paper.png");
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circles (this.x, this.y,(this.r-20/2),options);
        World.add(world, this.body);
      }


      display(){
          var paperposition = this.body.position;
          push()
          translate(paperposition.x,paperposition.y);
          fill(255,0,255);
          image(0,0,this.image);
          imageMode(CENTER);
          pop()
      }





























}