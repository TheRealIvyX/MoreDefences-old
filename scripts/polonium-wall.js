update(tile){
  var r = 9 * Vars.tilesize;
  Units.nearbyEnemies(tile.getTeam(), tile.drawx() - r, tile.drawy() - r, 2 * r, 2 * r, cons(unit => {
    if(unit instanceof HealthTrait && !unit.isDead() && unit.withinDst(tile.drawx(), tile.drawy(), r)){
      if (getDisplayName(tile) == 'Copper Wall') { // placeholder
        unit.damage(0.333);
      }
    }
  }));
}
