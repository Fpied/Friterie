import {demanderValeur} from "./saisie.js";

export function friteuse(ctx, canvas, fritePascuite, callback){
    const message = `Tu as ${fritePascuite} kg de frites pas cuites. Combien veux-tu cuire ? `;
    demanderValeur(ctx, canvas, message, (messageFrite) =>
        {
        messageFrite = parseInt(messageFrite)
        let fritecuite = 0;

        if(messageFrite <= fritePascuite){
            fritecuite = messageFrite;

        } else {
            console.log("Vous n'avez pas assez de frite pas cuite");
        }

        callback(fritecuite);

        })

    
    
}