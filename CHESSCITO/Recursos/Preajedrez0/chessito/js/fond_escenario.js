function Fondo_escenario(imagen)
{
    Kinetic.Rect.call(this);
   this.setWidth(960);
   this.setHeight(500);
   this.setFillPatternImage(imagen);
//   this.setFill('green');
}
Fondo_escenario.prototype = Object.create(Kinetic.Rect.prototype);