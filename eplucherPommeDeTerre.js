import {demanderValeur} from "./saisie.js";

export function eplucherPommeDeTerre(ctx, canvas ,pommesDeTerre, callback){
    const message = "Combien de pomme de terre veux tu éplucher ?";
    demanderValeur(ctx, canvas, message, (messageCombienDePommeDeTerreVeuTTUEpplucher) =>{
        let messageCombienDePommeDeTerreVeuTTUEpplucherParse = parseInt(messageCombienDePommeDeTerreVeuTTUEpplucher);
        let combienDeKiloDePommeDeTerreEpluche = 0;

        if(messageCombienDePommeDeTerreVeuTTUEpplucherParse <= pommesDeTerre){
            combienDeKiloDePommeDeTerreEpluche = messageCombienDePommeDeTerreVeuTTUEpplucherParse;
            console.log("tu viens d'éplucher", combienDeKiloDePommeDeTerreEpluche, " de pomme de terre");
        }
        else{
            console.log("Tu n'as pas assez de pomme de terre à éplucher");
        }
    callback (combienDeKiloDePommeDeTerreEpluche);
    
        
    });
    
    
}