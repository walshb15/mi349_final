let spanishWords = {
    "Pollo": "Chicken",
    "Año": "Year",
    "Hombre": "Man",
    "Vida": "Life",
    "Casa": "House",
    "Coche": "Car",
    "Sol": "Sun",
    "Sierra": "Mountain",
    "Tarde": "Afternoon",
    "Amigo": "Friend"
}

let italianWords = {
    "Donna": "Woman",
    "Mela": "Apple",
    "Scarpe": "Shoes",
    "Uomo": "Man",
    "Libro": "Book",
    "Giornale": "Newspaper",
    "Mare": "Sea",
    "Arancia": "Orange",
    "Banca": "Bank",
    "Fratello": "Brother"
}

let frenchWords = {
    "Recette": "Recipe",
    "Chapeau": "Hat",
    "Beau": "Beautiful",
    "Abeille": "Bee",
    "Mère": "Mother",
    "Père": "Father",
    "Homme": "Man",
    "Femme": "Woman",
    "Semaine": "Week",
    "Matin": "Morning"
}

function changeLanguage() {
    let langIndictor = document.getElementById("languageIndicator");
    let langSelector = document.getElementById("languageSelect");
    langIndictor.innerText = "Currently Selected: " + langSelector.value;
    //Get the div that is supposed to hold each vocab card
    let langSection = document.getElementById("langSection");
    //Array to hold the randomly chosen words from your desired language
    let langKeys = [];
    //Clear the language section of everything
    while (langSection.firstChild) {
        langSection.removeChild(langSection.firstChild);
    }
    if (langSelector.value == "Spanish") {
        //Get the keys from the Spanish dictionary
        langKeys = Object.keys(spanishWords);
    }
    else if (langSelector.value == "Italian") {
        //Get the keys from the Italian dictionary
        langKeys = Object.keys(italianWords);
    }
    else if (langSelector.value == "French") {
        //Get the keys from the French dictionary
        langKeys = Object.keys(frenchWords);
    }
    //Chop down the words chosen from the dictionary at random until you only have 3 left
    while (langKeys.length > 3) {
        let delIndex = Math.floor(Math.random() * langKeys.length);
        if (delIndex > -1) {
            langKeys.splice(delIndex, 1);
        }
    }
    //Dynamically create cards to display each chosen word
    for (let i = 0; i < langKeys.length; ++i) {
        let newCard = document.createElement('div');
        //String to store the english translation
        let engTranslation = "";
        //Set the translation accordingly
        if (langSelector.value == "Spanish") {
            engTranslation = spanishWords[langKeys[i]]
        }
        else if (langSelector.value == "Italian") {
            engTranslation = italianWords[langKeys[i]]
        }
        else if (langSelector.value == "French") {
            engTranslation = frenchWords[langKeys[i]]
        }
        //Set the card to a appropriate CSS class
        newCard.className = "card";
        //Create the markup
        newCard.innerHTML = `<div class="centeredStuff">
                                <h1>${langKeys[i]} in English is: <em>${engTranslation}</em></h1>
                            </div>
                            <div class="cardOverlay">
                                <div class="centeredStuff">
                                    <h1>${langKeys[i]}</h1>
                                </div>
                            </div>`
        //Actually add the card HTML element to the document
        langSection.appendChild(newCard);
    }
}