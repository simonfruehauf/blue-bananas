var buttons = document.getElementsByClassName("clickbutton");

// add onclick event to all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (event) {
        buttonClicked(event, buttons[i].id);
    }
}
// Button Click logic
function buttonClicked(evt, buttonid) {
    var b = document.getElementById(buttonid);
    //action
    //TODO somehow get list of possible actions and get code from there
    if (b.classList.contains("action")) {
        if (b.id == "action1"){
            toggleBar("juice");
        }
    }

    //task

    //TODO should check list? of tasks, remove first, add current
    if (b.classList.contains("task")) {

        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains("task")) {
                buttons[i].classList.remove("currenttask");
            }
        }
        document.getElementById(buttonid).classList.add("currenttask");
    }
    if (b.id == "savebutton") {
        saveGame(data);
    }
    if (b.id == "clearbutton") {
        if (confirm("Are yu sure you want to completely reset your game?")) {
            clearGame();
            location.reload(true);
        }
    }
}



