class load extends Phaser.Scene {
    constructor ()
    {
        super("Menu");
    } 
    

    preload (){   
    this.cursors = this.input.keyboard.createCursorKeys()
    this.boutonAttaque = this.input.keyboard.addKey('Z')
    this.load.image('tombe', 'assets/tombe.png')
    this.load.spritesheet('dude', 'assets/test.png', { frameWidth: 19, frameHeight: 37 });
        
    } 
    
    create(){
        
        
        this.scene.start("Scenes");
    }
}