Scene.Play = function () {};

Scene.Play.prototype = {
    
    create : function(){
        this.backMenu = this.game.add.tileSprite(0, 0, this.game.width, this.game.height,'backMenu');
        
        var playText = 'Click Play Button to Start';
        this.playText = this.add.text(this.game.world.centerX, (this.game.height - 40), playText);
        this.playText.anchor.setTo(0.5);
        this.playText.font = 'Revalia';
        this.playText.fontSize = window.devicePixelRatio*20;
        this.playText.fill = '#fff';
        this.playText.align = 'center';
    },
    
    update : function(){
        
    },

};