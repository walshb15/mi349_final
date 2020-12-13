function changeLanguage() {
    let langIndictor = document.getElementById("languageIndicator");
    let langSelector = document.getElementById("languageSelect");
    langIndictor.innerText = "Currently Selected: " + langSelector.value;
    if (langSelector.value == "Spanish") {
        document.getElementById("spanishSection").style.display = "flex";
        document.getElementById("italianSection").style.display = "none";
        document.getElementById("frenchSection").style.display = "none";
    }
    else if (langSelector.value == "Italian") {
        document.getElementById("italianSection").style.display = "flex";
        document.getElementById("spanishSection").style.display = "none";
        document.getElementById("frenchSection").style.display = "none";
    }
    else if (langSelector.value == "French") {
        document.getElementById("frenchSection").style.display = "flex";
        document.getElementById("spanishSection").style.display = "none";
        document.getElementById("italianSection").style.display = "none";
    }
}