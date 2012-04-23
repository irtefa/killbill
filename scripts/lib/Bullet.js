function Bullet(obj){
	obj.active = true;

	obj.xVelocity = 0;
	obj.yVelocity = - obj.speed; // why minus?

	obj.width  = 3;
	obj.height = 3;
	obj.color = "#00A";

	obj.inBounds = function() {
		return obj.x >= 0 && obj.x <= game.WIDTH && obj, obj.y >= 0 && obj.y <= game.HEIGHT;
	};

	obj.draw = function() {
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x,this.y,this.width,this.height);
	};

	obj.update = function() {
		obj.x += obj.xVelocity;
		obj.y += obj.yVelocity;

		obj.active = obj.active && obj.inBounds();
	};

	return obj;
}