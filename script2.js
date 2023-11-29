

window.addEventListener('DOMContentLoaded', (event) => {
    const fronts = document.querySelectorAll('.front');
    
    var cartes = [
        {
            nom: 'Le Soleil',
            image: './images/sun.jpg',
            signification: 'joie, bonheur, succès'
        },
        {
            nom: "L'Amoureux",
            image: './images/lover.jpg',
            signification: 'amour, relation, choix'
        },
        {
            nom: 'La Mort',
            image: './images/mort.jpg',
            signification: 'transformation, changement, renouveau'
        }
    ,
    {
        nom: "L'étoile",
        image: './images/star.jpg',
        signification: 'transformation, changement, renouveau'
    },
    {
        nom: "La roue de fortune",
        image: './images/rouefortune.jpg',
        signification: 'transformation, changement, renouveau'
    },
    {
        nom: "Le diable",
        image: './images/diable.jpg',
        signification: 'transformation, changement, renouveau'
    },
    {
        nom: "Le pendu",
        image: './images/pendu.jpg',
        signification: 'transformation, changement, renouveau'
    },
    {
        nom: 'Le Soleil',
        image: './images/sun.jpg',
        signification: 'joie, bonheur, succès'
    },
    {
        nom: "L'Amoureux",
        image: './images/lover.jpg',
        signification: 'amour, relation, choix'
    },
    {
        nom: 'La Mort',
        image: './images/mort.jpg',
        signification: 'transformation, changement, renouveau'
    }
,
{
    nom: "L'étoile",
    image: './images/star.jpg',
    signification: 'transformation, changement, renouveau'
},
{
    nom: "La roue de fortune",
    image: './images/rouefortune.jpg',
    signification: 'transformation, changement, renouveau'
},
{
    nom: "Le diable",
    image: './images/diable.jpg',
    signification: 'transformation, changement, renouveau'
},
{
    nom: "Le pendu",
    image: './images/pendu.jpg',
    signification: 'transformation, changement, renouveau'
},
{
    nom: 'Le Soleil',
    image: './images/sun.jpg',
    signification: 'joie, bonheur, succès'
},
{
    nom: "L'Amoureux",
    image: './images/lover.jpg',
    signification: 'amour, relation, choix'
},
{
    nom: 'La Mort',
    image: './images/mort.jpg',
    signification: 'transformation, changement, renouveau'
}
,
{
nom: "L'étoile",
image: './images/star.jpg',
signification: 'transformation, changement, renouveau'
},
{
nom: "La roue de fortune",
image: './images/rouefortune.jpg',
signification: 'transformation, changement, renouveau'
},
{
nom: "Le diable",
image: './images/diable.jpg',
signification: 'transformation, changement, renouveau'
},
{
nom: "Le pendu",
image: './images/pendu.jpg',
signification: 'transformation, changement, renouveau'
},
{
nom: "Le pendu",
image: './images/pendu.jpg',
signification: 'transformation, changement, renouveau'
}
    ];


    /*pur chauque carte(front), je vais rajouter aléatoirement(=mathRandom)
    une des images de mon tableaux cartes :) 
    */
    
    fronts.forEach((front, index) => {
        const randomIndex = Math.floor(Math.random() * cartes.length);
        const randomCard = cartes.splice(randomIndex, 1)[0]; // Retire l'image sélectionnée du tableau pour éviter les doublons
        front.src = randomCard.image;
        front.id =randomCard.nom; // Attribution d'un ID unique à chaque carte choisie
        front.dataset.signification = randomCard.signification; // Attribution de la signification à chaque carte choisie
    });
    


});