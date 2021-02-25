var dog,sadDog,happyDog;
var Milk;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  Milk=loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400);
  
  saddog=createSprite(800,200,150,150);
  saddog.addImage(sadDog);
  saddog.scale=0.15;

  happydog=createSprite(800,200,150,150);
  happydog.addImage(happyDog);
  happydog.scale=0.15;

  Milk=createSprite(500,200,100,100);
  Milk=addImage(Milk);
  Milk.scale=0.5


}

function draw() {
  background(46,139,87);
  drawSprites();
  saddog.display();
  happydog.display();
  Milk.display()

}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodOdj.updateFoodStock(foodObj.getFoodStock()-1);
  datadase.ref('/').updata({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })







}

//function to add food in stock
