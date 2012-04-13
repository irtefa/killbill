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
		var currx = this.x - 2;
		if(currx <= 0); // do nothing
		else
		{
			this.x -= 2;
		}
	}
	if(keydown.right)
	{
		var currx = this.x + 2;
		if(currx+32 >= game.context_w); // do nothing
		else
		{	
			this.x += 2;
		}
	}
	// keydown.up : y is 0 at the top. y increases when you move down
	if(keydown.up)
	{
		var curry = this.y - 2;
		if(curry <= 0); // do nothing
		else
		{
			this.y -= 2;
		}
	}
	if(keydown.down)
	{
		var curry = this.y + 2;
		if(curry + 32 >= game.context_h);
		else
		{
			this.y += 2;
		}
	}
	/*
	this.x = this.x.clamp(0,game.context_w - this.width);
	this.y = this.y.clamp(0,game.context_h - this.height);
	*/
	// clamp it manually

}

Player.prototype.draw = function(){

	this.game.drawRectangle(this.color,this.x,this.y,10,10);
}