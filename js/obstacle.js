$.Obstacle = function () {
	this.x = $.canvas.width + 10;
	this.y = $.base_y - Math.floor(Math.random() * 550) + 1;
    this.vx = 2;
    this.height = 40;
    this.width = 40;
	this.background = '#754c24';
    this.remove = false;
};

$.Obstacle.prototype.render = function () {
    $.Draw.rect(this.x, this.y, this.width, this.height, this.background);
};

$.Obstacle.prototype.update = function () {
    this.x -= this.vx;
    this.remove = (this.x < 100);
};
