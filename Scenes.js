class zone1 extends Phaser.Scene {
    constructor() {
        super('Scenes')
    }
    init(data){
		this.life = data.health
        this.attack = data.attack
	}

function preload ()
{
    this.cursors = this.input.keyboard.createCursorKeys()
    this.boutonAttaque = this.input.keyboard.addKey('Z')
    this.load.tilemapTiledJSON("map", 'tf_darkdimension_sheet.png');
    this.load.image('tombe', 'assets/tombe.png')
    this.load.tilemapTiledJSON("map", 'assets/maps/zone1.json');
    this.load.image('Chevlier', 'assets/chevalier.png')
    this.load.spritesheet('hero', 'assets/test.png', { frameWidth: 19, frameHeight: 37 });
    this.load.spritesheet('hero', 'assets/herosattaque.png', { frameWidth: 29, frameHeight: 37 });
    this.load.spritesheet('hero', 'assets/herosbouclier.png', { frameWidth: 24, frameHeight: 37 });
}
function create ()
{
    this.invincible = false;
    this.setarme == 1
    
    this.player.setSize(19, 37);
    this.player.body.setOffset(36,[72]);
    
    cameras = this.cameras.main.setSize(1960, 1080);
    this.cameras.main.centerOn(0, 0);
    this.cameras.main.setBounds(0,0,2430,1200);
    
    this.physics.add.overlap(this.chevalier, this.playerHitBox, this.DegatJoueur, null, this);
    this.physics.add.overlap(this.chevalier, this.attaque, this.Degatchevalier, null, this);
    
    //  A simple background for our game
    this.add.image(400, 400, 'montagne');
    
    this.chevalier = this.physics.add.sprite(600,410, 'chevalier').setCollideWorldBounds(true);
    this.chevalier = this.physics.add.sprite(1800,350, 'chevalier').setCollideWorldBounds(true);

        this.anims.create({
            key: 'droite',
            frames: this.anims.generateFrameNumbers('hero', { start: 5, end: 7 }),
            frameRate: 12,
        });
        
        this.anims.create({
            key: 'gauche',
            frames: this.anims.generateFrameNumbers('hero', { start: 1, end: 3 }),
            frameRate: 12,
        });
        
        this.anims.create({
            key: 'keep',
            frames: [ { key: 'hero', frame: 4. } ],
        });
        
        
}
    
    function toucheYeti(player, yeti)
    {
        if(degat == true){
            timerdegat = timerdegat + 1
            if(timerdegat >= temps){
                degat = false
                timerdegat = 0
            }
        }
    }
    function toucheTropher(player, star)
    {
        victoire = true;
        return;
    }
    
function update ()
{
    let pad = Phaser.Input.Gamepad.Gamepad;

        if(this.input.gamepad.total === 0){
            return;
        }
        
        this.pad = this.input.gamepad.getPad(0)
        this.xAxis = this.pad ? this.pad.axes[0].getValue() : 0;
        this.yAxis = this.pad ? this.pad.axes[1].getValue() : 0;
        
        this.droit = this.cursors.right.isDown || this.xAxis > 0;
        this.gauche = this.cursors.left.isDown || this.xAxis < 0;
        this.haut = this.cursors.up.isDown || this.yAxis < 0;
        this.bas = this.cursors.down.isDown || this.yAxis > 0;
        this.space = this.cursors.space.isDown || this.pad.B ;
        
        this.inv_1 = this.One.isDown || this.pad.X;
      
        
    //--- Deplacement
      
        
        if(this.droit && !this.gauche){
            this.directionDroit = true
            this.lastDirection = 1
            this.player.setVelocityX(this.vitesseDeDeplacement);
            this.player.anims.play('deplacementDroit'+this.setarme, true);
        }
         else if(this.gauche && !this.droit){
             this.directionDroit = false
             this.lastDirection = 2
             this.player.setVelocityX(-this.vitesseDeDeplacement);
             this.player.anims.play('deplacementGauche'+this.setarme, true);
        }
        else {
            this.player.setVelocityX(0);
            if (this.directionDroit && !this.haut && !this.bas){
                this.player.anims.play('deplacementkeepDroit'+this.setarme);
            }
            else if (!this.directionDroit && !this.haut && !this.bas){
                this.player.anims.play('deplacementkeepGauche'+this.setarme);
            }
        }


        if(this.haut && !this.bas){
            this.player.setVelocityY(-this.vitesseDeDeplacement);
            this.lastDirection = 3
            if (this.directionDroit == true){
                this.player.anims.play('deplacementDroit'+this.setarme, true);
            }
            else{
                this.player.anims.play('deplacementGauche'+this.setarme, true);
            }
        }
        else if(this.bas && !this.haut){
            this.player.setVelocityY(this.vitesseDeDeplacement);
            this.lastDirection = 4
            if (this.directionDroit == true){
                this.player.anims.play('deplacementDroit'+this.setarme, true);
            }
            else{
                this.player.anims.play('deplacementGauche'+this.setarme, true);
            }
        }
        else {
            this.player.setVelocityY(0);
        }
    
    if (this.life == 3){
			this.health1 = this.add.image(32,70,'tombe').setScrollFactor(0).setDepth(3).setScale(1.7);
			this.health2 = this.add.image(64,70,'tombe').setScrollFactor(0).setDepth(3).setScale(1.7);
			this.health3 = this.add.image(96,70,'tombe').setScrollFactor(0).setDepth(3).setScale(1.7);
		}

		else if (this.life == 2){
			this.health1 = this.add.image(32,70,'tombe').setScrollFactor(0).setDepth(3).setScale(1.7);
			this.health2 = this.add.image(64,70,'tombe').setScrollFactor(0).setDepth(3).setScale(1.7);
		}
		else if (this.life == 1){
			this.health1 = this.add.image(32,70,'tombe').setScrollFactor(0).setDepth(3).setScale(1.7);
		}
    else
    {
        controleText.visible = true;
        inter1.visible = true;
        this.health1 = this.add.image(32,70,'tombe').setScrollFactor(0).setDepth(3).setScale(1.7);
        gameOver = true;
        player.setVelocityX(0);
        player.setAccelerationX(0);
        return controleText;
        return inter1;
    } 
            
    this.cameras.main.startFollow(player,false,0.05,0.05,0,0);
    if (victoire == true)
    {
        controleText1.visible = true;
        inter1.visible = true;
        player.setVelocityX(0);
        player.setAccelerationX(0);
        return controleText;
        return inter1;
        return;
    }
    if (gameOver == true)
    {
        return;
    }
   
    
    }
    
    DegatJoueur (chevalier, playerHitBox){
        
        if (this.invincible == false){
            this.life = -1
            this.invincible = true
        }
    }
     DegatChevalier (attaque, poule_1){
        if (this.setarme == 1){
            if (this.space == true){
                this.coeur.x = this.chevalier.x
                this.coeur.y = this.chevalier.y
                this.chevalier.disableBody(true,true);
            } 
        }   
    }
}
   
    