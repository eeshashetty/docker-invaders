function Cloud(x,y,count,burst){
    this.x = x*2;
    this.y = y;
    this.r = 40;
    this.xdir = 1;
    this.count = count;
    this.burst = burst;

    this.shiftDown = function(){
        this.xdir *= -1;
        this.y += this.r;
    }
    this.move = function(){
        this.x = this.x + this.xdir*2;
    }
    this.grow = function(){
        this.r +=2;
    }
    this.show = function(){
        if(this.burst){
            noStroke();
            fill(255,255,255,250);
            ellipse(this.x, this.y,this.r*2, this.r*2);
            ellipse(this.x + 30, this.y + 20, this.r, this.r);
            ellipse(this.x + 30, this.y + 10, this.r*1.2, this.r*1.2);
            ellipse(this.x - 30, this.y - 20, this.r, this.r);
            ellipse(this.x + 20, this.y - 30, this.r/2, this.r/2);
            ellipse(this.x - 30, this.y + 15, this.r*1.2, this.r*1.2);
        }
    }
}