img = ""; 
status = ""; 

function setup(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    canvas = createCanvas(640, 420); 
    canvas.center(); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}

function preload(){
    img = loadImage('abc.jpg'); 
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

    fill('#4B371C'); 
    text("Bed", 45, 270); 
    noFill(); 
    stroke('#4B371C'); 
    rect(30, 250, 560, 170);

    fill('#9A7B47');  
    text("Plant", 515, 170); 
    noFill(); 
    stroke('#9A7B47');  
    rect(505, 150, 130, 250); 

    fill('#80471C');  
    text("Storage", 8, 230); 
    noFill(); 
    stroke('#80471C');  
    rect(5, 210, 130, 180); 

    fill('#795C34');  
    text("Flowers", 8, 150); 
    noFill(); 
    stroke('#795C34');  
    rect(5, 135, 85, 90); 

    fill('#DC9456');  
    text("Hamper", 352, 345); 
    noFill(); 
    stroke('#DC9456');  
    rect(345, 330, 115, 90); 
}