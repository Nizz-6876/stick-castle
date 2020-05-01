class Brick {
    constructor(x, y, width, height,colour) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.colour=colour;
      this.strokeColour="yellow";

      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke(this.strokeColour);
      fill(this.colour);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }