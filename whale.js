function Whale(){
    this.x = width/2;
    this.xdir = 0;

    this.show = function(){
        fill(255);
        rectMode(CENTER);
        rect(this.x, height-20,20,60);
        image(docker, this.x - 50,height-122,140,140);
    }
    this.move = function(dir){
        this.x += this.xdir*5;

        if(this.x>width){
            this.x = 0;
        }
        if(this.x<0){
            this.x = width;
        }
    }
    this.setDir = function(dir){
        this.xdir = dir;
    }
}

