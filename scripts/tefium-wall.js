const tBullet = extend(BasicBulletType, {
   draw(b){}
});
tBullet.speed = 6
tBullet.damage = 60
tBullet.lifetime = 60
tBullet.homingPower = 0.05
tBullet.homingRange = 75
tBullet.frontColor = '#ffffff'
tBullet.backColor = '#00875a'
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
        blib.spawnBullet(tBullet, this.getTeam(), this.x, this.y)
      }
    }
  },
});
