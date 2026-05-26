import { acheterPatate } from "./acheterPatate.js";
import { eplucherPommeDeTerre } from "./eplucherPommeDeTerre.js";
import { couteau } from "./couteau.js";
import { friteuse } from "./friteuse.js";
import { clients } from "./client.js";
import { vente } from "./vente.js";
import { passerClientSuivant } from "./passerClientSuivant.js";
import { afficherStats } from "./afficherStats.js";
import { afficherBoutons } from "./afficherBouton.js";
import { boutons } from "./afficherBouton.js";
import { boutonsClient } from "./afficherBouton.js";
import { render } from "./render.js";
import { afficherCommande } from "./afficherCommande.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

export const fond = new Image();
fond.src = 'asset/image/friterieinterieur.png';
let client = clients();
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


let nombreDeClients = Math.floor(Math.random() * 50) + 1;

let clientsServis = 0;
let barquettesVendues = 0;
fond.onload = () => {
    ctx.drawImage(fond, 0, 0, canvas.width, canvas.height);
    afficherStats(ctx, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre);
    afficherBoutons(ctx, canvas);
    render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
}

export function rafraichir(){
    render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
}

function getPos(event, canvas){
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height /rect.height;

    if(event.touches){
        // Evenement tactile
        return {
            x: (event.touches[0].clientX - rect.left) *  scaleX,
            y: (event.touches[0].clientY - rect.top) * scaleY
        };
    } else {
        // Evenement souris
        return {
            x: event.offsetX * scaleX,
            y: event.offsetY * scaleY
        };
    }
}




canvas.addEventListener('click', (event) => {
    const { x, y} = getPos(event, canvas);

    const largeur = 200;
    const espacement = (canvas.width - largeur * boutons.length) / (boutons.length +1);

    for(let index = 0; index < boutons.length; index++){
        const bx = espacement + index * (largeur + espacement);
        if(x >= bx && x <= bx + largeur && y >= 700 && y <= 750){
            console.log('cliqué sur', boutons[index].texte);
            if(boutons[index].texte === 'Acheter pomme de terre'){
                acheterPatate(ctx, canvas, PrixPommeDeTerreAuKilo, argent, function(resultat){
                kiloDePommeDeTerre += resultat.KiloDePommeDeTerre;
                argent = resultat.argent;
                render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
            });
            }
            if(boutons[index].texte === 'Eplucher'){
                eplucherPommeDeTerre(ctx, canvas, kiloDePommeDeTerre, function(resultat){
                pommesDeTerreEpluchees += resultat;
                kiloDePommeDeTerre -= resultat;
                render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
                });
                
            }
            if(boutons[index].texte === 'couper'){
                couteau(ctx, canvas, pommesDeTerreEpluchees, function(resultat){
                    fritePascuites += resultat;
                    pommesDeTerreEpluchees -= resultat;
                    render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
                });
            }
            if(boutons[index].texte === 'Frire'){
                friteuse(ctx, canvas, fritePascuites, function(resultat)
                {
                    frite += resultat;
                    fritePascuites -= resultat;
                    barquetteDeFrite = frite / poidsBarquetteDeFrite;
                    render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
               
                
                });
            }
        }
    }
    for(let index = 0; index < boutonsClient.length; index++){
        const bx = boutonsClient[index].x;
        const by = boutonsClient[index].y;
        if(x >= bx && x <= bx + largeur && y >= by && y <= by + 50){
            console.log('cliqué sur', boutonsClient[index].texte);
            if(boutonsClient[index].texte === 'Vendre'){
                let barquettesAvant = barquetteDeFrite;
                let venteBarquetteDeFrite = vente(argent, barquetteDeFrite, client, PrixBarquetteDeFrite);
                argent = venteBarquetteDeFrite.argent;
                barquetteDeFrite = venteBarquetteDeFrite.barquetteDeFrite;

                if(barquetteDeFrite < barquettesAvant){
                    barquettesVendues += barquettesAvant - barquetteDeFrite;
                    clientsServis++;
                    client = clients();

                }
                
                render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
            }
            if(boutonsClient[index].texte === 'Client suivant'){
                client = clients();
                render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
            }
            
        }
        
    }

});

canvas.addEventListener('touchstart', (event) =>{
    event.preventDefault();
    const {x, y} = getPos(event, canvas);

    const largeur = 200;
    const espacement = (canvas.width - largeur * boutons.length) / (boutons.length +1);

    for(let index = 0; index < boutons.length; index++){
        const bx = espacement + index * (largeur + espacement);
        if(x >= bx && x <= bx + largeur && y >= 700 && y <= 750){
            console.log('cliqué sur', boutons[index].texte);
            if(boutons[index].texte === 'Acheter pomme de terre'){
                acheterPatate(ctx, canvas, PrixPommeDeTerreAuKilo, argent, function(resultat){
                kiloDePommeDeTerre += resultat.KiloDePommeDeTerre;
                argent = resultat.argent;
                render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
            });
            }
            if(boutons[index].texte === 'Eplucher'){
                eplucherPommeDeTerre(ctx, canvas, kiloDePommeDeTerre, function(resultat){
                pommesDeTerreEpluchees += resultat;
                kiloDePommeDeTerre -= resultat;
                render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
                });
                
            }
            if(boutons[index].texte === 'couper'){
                couteau(ctx, canvas, pommesDeTerreEpluchees, function(resultat){
                    fritePascuites += resultat;
                    pommesDeTerreEpluchees -= resultat;
                    render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
                });
            }
            if(boutons[index].texte === 'Frire'){
                friteuse(ctx, canvas, fritePascuites, function(resultat)
                {
                    frite += resultat;
                    fritePascuites -= resultat;
                    barquetteDeFrite = frite / poidsBarquetteDeFrite;
                    render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
               
                
                });
            }
        }
    }
    for(let index = 0; index < boutonsClient.length; index++){
        const bx = boutonsClient[index].x;
        const by = boutonsClient[index].y;
        if(x >= bx && x <= bx + largeur && y >= by && y <= by + 50){
            console.log('cliqué sur', boutonsClient[index].texte);
            if(boutonsClient[index].texte === 'Vendre'){
                let barquettesAvant = barquetteDeFrite;
                let venteBarquetteDeFrite = vente(argent, barquetteDeFrite, client, PrixBarquetteDeFrite);
                argent = venteBarquetteDeFrite.argent;
                barquetteDeFrite = venteBarquetteDeFrite.barquetteDeFrite;

                if(barquetteDeFrite < barquettesAvant){
                    barquettesVendues += barquettesAvant - barquetteDeFrite;
                    clientsServis++;
                    client = clients();

                }
                
                render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
            }
            if(boutonsClient[index].texte === 'Client suivant'){
                client = clients();
                render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client);
            }
            
        }
    }


}, {passive: false});

  
        

            
        
        



  
console.log("Vous avez gagné");

console.log(`Vous avez servi ${clientsServis} client(s)`);
console.log(`Vous avez vendu ${barquettesVendues} barquette(s) de frite`);
console.log(`Vous avez gagné ${argent} €`);




