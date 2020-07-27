const tefiumwallprojectile = extend(BasicBulletType, {
   draw(b){}
});
tefiumwallprojectile.speed = 6
tefiumwallprojectile.damage = 60
tefiumwallprojectile.lifetime = 60
tefiumwallprojectile.homingPower = 0.05
tefiumwallprojectile.homingRange = 75
tefiumwallprojectile.frontColor = '#ffffff'
tefiumwallprojectile.backColor = '#00875a'
const tefiumwall = extendContent(Wall, "tefium-wall", {
  load() {
    this.bulletTimer = 0
  },
  update(tile){
    this.super$update(tile);
    this.bulletTimer++
    if (this.bulletTimer > 120) {
      this.bulletTimer = 0
      for (var i = 0; i < 5; i++) {
        Calls.createBullet(Bullets.tefiumwallprojectile, tile.getTeam(), tile.drawx(), tile.drawy(), Mathf.random(360), Mathf.random(0.5, 1.0), Mathf.random(0.2, 1.0))
      }
    }
  },
});
