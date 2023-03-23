
//data
var data;
var og_data = {
    autosave: true,
    stats: {
        stamina:{
            val: 10,
            max: 25,
            unl: true
        },
        mana:{
            val: 1,
            max: 20,
            unl: false
        },
        health:{
            val: 1,
            max: 20,
            unl: false
        }
    }

};

var autosavebox = document.getElementById("autosavebox");
var savebutton = document.getElementById("savebutton");

// function to show and hide bars
function toggleBar(id, visible = -1) {
    var bar = document.getElementById(id);
    bar = bar.parentElement;
    if(visible === -1){
        switch (bar.style.display) {
            case "block":
            case "":
                bar.style.display = "none";
                break;
            case "inherit":
            default:
                bar.style.display = "block";

                break;
        }
    }
    else {  
        if (visible) {
            bar.style.display = "block";
        }
        else {
            bar.style.display = "none";
        }
    }
}

// save the game
function saveGame(d) {
    //data 
    
    d.autosave = autosavebox.checked;
    
    localStorage.setItem('savegame', JSON.stringify(d));
    console.log("Game saved to local storage.");
}

function clearGame() {
    localStorage.clear();
    saveGame(og_data);
}

// initial loading
if (localStorage.getItem('savegame') != null && localStorage.getItem('savegame') != "undefined") {
    //valid savegame
    data = JSON.parse(localStorage.getItem('savegame'));
    if(data === null){
        //load failed
        localStorage.clear();
        saveGame(og_data);
    }
    else {
        //load succeeded
        autosavebox.checked = data.autosave;
        console.log("Game loaded from local storage.");
    }
}
else {
    localStorage.clear();
    console.log("Savegame empty or corrupted. Clearing.");
    console.log(localStorage.getItem('savegame'));
    saveGame(og_data);
    console.log(localStorage.getItem('savegame'));
}

// autosave every 30 seconds
let autosave = setInterval(function () {
    if (autosavebox.checked) {
        saveGame(data);
    }
}, 30000);


//load and set bars
for (const [key, value] of Object.entries(data.stats)) {
    // show and hide things
    toggleBar(key, data.stats[key].unl);
    setBar(key, data.stats[key].val, data.stats[key].max);
}