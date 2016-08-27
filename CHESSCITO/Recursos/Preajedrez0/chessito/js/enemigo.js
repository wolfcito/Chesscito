function Enemigo(x,y, imagen)
{
   Kinetic.Image.call(this);
   //Kinetic.Rect.call(this);

   this.setImage(imagen);
   this.setWidth(30);
   this.setHeight(30);
   this.setX(x);
   this.setY(y);
   this.contador = 0;
   
//   this.setFill('blue');
   this.aleatorio = function(inferior, superior)
   {
       var posibilidades = superior - inferior;
       var random = Math.random()*posibilidades;
       random = Math.floor(random);
       return parseInt(inferior) + random;
   }
   this.mover = function()
   {
       this.contador++;
       this.setX(this.getX()+ Math.sin(this.contador * Math.PI/100)*5);
   }
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
               
            
   }
   
   this.saltarCasilla = function()
   {
       
   }
   this.caidaGravedad = function()
   {
       
   }
}
Enemigo.prototype = Object.create(Kinetic.Image.prototype);
//Enemigo.prototype = Object.create(Kinetic.Rect.prototype);