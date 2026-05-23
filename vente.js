import { clients } from "./client.js";
import readlineSync from 'readline-sync';

export function vente(argent, barquetteDeFrite, client, PrixBarquetteDeFrite){
    barquetteDeFrite = barquetteDeFrite - client.commande;
    argent = argent + (client.commande * PrixBarquetteDeFrite);

    return {barquetteDeFrite, argent};

}