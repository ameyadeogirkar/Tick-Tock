var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke("red");
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke("yellow");
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke("cyan");
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke("red");
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke("yellow");
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke("cyan");
    arc(0,0,260,260,0,hrAngle);
}