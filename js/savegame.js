
//data
var data;
var og_data = {
    autosave: true,
    stats: {
        stamina:{
            val: 10,
            max: 25,
            unl: false
        },
        mana:{
            val: 1,
            max: 20,
            unl: true
        },
        health:{
            val: 1,
            max: 20,
            unl: true
        }
    }

};

var autosavebox = document.getElementById("autosavebox");
var savebutton = document.getElementById("savebutton");

// save the game
function saveGame(d) {
    //data 
    
    data.autosave = autosavebox.checked;
    
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
    console.log("Savegame empty or corrupted. Clearing." + data);
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
    setBar(key, data.stats[key].val, data.stats[key].max);
}


//TODO
function toggleBar(id, visible = -1) {
    var bar = document.getElementById(id);
    if(visible = -1){
        
    }
    else {  

    }
}