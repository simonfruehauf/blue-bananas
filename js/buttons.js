var buttons = document.getElementsByClassName("clickbutton");

// add onclick event to all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(event) {
        buttonClicked(event, buttons[i].id);
    }
}

// Button Click logic
function buttonClicked(evt, buttonid) {
    var b = document.getElementById(buttonid);
    //action
    if(b.classList.contains("action")){

    }

    //task

    //TODO should check list? of tasks, remove first, add current
    else if(b.classList.contains("task")){
        
        for (let i = 0; i < buttons.length; i++) {
           if ( buttons[i].classList.contains("task")) {
            buttons[i].classList.remove("currenttask");
           }
        }
        document.getElementById(buttonid).classList.add("currenttask");
    }
    else if (b.id = "savebutton"){
        save(data);
    }
}



