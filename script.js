let wlcmPg = document.querySelector(welcome);
let start = document.getElementById(wlcm-btn);
let namePg = document.querySelector(name-lst);
let spinPg = document.querySelector(spinner);


wlcmPg.style.display="block";
namePg.style.display= "none";
spinPg.style.display="none";
start.AddEventListener('click'(function showNamePg() {
    wlcmPg.style.display="none";
    namePg.style.display="block";
    spinPg.style.display="none";
}));