function Plataforma(x,y,imagen)
{
    Kinetic.Rect.call(this);
//   this.setFill(color);
//   this.setImage(imagen);
   this.setWidth(90);
   this.setHeight(90);
   this.setX(x);
   this.setY(y);
   this.setFillPatternImage(imagen);
}

Plataforma.prototype = Object.create(Kinetic.Rect.prototype);