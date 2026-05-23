 import readlineSync from 'readline-sync';

export function couteau(combienDeKiloDePommeDeTerreEpluche){

    const message = "Combien de kilo de pomme de terre eplucher veux tu transformer en frite pas cuite ?";
    let messageFritePasCuite = readlineSync.question(message);
    messageFritePasCuite = parseInt(messageFritePasCuite);
    let fritePascuite = 0;

    if(messageFritePasCuite <= combienDeKiloDePommeDeTerreEpluche){
        fritePascuite = messageFritePasCuite;
        console.log(fritePascuite);

    }
    else{
        console.log("Vous n'avez pas assez de pomme de terre épluché");
    }


     

    return fritePascuite;
}