// add tooltips
fetch('data/tooltips.json')
    .then(response => response.json())
    .then(data => {
        const elements = document.querySelectorAll(".hastooltip");
        elements.forEach(element => {
            var child = document.createElement('div');
            element.appendChild(child);
            child.outerHTML = data[element.id];
            child.classList.add("tooltip");
        });
    });



