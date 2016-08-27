function Pasadizo(x,y, imagen)
{
     Kinetic.Image.call(this);
   this.setWidth(100);
   this.setHeight(90);
   this.setX(x);
   this.setY(y);
//   this.setFill('purple');
    this.setImage(imagen);
    
}
Pasadizo.prototype = Object.create(Kinetic.Image.prototype);