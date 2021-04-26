var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyimg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	//load animation for fairy here
	fairyimg = loadImage("images/fairyImage1.png")
}

function setup() {
	createCanvas(800, 750);
	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,482,20,20);
	fairy.addImage(fairyimg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 460 && starBody.position.y > 460){
  Matter.Body.setStatic(starBody,true)
  }
  

  drawSprites();

} 

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x -50
	}
	if(keyCode === RIGHT_ARROW){
	 fairy.x = fairy.x +50
	}
	if(fairy.x<0){
		fairy.x=300
	  }
}
