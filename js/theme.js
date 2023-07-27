
var themebuttons = document.getElementsByClassName("theme-button");
var radios = document.getElementsByName('theme');
var cmain =  document.getElementById('cmain');
var csecondary =  document.getElementById('csecondary');
var caccent1 =  document.getElementById('caccent-1');
var caccent2 =  document.getElementById('caccent-2');
var cfont =  document.getElementById('cfont');

// add onclick event to all tabs
for (let i = 0; i < themebuttons.length; i++) {
    themebuttons[i].onclick = function(event) {
        reflectPreference();
    }
}

const getColorPreference = () => {
    if (localStorage.getItem('theme-preference'))
        return localStorage.getItem('theme-preference')
    else
        return "1"
}

for (var i = 0; i < radios.length; i++) {
    if (radios[i].value == getColorPreference()) {
        radios[i].checked = true;
        break;
    }
}


const reflectPreference = () => {
    var selectedValue;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }
    if(selectedValue != "custom"){
        document.documentElement.style.setProperty('--main', 'var(--theme'+selectedValue+'-main)');
        document.documentElement.style.setProperty('--secondary', 'var(--theme'+selectedValue+'-secondary)');
        document.documentElement.style.setProperty('--accent-1', 'var(--theme'+selectedValue+'-accent-1)');
        document.documentElement.style.setProperty('--accent-2', 'var(--theme'+selectedValue+'-accent-2)');

        document.documentElement.style.setProperty('--font-color', 'var(--theme'+selectedValue+'-font-color)');
    }
    else {
        var reg=/^#([0-9a-f]{3}){1,2}$/i; // regex check for hex code
        document.documentElement.style.setProperty('--main', reg.test(cmain.value) ? cmain.value : '#FEBBCC');
        document.documentElement.style.setProperty('--secondary', reg.test(csecondary.value) ? csecondary.value : '#FFCCCC');
        document.documentElement.style.setProperty('--accent-1', reg.test(caccent1.value) ? caccent1.value : '#FFDDCC');
        document.documentElement.style.setProperty('--accent-2', reg.test(caccent2.value) ? caccent2.value : '#FFEECC');
        document.documentElement.style.setProperty('--font-color', reg.test(cfont.value) ? cfont.value : '#000000');
     
    }
    localStorage.setItem('theme-preference', selectedValue);
}

function clickform(x) {
    switch (x) {
        case "inside":
            break;
        case "outside":
        case "change":
                reflectPreference();
            break;
        default:
            break;
    }
  }
reflectPreference();
