export function clients(){
    const prenom = ["François", "Marie", "Jean", "Sophie", "Pierre", "Lucie", "Thomas", "Camille", "Nicolas", "Léa", "Antoine", "Chloé", "Julien", "Emma", "Maxime", "Sarah", "Alexandre", "Manon", "Romain", "Julie"]
    const nom = prenom[Math.floor(Math.random() * prenom.length)];
    const budget = Math.floor(Math.random() * 10)+1;
    const sprites = [
    { face: 'asset/image/sprite/spriteChildrenFace.png', gauche: 'asset/image/sprite/spriteChildrenGauche.png', droite: 'asset/image/sprite/spriteChildrenGauche2.png' },
    { face: 'asset/image/sprite/spriteCyclisteFace.png', gauche: 'asset/image/sprite/spriteCyclisteFaceGauche.png', droite: 'asset/image/sprite/spriteCyclisteFaceDroit.png' },
    { face: 'asset/image/sprite/spriteFemmeFace.png', gauche: 'asset/image/sprite/spriteFemmeGauche.png', droite: 'asset/image/sprite/spriteFemmeDroite.png' },
    { face: 'asset/image/sprite/femmeRobeFace.png', gauche: 'asset/image/sprite/femmeRobeFace1.png', droite: 'asset/image/sprite/femmeRobeFace2.png' },
    { face: 'asset/image/sprite/SpriteHommeface.png', gauche: 'asset/image/sprite/SpriteHommegauche.png', droite: 'asset/image/sprite/SpriteHommeGauche2.png' },
];
    const sprite = sprites[Math.floor(Math.random() * sprites.length)];
    
    const patience = Math.floor(Math.random() *10)+1;
    const plainteClient = ["C'est froid !",
    "J'attends depuis trop longtemps !",
    "C'est trop salé !",
    "Ce n'est pas ce que j'ai commandé !",
    "C'est trop cher !",
    "Les frites sont molles !",
    "Il n'y en a pas assez !",
    "C'est brûlé !",
    "Le service est nul !",
    "Je ne reviendrai plus jamais ici !"]
    const plainte = plainteClient[Math.floor(Math.random()* plainteClient.length)];
    const commande = Math.floor(Math.random() * 3)+1;


    const client = {
        nom : nom,
        budget: budget,
        commande: commande,
        patience: patience,
        plainte: plainte,
        sprite: sprite,
    };
    return client;

}