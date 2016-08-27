function Panel_estado(x,y,imagen)
{
    Kinetic.Image.call(this);
//   this.setFill(color);
   this.setWidth(90);
   this.setHeight(90);
   this.setX(x);
   this.setY(y);
   this.setFillPatternImage(imagen);
}

Panel_estado.prototype = Object.create(Kinetic.Image.prototype);