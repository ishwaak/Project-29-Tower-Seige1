class Block{
    constructor(x, y, width, height, angle) {

      var options = {
        restitution : 0.5,
        friction : 0.6,
        isStatic : false,
        }
           
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.Visiblity = 255;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display() {
        var pos = this.body.position;
        push();
        if (this.body.speed < 11) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 1;
            tint(255, this.visibility);
            pop();
        }
    }
}