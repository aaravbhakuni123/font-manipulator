noseX=0;
noseY = 0;
difference = 0;
rightWristX=0;
leftWristX=0;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas= createCanvas(550,500);
canvas.position(560,80);
posenet= ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses);
}
function modelloaded(){
console.log("Posenet model is initialised");
}





function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX = "+noseX);
console.log("noseY = "+noseY);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;

difference=floor(leftWristX-rightWristX);
console.log("leftwristx = "+leftWristX+"rightWristX = "+rightWristX+"difference = "+difference);
}
}

function draw(){
background("grey");
document.getElementById("font_size").innerHTML="font size of the text  will be "+difference+ " pixel";
textSize(difference);
fill("red");
text("I am aarav bhakuni",50,400);

}

