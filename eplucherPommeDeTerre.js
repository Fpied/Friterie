 import readlineSync from 'readline-sync';

export function eplucherPommeDeTerre(pommesDeTerre, pommesDeTerreEpluchees){
    const message = "Combien de pomme de terre veux tu éplucher ?";
    let messageCombienDePommeDeTerreVeuTTUEpplucher = readlineSync.question(message);
    let messageCombienDePommeDeTerreVeuTTUEpplucherParse = parseInt(messageCombienDePommeDeTerreVeuTTUEpplucher);
    let combienDeKiloDePommeDeTerreEpluche = 0;

    if(messageCombienDePommeDeTerreVeuTTUEpplucherParse <= pommesDeTerre){
        combienDeKiloDePommeDeTerreEpluche = messageCombienDePommeDeTerreVeuTTUEpplucherParse;
        console.log("tu viens d'éplucher", combienDeKiloDePommeDeTerreEpluche, " de pomme de terre");
    }
    else{
        console.log("Tu n'as pas assez de pomme de terre à éplucher");
    }
    return combienDeKiloDePommeDeTerreEpluche;
}