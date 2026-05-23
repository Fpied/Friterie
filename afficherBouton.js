export const boutons = [
    { texte: 'Acheter pomme de terre', x: 50},
    { texte: 'Eplucher', x: 370},
    { texte: 'couper', x: 690},
    { texte: 'Frire', x: 1010},
]
export const boutonsClient = [
    
    { texte: 'Vendre', couleur: '#00ff00', y: 489, x: 209},
    { texte: 'Client suivant', couleur: '#ff0000', y: 505, x:743},

]

export function afficherBoutons(ctx, canvas){
    

    for(let index = 0; index < boutons.length; index++){
        
        const largeur = 200;
        const espacement = (canvas.width - largeur * boutons.length) / (boutons.length + 1);
        const x = espacement + index * (largeur + espacement);

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, 700, largeur, 50);        
        ctx.fillStyle = '#000000';
        ctx.font = '18px Arial';
        ctx.textAlign = "center";
        ctx.fillText(boutons[index].texte, x + largeur / 2,  732);
    }

    for(let index = 0; index < boutonsClient.length; index++){
        
        const largeur = 200;
        const espacement = (canvas.width - largeur * boutonsClient.length) / (boutonsClient.length + 1);
        const x = espacement + index * (largeur + espacement);

        ctx.fillStyle = boutonsClient[index].couleur;
        ctx.fillRect(x, boutonsClient[index].y, largeur, 50);
        ctx.fillStyle = '#000000';
        ctx.font = '18px Arial';
        ctx.textAlign = "center";
        ctx.fillText(boutonsClient[index].texte, x + largeur / 2, boutonsClient[index].y + 32);
    }

    

}



