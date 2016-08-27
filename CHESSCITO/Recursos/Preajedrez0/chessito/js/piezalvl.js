function Piezalvl(imagen)//,estado_animacion)
{
   Kinetic.Image.call(this);
//   this.setFill('green');
   this.setWidth(80);
   this.setHeight(60);
   this.setImage(imagen);
//   this.nombre_btn = estado_animacion;
   
   /*Sprite*/
//   this.attrs.image = imagen;
//   this.setAnimations(frameImagenes);
//   this.attrs.frameRate = 5;
//   this.setAnimation('btn_der');

}
Piezalvl.prototype = Object.create(Kinetic.Image.prototype);