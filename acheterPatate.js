 import readlineSync from 'readline-sync';

export function acheterPatate(PrixPommeDeTerreAuKilo, argent){
        console.log(`Prix au kilo : ${PrixPommeDeTerreAuKilo} €`);
        const message = "Tu veux acheter combien de kilo pomme de terre ?";
        let messageCombienDePommeDeTerreVeuTTU = readlineSync.question(message);
        let messageCombienDePommeDeTerreVeuTTUParse = parseInt(messageCombienDePommeDeTerreVeuTTU);
        
        
        let prixTotal = messageCombienDePommeDeTerreVeuTTUParse * PrixPommeDeTerreAuKilo;
        if(argent >= prixTotal){
            console.log("Tu peux acheter", messageCombienDePommeDeTerreVeuTTUParse , " kg de pomme de terre");
            console.log("Le prix de ", messageCombienDePommeDeTerreVeuTTUParse, "kg de pomme de terre est de", prixTotal, "€");
            argent = argent - prixTotal;
            console.log("Il te reste",argent, "€");
            return {argent, KiloDePommeDeTerre: messageCombienDePommeDeTerreVeuTTUParse};
        }
        else{
            console.log("Tu ne peux pas acheter autant de pomme de terre");
            return {argent,KiloDePommeDeTerre : 0};
        }
    }