
import { render } from "./render.js";
import { fond, rafraichir } from "./script.js";

export function demanderValeur( ctx, canvas, message, callback){
    const bx = canvas.width / 2 - 400;
    const by = canvas.height / 2 - 75;
    const rect = canvas.getBoundingClientRect();
    const echelle = rect.width / 1200; // 1200 = largeur originale du canvas
    
    ctx.fillStyle = '#4444cc';
    ctx.beginPath();
    ctx.roundRect(bx, by, 800, 150, 20);
    ctx.fill();
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(message, canvas.width / 2, by + 30);
    
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.left = (rect.left + rect.width / 2) + 'px';
    div.style.top = (rect.top + rect.height / 2) + 'px';
    div.style.transform = 'translate(-50%, -50%)';
    div.style.display = 'flex';
    div.style.gap = '10px';


    const input = document.createElement('input');
    input.type = 'number';
    input.style.fontSize = (12, 20 * echelle) + 'px';
    input.style.padding = (8 * echelle) + 'px';
    input.style.borderRadius = '8px';
    input.style.width = Math.max(80, 150 * echelle) + 'px';

    const btn = document.createElement('button');
    btn.textContent = 'Valider';
    btn.style.fontSize = (12, 20 * echelle) + 'px';
    btn.style.padding = (8 * echelle) + 'px ' + (16 * echelle) + 'px';
    btn.style.borderRadius = '8px';
    btn.style.backgroundColor = '#00aaff';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';

    const btnFermer = document.createElement('button');
    btnFermer.textContent = 'X';
    btnFermer.style.fontSize = (10, 16 * echelle) + 'px';
    btnFermer.style.padding = (8 * echelle) + 'px';
    btnFermer.style.borderRadius = '8px';
    btnFermer.style.backgroundColor = 'red';
    btnFermer.style.color = 'white';
    btnFermer.style.border = 'none';
    btnFermer.style.cursor = 'pointer';

    btnFermer.addEventListener('click', function(){
        div.remove();
        rafraichir();
    });

    

    div.appendChild(input);
    div.appendChild(btn);
    div.appendChild(btnFermer);
    document.body.appendChild(div);
    input.focus();

    function valider(){
        const valeur = parseInt(input.value);
        div.remove();
        callback(valeur);
    }

    btn.addEventListener('click', valider);
    input.addEventListener('keydown', function(event){
        if(event.key === 'Enter') valider();
    });
}