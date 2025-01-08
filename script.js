const words = document.getElementById("words");
const chars = document.getElementById("chars");
const textarea = document.getElementById("text");

textarea.addEventListener("input", function(ev) {
    localStorage.setItem("text", ev.target.value);
    update_counts(ev.target.value);
});

window.addEventListener("load", function(ev) {
    var text = localStorage.getItem("text");
    textarea.value = text;
    update_counts(text);
});

function update_counts(text) {
    chars.innerHTML = text.length;
    words.innerHTML = text.split(/\s/).filter(function(n) { return n != ''; }).length;
}

