Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version:', ml5.version);

lassifier = ml5.imagClassifier('https://teachablemachine.withgoogle.com/models/6-vW4eE-6/model.json',modelLoaded);

 function modelLoaded() {
     console.log('model Loaded!');
 }

 function speak(){
     var synth = window.speechSynthesis;
     speak_data_1="The first prediction is " + perdiction_1;
     speak_data_2="And the second prediction is " + perdiction_2;
     var utterThis = new SpeachSynthesisUtterance(speak_data_1+speak_data_2);
     synth.speak(utterThis);
 }