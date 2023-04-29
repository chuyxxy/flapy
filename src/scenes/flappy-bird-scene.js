export default class FlappyBirdScene extends Phaser.Scene {
    constructor(sceneName, config){
        super(sceneName);
        this.config = config;
        this.Layer = {
            background: null,
            game: null,
            ui: null   
        }
    } 

    create() {
        this.Layer.background = this.add.layer();
        this.Layer.game = this.add.layer();
        this.Layer.ui = this.add.layer();

        var fondo=this.add.image(0,0,"sky").setOrigin(0.2,0.15);
        this.Layer.background.add(fondo);

    }

    showMenu(menu){
        let yPos = menu.firstItemPosition.y; 
        menu.items.forEach(item => {
            const textObject = this.add.text(menu.firstItemPosition.x, yPos, item.label, item.style)
            .setOrigin(menu.origin.x, menu.origin.y)
            .setInteractive(); 
            yPos += menu.spacing; 
            textObject.on("pointerup",  item.onClick, this); 
            textObject.on("pointerover", () => { item.onMouseEnter(textObject)}, this); 
            textObject.on("pointerout", () => {item.onMouseExit(textObject)}, this);
        });
    }
}