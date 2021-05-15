var fwV = "[fireworks.js]_v0.32";

function _gRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
 
function CColor(){
	this.h = 0;
	this.s = 0;
	this.l = 0;
	this.a = 0;
	this.toString = function(){
		var s1 = 'hsla(';
		s1 += this.h;
		s1 += ',';
		s1 += this.s;
		s1 += '%,';
		s1 += this.l;
		s1 += '%,';
		s1 += this.a;
		s1 += ')';
		var s2 = 'hsla(';
		s2 += this.h;
		s2 += ',';
		s2 += this.s;
		s2 += '%,';
		s2 += this.l;
		s2 += '%)';  
		return this.a ? s1 : s2;
	}
}

var _gColor = function(){
	var c = new CColor();
	c.h = _gRandom(0, 360);
	c.s = _gRandom(0, 100);
	c.l = _gRandom(0, 100);
	return c;
}

function CVector(_x,_y){
	this.x = _x;
	this.y = _y;
	this.add = function(vec){
		this.x += vec.x;
		this.y += vec.y;
	}
}

var _gNewVector = function(){
	let angle = _gRandom(0, 360) * Math.PI / 180;
	let len = _gRandom(1, 5);
	let x = Math.cos(angle) * len;
	let y = Math.sin(angle) * len;
	return new CVector(x, y);
}


class Particle {
	constructor(x, y, vel, color, explodeLifespan) {
		this.r = 3;
		this.loc = new CVector(x, y);
		this.vel = vel || new CVector(0, 0);
		this.acc = new CVector(0, 0);
		this.explodeLifespan = explodeLifespan;
		this.explodeCurrentLs = 0;
		this.color = color;
	}

	update() {
		this.vel.add(this.acc);
		this.loc.add(this.vel);
		if (this.explodeLifespan) {
			this.explodeCurrentLs++;
			let progress = this.explodeCurrentLs / this.explodeLifespan;
			if (progress > 0.7 && progress < 1.0) {
				this.color.a = 1 - (progress - 0.7) / 0.3;
			}
		}
	}

	render(ctx) {
		ctx.save();
		ctx.beginPath();
		ctx.arc(this.loc.x, this.loc.y, this.r, 0, Math.PI * 2);
		ctx.fillStyle = this.color.toString();
		ctx.fill();
		ctx.restore();
	}

	applyForce(force) {
		this.acc.add(force);
	}

	wasDoneExploding() {
		return this.explodeCurrentLs > this.explodeLifespan;
	}
}

class Firework {
	constructor() {
		let vel = new CVector(
			_gRandom(0, 15) * (_gRandom(0, 1) ? -1 : 1),
			_gRandom(-18, -10)
		);
		this.color = _gColor();
		this.color.s = 100;
		this.color.l = 70;
		this.exploder = new Particle(w / 2, h, vel, this.color);
		this.explodeParticles = [];
		this.nOfParticles = _gRandom(30, 40);
		this.isExploded = false;
	}

	update() {
		if (this.exploder.vel.y > 0 && !this.isExploded) {
			this.isExploded = true;
			this.initExplodeParticles();
		}
		if (!this.isExploded) {
			this.exploder.update();
		} else {
			for (let p of this.explodeParticles) {
				if (!p.wasDoneExploding()) {
					p.update();
				}
			}
		}
	}

	render(ctx) {
		if (!this.isExploded) {
			this.exploder.render(ctx);
		} else if (!this.done) {
			for (let p of this.explodeParticles) {
				if (!p.wasDoneExploding()) {
					p.render(ctx);
				}
			}
		}
	}

	applyForce(force) {
		if (!this.isExploded) {
			this.exploder.applyForce(force);
		} else if (!this.done) {
			for (let p of this.explodeParticles) {
				if (!p.wasDoneExploding()) {
					p.applyForce(force);
				}
			}
		}
	}

	initExplodeParticles() {
		for (let i = 0; i < this.nOfParticles; i++) {
			let particle = new Particle(
				this.exploder.loc.x, 
				this.exploder.loc.y,
				_gNewVector(),
				this.color,
				50
			);
			this.explodeParticles.push(particle);
		}
	}

	wasDone() {
		if (this.explodeParticles.length === 0) return false;

		for (let p of this.explodeParticles) {
			if (!p.wasDoneExploding()) {
				return false;
			}
		}
		return true;
	}
}

let fs = [];

var nTimes = 0;

let gravity = new CVector(0, 0.01);
function animateFrame(time) {    
    var n = fs.length;

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');  
    ctx.fillStyle = 'red';
    ctx.font = "30px Verdana";
    ctx.fillText( fwV + " n=" + n + " time=" + time, 110, 44);
 
	if (0==fs.length) {
		fs.push(new Firework()); 
	}  
    for (let firework of fs) {
		firework.applyForce(gravity);
		firework.update();
		firework.render(ctx);
	} 
	for (let i = 0; i < fs.length; i++) {
		if (fs[i].wasDone()) {
			fs.splice(i, 1);
		}
	}  
}