//var Main = function() {};
//window.innerWidth, window.innerHeight 
//window.screen.availWidth ,window.screen.availHeight
var game = new Phaser.Game( window.innerWidth ,window.innerHeight   , Phaser.AUTO, 'gameWorld');

var OriWidth = 1920 , OriHeight = 1080 ;
var ScalePercentWidth = window.innerWidth / OriWidth ;
var ScalePercentHeight = window.innerHeight  / OriHeight ;



game.state.add('Boot', Scene.Boot); // start the game
game.state.add('Preload', Scene.Preload); // load asset
game.state.add('MainMenu', Scene.MainMenu); //main menu
game.state.add('Play', Scene.Play);// game
game.state.add('Demung', Scene.Demung);// game
game.state.add('Saron', Scene.Saron);// game

game.state.start('Boot');
