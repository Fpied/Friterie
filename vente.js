import { clients } from "./client.js";

export function vente(argent, barquetteDeFrite, client, PrixBarquetteDeFrite){
    if(barquetteDeFrite < client.commande){
        console.log("Pas assez de barquettes");
        return { barquetteDeFrite, argent};
    }
    barquetteDeFrite = barquetteDeFrite - client.commande;
    argent = argent + (client.commande * PrixBarquetteDeFrite);

    return {barquetteDeFrite, argent};

}