// script.js

let selectedCards = 0;

function moveCard(card) {
    if (selectedCards < 3) {
        selectedCards++;

        const newCard = card.cloneNode(true);
        newCard.style.transform = 'rotateY(180deg)';
        newCard.style.position = 'absolute';
        newCard.style.transition = 'transform 0.6s ease';
        newCard.classList.add('newCard');
      
        const destination = document.getElementById(`choisie${selectedCards}`);
        destination.appendChild(newCard);

        card.style.opacity = '0';
        setTimeout(() => {
            card.style.visibility = 'hidden';
        }, 600);
    }

    if (selectedCards === 3) {
        toggle();
    }
}

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popUp = document.getElementById('popUp');
    popUp.classList.toggle('active');

    if (popUp.classList.contains('active')) {
        // Afficher les significations des cartes sélectionnées
     const chosenCards = document.querySelectorAll('.newCard');
     const divInterpretation= document.querySelector('.interpretationCartes');
    
     chosenCards.forEach((card, index) => {
        const frontImg = card.querySelector('.front');
        const cardName = frontImg.id; // Récupérer le nom de la carte
        const cardSignification = frontImg.dataset.signification; // Récupérer la signification de la carte
 
         console.log("Nom de la carte : ", cardName);
         console.log("Signification de la carte : ", cardSignification);
         const paragraph=document.createElement('div');
         paragraph.innerHTML = `<strong>Carte ${index + 1} (${cardName}):</strong> ${cardSignification}`;
         divInterpretation.appendChild(paragraph);
         paragraph.classList='carteUser';
         paragraph.id=cardName;
         paragraph.dataset.signification=cardSignification;
     });
    }
     else{
        const divInterpretation= document.querySelector('.interpretationCartes');
        divInterpretation.innerHTML='';
     }// Appel de la fonction pour afficher les infos des cartes choisies
    

    

     
 }


// Fonction pour recommencer
function restart() {
    location.reload();
}


