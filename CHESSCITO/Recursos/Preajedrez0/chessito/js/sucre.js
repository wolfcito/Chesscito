function Sucres(x,y, imagen)
{
    Kinetic.Image.call(this);
    this.setWidth(25);
   this.setHeight(25);
   this.setX(x);
   this.setY(y);
   this.setImage(imagen);
//   this.setFill('yellow');
    
}
Sucres.prototype = Object.create(Kinetic.Image.prototype);