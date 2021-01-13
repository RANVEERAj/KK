const Engine=Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;
function preload(){
imagew=loadImage("polygon.png")

}
function setup(){
    engine = Engine.create();
	world = engine.world;
    createCanvas(1100,750)
    ball=Bodies.rectangle(100,470,60,60)
    World.add(world,ball)

    ground1=new ground(760,430,290,10)
    ground2=new ground(400,650,270,10)

   // play1=new Player(100,470,60,60)
  Sling=new SlingShot(this.ball,{x:100,y:470})

    b1=new block(400,620,30,50)
    b2=new block(360,620,30,50)
    b3=new block(320,620,30,50)
    b4=new block(440,620,30,50)
    b5=new block(480,620,30,50)
    
  
    b6=new block(420,570,30,50)
    b7=new block(380,570,30,50)
    b8=new block(340,570,30,50)
    b9=new block(460,570,30,50)

    b10=new block(440,520,30,50)
    b11=new block(400,520,30,50)
    b12=new block(360,520,30,50)

    b13=new block(420,470,30,50)
    b14=new block(380,470,30,50)

    b15=new block(400,420,30,50)


    b16=new block(760,400,30,50)
    b17=new block(720,400,30,50)
    b18=new block(680,400,30,50)
    b19=new block(800,400,30,50)
    b20=new block(840,400,30,50)
    
  
    b21=new block(780,350,30,50)
    b22=new block(740,350,30,50)
    b23=new block(700,350,30,50)
    b24=new block(820,350,30,50)

    b25=new block(800,300,30,50)
    b26=new block(760,300,30,50)
    b27=new block(720,300,30,50)

    b28=new block(740,250,30,50)
    b29=new block(780,250,30,50)

    b30=new block(760,200,30,50)

}
function draw(){
  imageMode (CENTER)
    rectMode(CENTER);
    background("black");
   image(imagew,ball.position.x,ball.position.y,60,60)

    ground1.display();
    ground2.display();
    //play1.display();
    Sling.display();

    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()

    b6.display()
    b7.display()
    b8.display()
    b9.display()
    
    b10.display()
    b11.display()
    b12.display()

    b13.display()
    b14.display()

    b15.display()

    b16.display()
    b17.display()
    b18.display()
    b19.display()
    b20.display()

    b21.display()
    b22.display()
    b23.display()
    b24.display()

        
    b25.display()
    b26.display()
    b27.display()

        
    b28.display()
    b29.display()
    b30.display()

    drawSprites();
  
}
function mouseDragged()
{
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
   Sling.fly();
   console.log("isReleased")
}


function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(ball.body,{x:100,y:470});
    Sling.attacher(ball.body);
  }
   
}