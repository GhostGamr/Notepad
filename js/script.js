// boiler plate
function changenote() {
    var z = "Start typing here...";
    this.document.getElementById("note").placeholder = z;
}

document.getElementById("note").placeholder = "Welcome to Notepad!\n \n Features: \n - Dark mode \n - Autosave notes \n \n CLICK HERE TO START";


// theme toggler
function change() {
    var checkbox = document.getElementById('checkbox');
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
