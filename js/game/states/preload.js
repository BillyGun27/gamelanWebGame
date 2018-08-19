Scene.Preload = function () {};
//  The Google WebFont Loader will look for this object, so create it before loading the script.
WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    //active: function() { this.game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Revalia','Josefin Sans']
    }

};
Scene.Preload.prototype = {
    
    preload : function (){
        
        this.load.image('backBtn','assets/images/ui/back.png');

        this.load.image('demungIcon','assets/images/instrument/demung.png');
        this.load.image('saronIcon','assets/images/instrument/saron.png');

        this.load.image('board','assets/images/instrument/gamelan-board.png');
        this.load.image('plaq','assets/images/instrument/gamelan-plaq.png');

        for(var i=1; i<8 ; i++){
            this.game.load.audio('demung'+i , 'assets/audio/demung'+i+'.mp3');
            this.game.load.audio('saron'+i , 'assets/audio/saron'+i+'.mp3');
        }

        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        this.load.onLoadStart.add(this.loadStart, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
    },
    
    create : function(){
    },
    loadStart : function (){

        this.backMenu = this.game.add.sprite(this.game.world.centerX  , this.game.world.centerY ,'background');
        this.backMenu.anchor.setTo(0.5);
        //this.backMenu.scale.setTo(window.devicePixelRatio*1.5, window.devicePixelRatio*1.5);
        this.backMenu.width = this.game.width;
        this.backMenu.height =  this.game.height;

        

        this.splash = this.add.sprite(this.game.world.centerX , this.game.world.centerY , 'gatoel');
        this.splash.anchor.setTo(0.5);
        //this.splash.scale.setTo(window.devicePixelRatio/2, window.devicePixelRatio/2);

        var loadingText = 'Loading';
        this.loadingText = this.add.text(this.game.world.centerX, (this.game.world.centerY + this.splash.height / 2 + 70), loadingText);
        this.loadingText.anchor.setTo(0.5);
        this.loadingText.font = 'Revalia';
        this.loadingText.fontSize = window.devicePixelRatio*32;
        this.loadingText.fill = '#fff';
        this.loadingText.align = 'center';

    },
    loadComplete : function (){
        this.state.start('MainMenu');
    },

};