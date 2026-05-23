import readlineSync from 'readline-sync';
import { vente } from './vente.js';
import { passerClientSuivant } from './passerClientSuivant.js';

export function prendreDecision(){
    const options = ['friteuse', 'couteau', "eplucherPommeDeTerre", "acheterPatate", "vente", "passer au client suivant"];

    const decision = readlineSync.keyInSelect(options, "Veuillez donnez votre décision? ");

    switch (decision){
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            console.log('choix invalide');
    }

    return decision;

}
