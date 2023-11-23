let selectedCards = 0;

function moveCard(card) {
  if (selectedCards < 3) {
    selectedCards++;

    card.style.visibility = 'hidden'; // Cache l'élément sélectionné
    
    // Sélectionne l'élément de destination en fonction du nombre de cartes sélectionnées
    const destination = document.getElementById(`choisie${selectedCards}`);
    
    // Ajoute la carte à la destination (déplacez-la)
    destination.classList='carteDecore';
  }
}