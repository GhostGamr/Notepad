function changenote() {
    var z = "Start typing here...";
    // this.document.getElementById("note").innerHTML = z;
    this.document.getElementById("note").placeholder = z;
}

document.getElementById("note").placeholder = "Welcome to Notepad!\n\n Features: \n - Dark mode \n - Autosave notes \n \n CLICK HERE TO START";
