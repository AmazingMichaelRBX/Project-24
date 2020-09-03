class dustbin {
constructor(x,y,width,height){
    var options ={
        isStatic:true
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options)
}
display(){
    var dustbinpos = this.body.position
    rectMode(CENTER)
    fill("purple")
    rect(dustbinpos.x,dustbinpos.y,this.width,this.height)
    
}
}