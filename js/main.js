
// Unlocking Perks
function unlockPerk(id) {
    // visual
    perk = document.getElementById(id);
    perk.classList.remove("locked");

    // function stuff

}

// setting progress bars
function setBar(id, val, max = -1) {
    var bar = document.getElementById(id);

    if(bar != null){
        if (max !== -1){
            bar.max = max;
        }
        bar.value = val.clamp(0, bar.max);
        label = document.getElementById(id + "-label");
        label.innerHTML = bar.value + "/" + bar.max;
    }
}

// stats
function setStat(stat, val) {
    data.stats[stat].val = val.clamp(0, data.stats[stat].max);
    setBar(stat, data.stats[stat].val, data.stats[stat].max);
}

function setStatMax(stat, val) {
    data.stats[stat].max = val;
    setBar(stat, data.stats[stat].val, data.stats[stat].max);
}

function unlockStat(stat, b = true) {
    data.stats[stat].unl = b;
}
//testing
let test = setInterval(function () {
    setStatMax("mana", Math.round((Math.random() * 20)+20));
}, 1000);
let test2 = setInterval(function () {
    setStat("mana", Math.round((Math.random() * data.stats["mana"].max)));
    setStat("stamina", Math.round((Math.random() * data.stats["stamina"].max)));
    setStat("health", Math.round((Math.random() * data.stats["health"].max)));
}, 1000);
//testing end
