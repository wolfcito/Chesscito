function Avatar(x,y,imagen)
{
    Kinetic.Circle.call(this);
//   this.setFill(color);
//   this.setImage(imagen);
   this.setWidth(120);
   this.setHeight(120);
   this.setRadius(x/2);
   this.setX(x);
   this.setY(y);
   this.setFillPatternImage(imagen);
   this.setFillPatternOffset(x, y);

}

Avatar.prototype = Object.create(Kinetic.Circle.prototype);