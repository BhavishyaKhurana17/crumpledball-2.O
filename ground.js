class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            'restitution': 0,
            'friction': 0,
            'density': 1
        }
        this.body = Bodies.rectangle(600,670,1200,15, options)
        this.width = 1200;
        this.height = 15;

        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);

        fill("yellow");


        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }


};