var Player = function(game){
	this.color = "#00A"
	this.game = game;
	this.x = 100;
	this.y = 100;
	this.width = 32;
	this.height = 32;
}

Player.prototype.update = function(){
	
	if(keydown.left)
	{
		this.x -= 2;
	}
	if(keydown.right)
	{
		this.x += 2;
	}
	// keydown.up : y is 0 at the top. y increases when you move down
	if(keydown.up)
	{
		this.y -= 2;
	}
	if(keydown.down)
	{
		this.y += 2;
	}
}

Player.prototype.draw = function(){

	this.game.drawRectangle(this.color,this.x,this.y,10,10);
}