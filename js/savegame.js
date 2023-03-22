
//data
var og_data = {
    autosave: true
};
var data;
var autosavebox = document.getElementById("autosavebox");
var savebutton = document.getElementById("savebutton");
// save the game
function save(d) {
    //data 
    {
        data.autosave = autosavebox.checked;
    }


    localStorage.setItem('savegame', JSON.stringify(d));
    console.log("Game to local storage.");
}

// initial loading
if (localStorage.getItem('savegame') != null && localStorage.getItem('savegame') != "undefined") {
    //valid savegame
    data = JSON.parse(localStorage.getItem('savegame'));
    if(data === null){
        //load failed
        localStorage.clear();
        save(data);
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
    save(og_data);
    console.log(localStorage.getItem('savegame'));

}

// autosave every 60 seconds
let autosave = setInterval(function () {
    if (autosavebox.checked) {
        save(data);
    }
}, 60000);



