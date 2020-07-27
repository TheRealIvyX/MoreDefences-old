const projectile = extend(BasicBulletType, {
   draw(b){}
});
projectile.speed = 6
projectile.damage = 60
projectile.lifetime = 60
projectile.homingPower = 0.05
projectile.homingRange = 75
projectile.frontColor = '#ffffff'
projectile.backColor = '#00875a'
const tefiumwall = extendContent(Wall, "tefium-wall", {
	update(tile){
		this.super$update(tile);
		this.bulletTimer++
    if (this.bulletTimer > 120) {
      this.bulletTimer = 0
      for (var i = 0; i < 5; i++) {
        Calls.createBullet(projectile, tile.getTeam(), tile.drawx(), tile.drawy(), Mathf.random(360), Mathf.random(0.5, 1.0), Mathf.random(0.2, 1.0))
      }
    }
	},
});
