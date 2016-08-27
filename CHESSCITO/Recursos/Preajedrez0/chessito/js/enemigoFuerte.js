function EnemigoFuerte(x,y, imagen, animaciones)
{
   Kinetic.Sprite.call(this);

//   this.setImage(imagen);
   this.setWidth(61);
   this.setHeight(72);
   this.setX(x);
   this.setY(y);
   this.contador = 0;
   /*Sprite*/
   this.attrs.image = imagen;
   this.setAnimations(animaciones);
   this.attrs.frameRate = 5;
   this.setAnimation('esperando');
   
   this.aleatorio = function(inferior, superior)
   {
       var posibilidades = superior - inferior;
       var random = Math.random()*posibilidades;
       random = Math.floor(random);
       return parseInt(inferior) + random;
   };
   this.mover = function()
   {
       this.contador++;
       this.setX(this.getX()+ Math.sin(this.contador * Math.PI/100)*5);
       this.setAnimation('esperando');
       this.afterFrame(4, function(){
            this.setAnimation('esperando');
       });
   };
   this.aparecer = function()
   {
       contador++;
               if(contador >= 0 && contador <= 300)
               {
                   console.log('visible');
                   this.setX(this.aleatorio(100,500));
                   //this.setY(this.getY());
               }else if(contador > 300 && contador <= 500)
               {
                   console.log('invisible');
                   this.setX(-1000);
                   //this.setY(-1000);
               }else if(contador > 500)
               {
                   console.log('enserado');
                  contador = 0;
               }
               
            
   };
}
EnemigoFuerte.prototype = Object.create(Kinetic.Sprite.prototype);