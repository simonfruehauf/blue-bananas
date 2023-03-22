
var themebuttons = document.getElementsByClassName("theme-button");
var radios = document.getElementsByName('theme');

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
    
    document.documentElement.style.setProperty('--main', 'var(--theme'+selectedValue+'-main)');
    document.documentElement.style.setProperty('--secondary', 'var(--theme'+selectedValue+'-secondary)');
    document.documentElement.style.setProperty('--accent-1', 'var(--theme'+selectedValue+'-accent-1)');
    document.documentElement.style.setProperty('--accent-2', 'var(--theme'+selectedValue+'-accent-2)');

    document.documentElement.style.setProperty('--font-color', 'var(--theme'+selectedValue+'-font-color)');

    localStorage.setItem('theme-preference', selectedValue);
}


reflectPreference();
