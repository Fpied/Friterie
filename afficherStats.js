export function afficherStats(ctx, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre){
    ctx.fillStyle = "white";
    ctx.font = `14px Arial`;
    ctx.fillText(`Argent : ${argent} €`, 75, 30);
    ctx.fillText(`barquette de frite : ${barquetteDeFrite} `, 100, 60);
    ctx.fillText(`pommes de terre epluchees : ${pommesDeTerreEpluchees} kg `, 135, 90);
    ctx.fillText(`Kilo de pomme de terre : ${kiloDePommeDeTerre}kg`, 130, 120);
    

}

