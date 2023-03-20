var tabs = document.getElementsByClassName("tab-content");

var elements = document.getElementsByClassName("tab-button");

// add onclick event to all tabs
for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function(event) {
        openTab(event, elements[i].id);
    }
}

// open tabs
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("shown");
        if(tabcontent[i].id == tabName+"-content"){
            tabcontent[i].classList.add("shown");
        }
    }

    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("tabactive");

    }

    document.getElementById(tabName).classList.add("tabactive");
}



