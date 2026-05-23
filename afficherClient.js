export function afficherClient(ctx, client){
    console.log(client);
    const img = new Image();
    img.src = client.sprite.face;
    img.onload = () => {
        ctx.drawImage(img, 500, 230, 100, 150);
    };
}