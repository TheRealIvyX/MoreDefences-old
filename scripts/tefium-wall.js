const tefiumWallProjectile = extend(MissileBulletType, {
   draw(b){}
});
tefiumWallProjectile.speed = 6
tefiumWallProjectile.damage = 60
tefiumWallProjectile.lifetime = 60
tefiumWallProjectile.homingPower = 0.05
tefiumWallProjectile.homingRange = 75
tefiumWallProjectile.frontColor = '#ffffff'
tefiumWallProjectile.backColor = '#00875a'

const tefiumwall = extendContent(Wall, "tefium-wall", {
   load(){
    this.super$load();
    this.region = Core.atlas.find("more-defences-ivyx-tefium-wall")
    this.bulletTimer = 0;
  },
  update(tile){
    this.super$update(tile);
    if (tile.entity.timer.get(this.shootTefiumWallProjectile, 120)){
     Calls.createBullet(tBullet, this.getTeam(), this.x, this.y, rotation, 1, 1)
}
    }
  },
});
tefiumWall.shootTefiumWallProjectile = tefium.timers++;
