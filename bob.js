class Bob {
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
    }    
    
    display() { 
        ellipseMode(RADIUS);
        ellipse(300, 400, 25, 25);
        
    }
}