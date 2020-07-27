const tefiumWallProjectile = extend(MissileBulletType, {
});
tefiumWallProjectile.speed = 6
tefiumWallProjectile.damage = 60
tefiumWallProjectile.lifetime = 60
tefiumWallProjectile.homingPower = 0.05
tefiumWallProjectile.homingRange = 75
tefiumWallProjectile.frontColor = Color.valueOf('#ffffff')
tefiumWallProjectile.backColor = Color.valueOf('#00875a')
const tefiumwall = extendContent(Wall, "tefium-wall", {
   load(){
    this.super$load();
    this.region = Core.atlas.find("more-defences-ivyx-tefium-wall")
  },
  update(tile){
    this.super$update(tile);
    if (tile.entity.timer.get(this.shootTefiumWallProjectile, 120)){
     Calls.createBullet(tefiumWallProjectile, this.getTeam(), this.x, this.y, this.rotation, 1, 1)
     print('it works');
    }
  }
});
tefiumWall.shootTefiumWallProjectile = tefium.timers++;
