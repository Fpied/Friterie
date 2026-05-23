export function afficherCommande(ctx, client){
    ctx.fillStyle = '#27F5F2';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    const largeur = ctx.measureText(`${client.nom} veut ${client.commande} barquette(s)`).width;
    ctx.fillRect(600, 60, largeur + 50, 30 );
    ctx.fillStyle = "black";
    ctx.fillText(`${client.nom} veut ${client.commande} barquette(s)`, 750, 80);
}