import { acheterPatate } from "./acheterPatate.js";
import { eplucherPommeDeTerre } from "./eplucherPommeDeTerre.js";
import { couteau } from "./couteau.js";
import { friteuse } from "./friteuse.js";
import { clients } from "./client.js";
import { prendreDecision } from "./decision.js";
import { vente } from "./vente.js";
import { passerClientSuivant } from "./passerClientSuivant.js";
import readlineSync from 'readline-sync';

let argent = 10;
let PrixPommeDeTerreAuKilo = 3;
let kiloDePommeDeTerre = 0;

const poidsBarquetteDeFrite = 1;

const PrixBarquetteDeFrite = 2;
let barquetteDeFrite = kiloDePommeDeTerre/ poidsBarquetteDeFrite;

let commandeServie = false;

let pommesDeTerreEpluchees = 0;

let fritePascuites = 0;

let frite = 0;
fritePascuites = 0;

let client = clients();

let nombreDeClients = Math.floor(Math.random() * 50) + 1;

let clientsServis = 0;
let barquettesVendues = 0;

while(nombreDeClients > 0){
    commandeServie = false;
    console.log("Tu as :")
    console.log(` ${argent} €`);
    console.log(`${barquetteDeFrite} barquette de frite`);
    console.log(`${kiloDePommeDeTerre} kg de pomme de terre`)
    console.log(`${fritePascuites} kg de frite pas cuite`);
    console.log(`${pommesDeTerreEpluchees} kg de pomme de terre épluché`);
    client = clients();
    nombreDeClients--;
    while(commandeServie === false){
        console.log(`${client.nom} voudrais ${client.commande} de barquette de frite`);
        let decision = prendreDecision();
        if(decision === 0){
            let friteFrie =friteuse(fritePascuites);
            frite = frite + friteFrie;
            fritePascuites = fritePascuites - friteFrie;
            barquetteDeFrite = frite / poidsBarquetteDeFrite;
            console.log("Tu as :")
            console.log(` ${argent} €`);
            console.log(`${barquetteDeFrite} barquette de frite`);
            console.log(`${kiloDePommeDeTerre} kg de pomme de terre`)
            console.log(`${fritePascuites} kg de frite pas cuite`);
            console.log(`${pommesDeTerreEpluchees} kg de pomme de terre épluché`);
        }
        if(decision === 1){
            let friteCoupe = couteau(pommesDeTerreEpluchees);
            fritePascuites = fritePascuites + friteCoupe;
            pommesDeTerreEpluchees = pommesDeTerreEpluchees - friteCoupe;
            console.log("Tu as :")
            console.log(` ${argent} €`);
            console.log(`${barquetteDeFrite} barquette de frite`);
            console.log(`${kiloDePommeDeTerre} kg de pomme de terre`)
            console.log(`${fritePascuites} kg de frite pas cuite`);
            console.log(`${pommesDeTerreEpluchees} kg de pomme de terre épluché`);
        }
        if(decision === 2){
            let eplucherPommeDeTerreNouvelle = eplucherPommeDeTerre(kiloDePommeDeTerre);
            pommesDeTerreEpluchees = pommesDeTerreEpluchees + eplucherPommeDeTerreNouvelle;
            kiloDePommeDeTerre = kiloDePommeDeTerre - eplucherPommeDeTerreNouvelle;
            console.log("Tu as :")
            console.log(` ${argent} €`);
            console.log(`${barquetteDeFrite} barquette de frite`);
            console.log(`${kiloDePommeDeTerre} kg de pomme de terre`)
            console.log(`${fritePascuites} kg de frite pas cuite`);
            console.log(`${pommesDeTerreEpluchees} kg de pomme de terre épluché`);
        }
        if(decision === 3){
            let acheterPommedeTerre = acheterPatate(PrixPommeDeTerreAuKilo, argent);
            kiloDePommeDeTerre = kiloDePommeDeTerre + acheterPommedeTerre.KiloDePommeDeTerre;
            argent = acheterPommedeTerre.argent;

            console.log("Tu as :")
            console.log(` ${argent} €`);
            console.log(`${barquetteDeFrite} barquette de frite`);
            console.log(`${kiloDePommeDeTerre} kg de pomme de terre`)
            console.log(`${fritePascuites} kg de frite pas cuite`);
            console.log(`${pommesDeTerreEpluchees} kg de pomme de terre épluché`);
            
        }
        if(decision === 4){
            let barquettesAvant = barquetteDeFrite;
            let venteBarquetteDeFrite = vente(argent, barquetteDeFrite, client, PrixBarquetteDeFrite);
            argent = venteBarquetteDeFrite.argent;
            barquetteDeFrite = venteBarquetteDeFrite.barquetteDeFrite;
            barquettesVendues += barquettesAvant - barquetteDeFrite;
            clientsServis++;
            commandeServie = true;

            console.log("Tu as :")
            console.log(` ${argent} €`);
            console.log(`${barquetteDeFrite} barquette de frite`);
            console.log(`${kiloDePommeDeTerre} kg de pomme de terre`)
            console.log(`${fritePascuites} kg de frite pas cuite`);
            console.log(`${pommesDeTerreEpluchees} kg de pomme de terre épluché`);
        }
        if(decision === 5){
            commandeServie = passerClientSuivant();
            commandeServie = false;
        }



    }

}
console.log("Vous avez gagné");

console.log(`Vous avez servi ${clientsServis} client(s)`);
console.log(`Vous avez vendu ${barquettesVendues} barquette(s) de frite`);
console.log(`Vous avez gagné ${argent} €`);




