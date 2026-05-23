import { clients } from "./client.js";

export function vente(argent, barquetteDeFrite, client, PrixBarquetteDeFrite){
    barquetteDeFrite = barquetteDeFrite - client.commande;
    argent = argent + (client.commande * PrixBarquetteDeFrite);

    return {barquetteDeFrite, argent};

}