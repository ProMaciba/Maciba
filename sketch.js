function setup() {
    createCanvas(650, 650);
      background("red");
  }
  
  function draw() {
  
  
    fill("green");
    //console.log(mouseIsPressed);
    if (mouseIsPressed) {
       rect(mouseX, mouseY, 15, 10); 
    }
  }
  