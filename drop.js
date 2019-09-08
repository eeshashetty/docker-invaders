function Drop(x,y){
    this.x = x;
    this.y = y;
    this.r = 8
    this.toDelete = false;

    this.show = function(){
        noStroke();
        fill(173,216,230);
        ellipse(this.x, this.y, this.r*2, this.r*2 );
    }

    this.evaporate = function(){
         this.toDelete = true;  
    }
    this.hits = function(cloud){
        var d = dist(this.x,this.y, cloud.x,cloud.y);
        if(d<this.r + cloud.r){
            cloud.count++;
            if(cloud.count == 10){
                cloud.burst  = false;
                score *= 2;
            }
            return true;
        } else {
            return false;
        }
    }

    this.move = function(){
        this.y = this.y -5  ;
    }

}