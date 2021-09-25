noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 450);

    canvas = createCanvas(500, 450);
    canvas.position(560, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Has Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - difference / 2;
        noseY = results[0].pose.nose.y - difference / 2;
        console.log("nose x is" + noseX + "and nose y is" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left is" + leftWristX + "and right is" + rightWristX + "and diff is" + difference);
        //Left and right is left wrist and right wrist
    }
}

function draw(){
    background("lightgreen");
    textSize(difference);
    text('Advaith', 50, 400);
    document.getElementById("ss").innerHTML = "Width And Height of the name will be " + difference;
}