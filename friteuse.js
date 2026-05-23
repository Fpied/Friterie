 import readlineSync from 'readline-sync';

export function friteuse(fritePascuite){
    const message = `Tu as ${fritePascuite} kg de frites pas cuites. Combien veux-tu cuire ? `;
    let messageFrite = readlineSync.question(message);
    messageFrite = parseInt(messageFrite)
    let fritecuite = 0;

    if(messageFrite <= fritePascuite){
        fritecuite = messageFrite;

    } else {
        console.log("Vous n'avez pas assez de frite pas cuite");
    }

    return fritecuite;

}