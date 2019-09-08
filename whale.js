function Whale(){
    this.x = width/2;
    this.xdir = 0;

    this.show = function(){
        fill(255);
        rectMode(CENTER);
        rect(this.x, height-20,20,20);
        image(docker, this.x - 37,height-68,80,80);
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

