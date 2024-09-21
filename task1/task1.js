
let countDownDate = new Date("Oct 15, 2024 15:37:25").getTime();


let x = setInterval(function() {

 
  let now = new Date().getTime();
    

  let distance = countDownDate - now;
    

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds ;

    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


// herosection
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}



// specification
function setSpecification(s1,s2){
  
  document.getElementById("firstr").innerHTML=s1[0];
  document.getElementById("firstc").innerHTML=s2[0];
  document.getElementById("secr").innerHTML=s1[1];
  document.getElementById("secc").innerHTML=s2[1];
  document.getElementById("thirdr").innerHTML=s1[2];
  document.getElementById("thirdc").innerHTML=s2[2];
  document.getElementById("fourr").innerHTML=s1[3];
  document.getElementById("fourc").innerHTML=s2[3];
  document.getElementById("fiver").innerHTML=s1[4];
  document.getElementById("fivec").innerHTML=s2[4];
  document.getElementById("sixr").innerHTML=s1[5];
  document.getElementById("sixc").innerHTML=s2[5];
      
}

let tophigh1=["Brand","Operating System","RAM Memory","CPU Model","Memory Storage","Screen Size"];
let tophighlights=["Samsung","Android 14","12 GB","Snapdragon","256 GB","17.25 Centimeters"];

function tophigh(){
  document.getElementById("th").style.backgroundColor="rgb(0,113,227,1)";
  document.getElementById("os").style.backgroundColor="white";
  document.getElementById("ba").style.backgroundColor="white";
  document.getElementById("dis").style.backgroundColor="white";
  document.getElementById("mac").style.backgroundColor="white";
  setSpecification(tophigh1,tophighlights);
};

let os=["Operating System","Processor Name","Cellular Technology","CPU Model","GPS"," "];
let osp=["Android 14","Qualcomm","5G","Snapdragon ","True"," "];
function osandp(){
  document.getElementById("th").style.backgroundColor="white";
  document.getElementById("os").style.backgroundColor="rgb(0,113,227,1)";
  document.getElementById("ba").style.backgroundColor="white";
  document.getElementById("dis").style.backgroundColor="white";
  document.getElementById("mac").style.backgroundColor="white";

  setSpecification(os,osp);
};

let bac=["Power(mAH)","Composition","Charging Type","Camera Description","Front Camera","Camera Features"];
let bacs=["5000mAH","Lithium Ion","USB Type C","Rear, Front","12 megapixels","Ar zone, Bixby, Vison, Dual Recording"];

function battery(){
  document.getElementById("th").style.backgroundColor="white";
  document.getElementById("os").style.backgroundColor="white";
  document.getElementById("ba").style.backgroundColor="rgb(0,113,227,1)";
  document.getElementById("dis").style.backgroundColor="white";
  document.getElementById("mac").style.backgroundColor="white";
  setSpecification(bac,bacs);
}

let disp=["Size","Type","Resolution","Refresh Rate","Human Interface  Input"," "];
let disps=["17.25 centimeters","AMOLED","3120 x 1440 pixels","120 hertz","Touchscreen with Stylus Support"," "];
function display(){
  document.getElementById("th").style.backgroundColor="white";
  document.getElementById("os").style.backgroundColor="white";
  document.getElementById("ba").style.backgroundColor="white";
  document.getElementById("dis").style.backgroundColor="rgb(0,113,227,1)";
  document.getElementById("mac").style.backgroundColor="white";
  setSpecification(disp,disps);
}

let mac=["Inbuilt Memory","Expandable Memory", "SIM type", "Connectivity","Wireless network technology","Network Service Provider"];
let macs=["256 GB","yes","Dual-SIM/Nano","Bluetooth, NFC, USB, Wi-Fi","LTE, GSM,Wi-Fi", "Unlocked for All Carriers"];
function mandc(){
  document.getElementById("th").style.backgroundColor="white";
  document.getElementById("os").style.backgroundColor="white";
  document.getElementById("ba").style.backgroundColor="white";
  document.getElementById("dis").style.backgroundColor="white";
  document.getElementById("mac").style.backgroundColor="rgb(0,113,227,1)";
  setSpecification(mac,macs);

}
