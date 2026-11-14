let wlcmPg = document.querySelector(".welcome");
let start = document.getElementById("wlcm-btn");
let namePg = document.querySelector(".name-lst");
let spinPg = document.querySelector(".spinner");
let done = document.getElementById("done");
let back = document.getElementById("back");
let ok = document.getElementById("ok");
let okBox = document.querySelector(".okBox")
let spinBtn = document.getElementById("spin");


wlcmPg.style.display="block";
namePg.style.display= "none";
spinPg.style.display="none";
start.addEventListener('click',function showNamePg() {
    wlcmPg.style.display ="none";
    namePg.style.display ="block";
    spinPg.style.display ="none";
});

done.addEventListener('click',function showSpinner(){
    wlcmPg.style.display = "none";
    namePg.style.display = "none";
    spinPg.style.display = "block";
    okBox.style.display = "none";
});

back.addEventListener('click', function backToNamePg(){
    namePg.style.display = "block";
    spinPg.style.display = "none";
    
}); 

ok.addEventListener('click',function OkInSpinner() {
    okBox.style.display = "none";
    spinPg.style.display = "block";
    
});

spinBtn.addEventListener('click',function SpinBtn(){
    okBox.style.display = "block";
});