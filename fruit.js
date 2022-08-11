img = ""; 
status = ""; 

function setup(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    canvas = createCanvas(640, 420); 
    canvas.center(); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}

function preload(){
    img = loadImage('MG_2084-scaled.jpg'); 
}

function modelLoaded(){
    console.log("Model Loaded!"); 
    status = true; 
    objectDetector.detect(img, gotResult); 
}

function gotResult(error, results){
    if (error){
        console.log(error); 
    }
    console.log(results); 
}

function draw(){
    image(img, 0, 0, 640, 420); 

    fill('#FFFF00'); 
    text("Lemons", 365, 75); 
    noFill(); 
    stroke('#FFFF00'); 
    rect(360, 55, 140, 200);

    fill('#466D1D'); 
    stroke('#466D1D');
    text("Kiwi", 270, 75); 
    noFill(); 
    rect(265, 60, 89, 150);

    fill('#D16002'); 
    stroke('#D16002');
    text("Orange", 180, 75); 
    noFill(); 
    rect(175, 60, 85, 120);
}