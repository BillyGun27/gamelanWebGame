Scene.Demung = function () {
    this.btnDemung = [] ; 
};

var sound = [] ; 

Scene.Demung.prototype = {
    
    create : function(){
        
        this.backMenu = this.game.add.sprite(this.game.world.centerX  , this.game.world.centerY ,'background');
        this.backMenu.anchor.setTo(0.5);
        //this.backMenu.scale.setTo(window.devicePixelRatio*1.5, window.devicePixelRatio*1.5);
        this.backMenu.width = this.game.width;
        this.backMenu.height =  this.game.height;

        this.backBtn = game.add.button( 120 , 70 , 'backBtn' ,  this.GoMainMenu , this );
        this.backBtn.anchor.setTo(0.5);
        this.backBtn.scale.setTo(window.devicePixelRatio * ScalePercentWidth , window.devicePixelRatio * ScalePercentHeight); 
        this.backBtn.input.useHandCursor = false;

        this.board = this.game.add.sprite(this.game.world.centerX  , this.game.world.centerY ,'board');
        this.board.anchor.setTo(0.5);
        this.board.scale.setTo(window.devicePixelRatio * ScalePercentWidth , window.devicePixelRatio * ScalePercentWidth);   

        sound[0] = game.add.audio('demung'+1 ) ;
        sound[0].addMarker("ting", 1 , 2 );
        this.btnDemung[0] = game.add.button( (this.game.world.centerX/2) , this.game.world.centerY , 'plaq' ,  this.actionOnClick , {pl : 0});
        this.btnDemung[0].anchor.setTo(0.5);  
        this.btnDemung[0].scale.setTo(window.devicePixelRatio * ScalePercentWidth , window.devicePixelRatio * ScalePercentWidth);   
        this.btnDemung[0].input.useHandCursor = false;

        for (var i = 1 ; i < 7 ;i++){
            sound[i] = game.add.audio('demung'+(i+1) ) ;
            sound[i].addMarker("ting", 1 , 2 );
            this.btnDemung[i] = game.add.button( (this.game.world.centerX/2)+this.btnDemung[0].width*i , this.game.world.centerY , 'plaq' ,  this.actionOnClick , {pl : i});
            this.btnDemung[i].anchor.setTo(0.5);  
            this.btnDemung[i].scale.setTo(window.devicePixelRatio * ScalePercentWidth , window.devicePixelRatio * ScalePercentWidth);   
            this.btnDemung[i].height =  this.btnDemung[i].height - (20*i);
            this.btnDemung[i].input.useHandCursor = false;
        }
        
      

    },
    
    update : function(){
     //   this.timer += this.game.time.elapsed;
            //this is in ms, not seconds.
       //     if (this.timer >= 500){
         //       this.timer -= 500;       
           //     this.playText.visible = !this.playText.visible;    
           // }
    },

    actionOnClick :function (item) {
        //alert(this.pl);
        //to(properties, duration, ease, autoStart, delay, repeat, yoyo)
        shake = game.add.tween(item).to({ x: item.x+2 }, 100, Phaser.Easing.Quadratic.InOut, false, 0 , 1,true);
        shake.start();

        sound[this.pl].play("ting");
       
    },
    GoMainMenu : function(){
        this.state.start("MainMenu");
    },
    
};

