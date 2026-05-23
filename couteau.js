import {demanderValeur} from "./saisie.js";

export function couteau(ctx, canvas, combienDeKiloDePommeDeTerreEpluche, callback){
    const message = "Combien de kilo de pomme de terre eplucher veux tu transformer en frite pas cuite ?";
    demanderValeur(ctx, canvas, message, (messageFritePasCuite) =>{
        messageFritePasCuite = parseInt(messageFritePasCuite);
    let fritePascuite = 0;

    if(messageFritePasCuite <= combienDeKiloDePommeDeTerreEpluche){
        fritePascuite = messageFritePasCuite;
        console.log(fritePascuite);

    }
    else{
        console.log("Vous n'avez pas assez de pomme de terre épluché");
    }


     

    callback(fritePascuite);

    })
    
}