var Game = function() {
	this.fps = 60;
	var canvas = document.getElementById('world');
	// the getContext method gives you a way to manipulate the canvas. It's like a portal to the canvas
	this.context = canvas.getContext('2d');
	this.WIDTH = canvas.width;
	this.HEIGHT = canvas.height;

	this.player = new Player(this);

	// assigning this to a variable so that we don't have to invoke'this' everytime from the DOM
	var game = this;

	// setInterval performs the function in its first argument every x time where x is the second argument
	var gameloop = setInterval(function(){
		game.updateAll();
		game.drawAll();
	}, 1000 / this.fps);
}

Game.prototype.updateAll = function(){
	// nothing here yet
	this.player.update();
}

Game.prototype.drawAll = function(){
	// nothing here yet
	var obj = this;
	obj.drawRectangle('#fff',0,0,this.WIDTH,this.HEIGHT);
	obj.player.draw();
}

Game.prototype.drawRectangle = function(color,x,y,width,height){
	var obj = this;
	obj.context.fillStyle = color;
	obj.context.fillRect(x,y,width,height);
}