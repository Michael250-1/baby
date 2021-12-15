status="";
img="";
objects=[];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded(){
    console.log("modelloaded");
    status=true;
    objectdetector.detect(img,gotresult);
}
function gotresult(error,results){
if (error){
    console.log(error);
}
console.log(results);
objects=results;
}
function preload(){
    img=loadImage("dog_cat.jpg");
}
function draw(){
    image(img,0,0,640,420);
   
    if (status != ""){
        document.getElementById("status").innerHTML="status : Object Detected";
        for(i=0;i<objects.length;i++){
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+ " "+ percent+ "%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    
   
  
    
    }
}