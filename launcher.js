class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:5,
            stiffness:0.02
        }
        this.pointB=pointB
        this.launcher=Constraint.create(options)
        World.add(world,this.launcher)
    }
    fly(){
        this.launcher.bodyA=null
    }
    display(){
        if(this.launcher.bodyA){
            var p1=this.launcher.bodyA.position
            var p2=this.pointB
            line(p1.x,p1.y,p2.x,p2.y)
        }
    }
}