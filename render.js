import { afficherBoutons } from "./afficherBouton.js";
import { afficherStats } from "./afficherStats.js";
import { afficherClient } from "./afficherClient.js";
import { afficherCommande } from "./afficherCommande.js";
import { clients } from "./client.js";

export function render(ctx, canvas, fond, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre, client){
    ctx.drawImage(fond, 0, 0, canvas.width, canvas.height);
    afficherClient(ctx, client);
    afficherCommande(ctx, client)
    afficherStats(ctx, argent, barquetteDeFrite, pommesDeTerreEpluchees, kiloDePommeDeTerre);
    afficherBoutons(ctx, canvas);
}