var tabs = document.getElementsByClassName("tab-content");

var tabbuttons = document.getElementsByClassName("tab-button");

// add onclick event to all tabs
for (let i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].onclick = function(event) {
        openTab(event, tabbuttons[i].id);
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



const box = document.getElementById('customthemebox');

function handleRadioClick() {
  if (document.getElementById('customthemeradio').checked) {
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
}

const radioButtons = document.querySelectorAll('input[name="theme"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});