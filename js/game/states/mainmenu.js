Scene.MainMenu = function () {};

Scene.MainMenu.prototype = {
    
    create : function(){
        
        this.backMenu = this.game.add.sprite(this.game.world.centerX  , this.game.world.centerY ,'background');
        this.backMenu.anchor.setTo(0.5);
        //this.backMenu.scale.setTo(window.devicePixelRatio*1.5, window.devicePixelRatio*1.5);
        this.backMenu.width = this.game.width;
        this.backMenu.height =  this.game.height;

        this.logo = this.add.sprite(this.game.world.centerX , 100 , 'gatoel');
        this.logo.anchor.setTo(0.5);
        //this.splash.scale.setTo(window.devicePixelRatio/2, window.devicePixelRatio/2);


      // this.btnDemung = this.add.sprite(this.game.world.centerX*0.5, this.game.height - 200 , 'demungIcon');
      // this.btnDemung.anchor.setTo(0.5); 
      // this.btnDemung.scale.setTo(window.devicePixelRatio, window.devicePixelRatio);
      // this.btnDemung.inputEnabled = true;
      // this.btnDemung.events.onInputDown.add(this.play, this);  

     //  this.btnSaron = this.add.sprite(this.game.world.centerX*1.5, this.game.height - 200 , 'saronIcon');
     //  this.btnSaron.anchor.setTo(0.5); 
     //  this.btnSaron.scale.setTo(window.devicePixelRatio, window.devicePixelRatio);
     //  this.btnSaron.inputEnabled = true;
     //  this.btnSaron.events.onInputDown.add(this.play, this);  

//     this.btnDemung = game.add.button(this.game.world.centerX*0.5 , this.game.height - 200 , 'saronIcon', function(){ this.actionOnClick("Saron") }, this);
       this.btnSaron = game.add.button(this.game.world.centerX*0.5 , this.game.height - 200 , 'saronIcon', function(){ this.play("Saron") }, this);
       this.btnSaron.anchor.setTo(0.5); 
       this.btnSaron.scale.setTo(window.devicePixelRatio * ScalePercentWidth , window.devicePixelRatio * ScalePercentWidth );
       this.btnSaron.input.useHandCursor = false;

       this.btnDemung = game.add.button(this.game.world.centerX*1.5 , this.game.height - 200 , 'demungIcon', function(){ this.play("Demung") } , this);
       this.btnDemung.anchor.setTo(0.5); 
       this.btnDemung.scale.setTo(window.devicePixelRatio * ScalePercentWidth , window.devicePixelRatio * ScalePercentWidth );
       this.btnDemung.input.useHandCursor = false;

       var DemungText = 'Demung';
       this.DemungText = this.add.text(  this.btnDemung.x , this.btnDemung.y+100  , DemungText);
       this.DemungText.anchor.setTo(0.5);
       this.DemungText.font = 'Revalia';
       this.DemungText.fontSize = window.devicePixelRatio*32;
       this.DemungText.fill = '#fff';
       this.DemungText.align = 'center';

       var SaronText = 'Saron';
       this.SaronText = this.add.text(  this.btnSaron.x , this.btnSaron.y+100  , SaronText );
       this.SaronText.anchor.setTo(0.5);
       this.SaronText.font = 'Revalia';
       this.SaronText.fontSize = window.devicePixelRatio*32;
       this.SaronText.fill = '#fff';
       this.SaronText.align = 'center';

       //((GAME_WIDTH/BASE_WIDTH)*360)/360, ((GAME_HEIGHT/BASE_HEIGHT)*360)/360
      // console.log(OriWidth);
       // console.log("pxlRatio"+window.devicePixelRatio);
        //console.log("gheight"+ this.game.height);
        //console.log("gwidth"+ this.game.width );
        //console.log("sheight"+window.screen.height);
        //console.log("swidth"+ window.screen.width );
        //console.log("aheight"+window.screen.availHeight);
        //console.log("awidth"+ window.screen.availWidth );
    },
    
    update : function(){
     //   this.timer += this.game.time.elapsed;
            //this is in ms, not seconds.
       //     if (this.timer >= 500){
         //       this.timer -= 500;       
           //     this.playText.visible = !this.playText.visible;    
           // }
    },

    play : function(go){
        this.state.start(go);
    },

    /*
    actionOnClick :function (path) {
        alert(path);
        this.backMenu.visible =! this.backMenu.visible;
    
    }*/
    
};

