
// Unlocking Perks
function unlockPerk(id){
    // visual
    perk = document.getElementById(id);
    perk.classList.remove("locked");

    // function stuff


}


// setting progress bars

function setBar(id, val){
    bar = document.getElementById(id);
    bar.value = val.clamp(0, bar.max);
    label = document.getElementById(id+"-label");
    label.innerHTML =  bar.value + "/" + bar.max;

}
//testing



let test = setInterval(function() {
    
    setBar("mana", Math.round((Math.random()*100)-50));
    
  }, 1000);