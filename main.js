function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('videojuego');
	video=createCapture(VIDEO);
	video.size(800,400)
	video.parent("webcam");

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose', gettheposes);
}
function modelLoaded(){
	console.log("Model Loaded");
}
function gettheposes(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






