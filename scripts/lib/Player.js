var Player = function(game){
	this.color = "#00A"
	this.game = game;
	this.x = 100;
	this.y = 100;
	this.width = 32;
	this.height = 32;
	this.playerBullets = [];
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
	// shoot
	if(keydown.space)
	{
		this.shoot();
	}

}

Player.prototype.shoot = function(){
	
	var bulletposition = this.midpoint();

	this.playerBullets.push(Bullet({
		speed: 5,
		    x: bulletposition.x,
		    y: bulletposition.y
	}));
}

Player.prototype.draw = function(){

	this.game.drawRectangle(this.color,this.x,this.y,10,10);
}

Player.prototype.midpoint = function(){
	return {
		x: this.x + this.width / 2,
		y: this.y + this.height / 2
	};
}