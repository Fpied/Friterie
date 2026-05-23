import {demanderValeur} from "./saisie.js";

export function acheterPatate(ctx, canvas , PrixPommeDeTerreAuKilo, argent, callback){
        console.log(`Prix au kilo : ${PrixPommeDeTerreAuKilo} €`);
        const message = "Tu veux acheter combien de kilo de pomme de terre ?";
        demanderValeur(ctx, canvas, message, (messageCombienDePommeDeTerreVeuTTU) =>{
            let messageCombienDePommeDeTerreVeuTTUParse = parseInt(messageCombienDePommeDeTerreVeuTTU);
            
            
            let prixTotal = messageCombienDePommeDeTerreVeuTTUParse * PrixPommeDeTerreAuKilo;
            if(argent >= prixTotal){
                console.log("Tu peux acheter", messageCombienDePommeDeTerreVeuTTUParse , " kg de pomme de terre");
                console.log("Le prix de ", messageCombienDePommeDeTerreVeuTTUParse, "kg de pomme de terre est de", prixTotal, "€");
                argent = argent - prixTotal;
                console.log("Il te reste",argent, "€");
                callback ({argent, KiloDePommeDeTerre: messageCombienDePommeDeTerreVeuTTUParse});
            }
            else{
                console.log("Tu ne peux pas acheter autant de pomme de terre");
                callback ({argent,KiloDePommeDeTerre : 0});
            }

        })
        
    }