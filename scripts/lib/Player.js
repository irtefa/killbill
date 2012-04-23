var Player = function(game){
	this.color = "#00A"
	this.game = game;
	this.x = 100;
	this.y = 100;
	this.width = 32;
	this.height = 32;

}


var playerBullets = [];


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
		if(currx+32 >= game.WIDTH); // do nothing
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
		if(curry + 32 >= game.HEIGHT;
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


	// taking care of the bullets
	playerBullets.forEach(function(bullet){
		bullet.update();
	});

	playerBullets = playerBullets.filter(function(bullet) {
		return bullet.active;
	});
}

Player.prototype.midpoint = function(){
	return {
		x: this.x + this.width / 2,
		y: this.y + this.height / 2
	};
}


Player.prototype.shoot = function(){
	
	var bulletposition = this.midpoint();

	playerBullets.push(Bullet({
		speed: 5,
		    x: bulletposition.x,
		    y: bulletposition.y
	}));
}

Player.prototype.draw = function(){

	this.game.drawRectangle(this.color,this.x,this.y,10,10);

	//drawing the bullet
	playerBullets.forEach(function(bullet) {
		bullet.draw;
	})
}

Player.prototype.midpoint = function(){
	return {
		x: this.x + this.width / 2,
		y: this.y + this.height / 2
	};
}

