// boiler plate
document.getElementById("note").placeholder = "Welcome to Notepad!\n \n Features: \n - Dark mode \n - Autosave notes \n \n CLICK HERE TO START";

var textarea = document.getElementById("note");
textarea.addEventListener('click', () => {
    var z = "Start typing here...";
    document.getElementById("note").placeholder = z;
})

// theme toggler

var checkbox = document.getElementById("checkbox");

if (window.matchMedia("(prefers-color-scheme: dark)")) {
    dark();
    checkbox.checked = true;
    theme = "dark";
    localStorage.setItem("theme", theme);
}
else{
    light();
    theme = "light";
    localStorage.setItem("theme", theme);
}

checkbox.addEventListener('change', () => {
    var text = document.getElementById('note');
    var nav = document.getElementById('nav');
    var navlink1 = document.getElementById('navlink1');
    var navlink2 = document.getElementById('navlink2');
    var navlink3 = document.getElementById('navlink3');

    document.body.classList.toggle('dark');
    note.classList.toggle('dark');
    nav.classList.toggle('dark');
    navlink1.classList.toggle('dark');
    navlink2.classList.toggle('dark');
    navlink3.classList.toggle('dark');
});


function dark() {
    var text = document.getElementById('note');
    var nav = document.getElementById('nav');
    var navlink1 = document.getElementById('navlink1');
    var navlink2 = document.getElementById('navlink2');
    var navlink3 = document.getElementById('navlink3');

    document.body.classList.toggle('dark');
    note.classList.toggle('dark');
    nav.classList.toggle('dark');
    navlink1.classList.toggle('dark');
    navlink2.classList.toggle('dark');
    navlink3.classList.toggle('dark');
}

function light() {
    var text = document.getElementById('note');
    var nav = document.getElementById('nav');
    var navlink1 = document.getElementById('navlink1');
    var navlink2 = document.getElementById('navlink2');
    var navlink3 = document.getElementById('navlink3');

    document.body.classList.toggle('light');
    note.classList.toggle('light');
    nav.classList.toggle('light');
    navlink1.classList.toggle('light');
    navlink2.classList.toggle('light');
    navlink3.classList.toggle('light');
}

// copy to clipboard
function copy() {
    var copyText = document.getElementById("note");
    if (copyText.value == "") {
        alert("There is Nothing to Copy");
    }
    else {
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text to clipboard!");
    }
}

// auto save notes
setInterval(() => {
    localStorage.setItem("note", document.getElementById("note").value);
}, 1000);

if (localStorage.getItem("note") != "") {
    document.getElementById("note").value = localStorage.getItem("note");
}
else{
    document.getElementById("note").value = "";
}

//download

function download(filename, textinput) {
    var text = document.getElementById("note").value;
    var filename = "note.txt";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    // document.body.removeChild(element);
}

var download = document.getElementById("navlink1");

download.addEventListener('click',() => {
    var text = document.getElementById("note").value;
    var filename = "note.txt";
    download(filename, text);
});
=
