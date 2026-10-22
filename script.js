let wlcmPg = document.querySelector(".welcome");
let start = document.getElementById("wlcm-btn");
let namePg = document.querySelector(".name-lst");
let spinPg = document.querySelector("spinner");
let done = document.getElementByIdById("done");
let back = document.getElementById("back");

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
});

back.addEventListener('click', function backToNamePg(){
    namePg.style.display = "block";
}); 