function Campeon(imagen, animaciones)
{
   //Kinetic.Rect.call(this);
   Kinetic.Sprite.call(this);
   this.setWidth(30);
   this.setHeight(60);
   this.velocidad_x = 30;
   this.velocidad_y = 30;
   this.direccio = 1;
   this.contador = 0;
   this.limiteDerecho = 0;
   this.limiteInferior = 250;
   this.limiteTope = 0;
   this.piso = 15;
   this.vidas = 3;
   this.estado = 'dere';
   
   /*Sprite*/
   this.attrs.image = imagen;
   this.setAnimations(animaciones);
   this.attrs.frameRate = 10;
   this.setAnimation('caminar_dere');
   //this.setFill('red');
	//this.setImage(imagen);
   this.caminar = function()
   {
       console.log('Estoy caminando >> hacia la derecha');
       this.move(this.velocidad_x,0);
       if(this.getX() > this.limiteDerecho)
       {
           this.setAnimation('caminar_dere');
           this.move(this.limiteDerecho - this.getX(),0);
           this.afterFrame(4, function(){
               this.setAnimation('parado_dere');
           });
       }
   };
   this.retroceder = function()
   {
       console.log('hacia la izquierda << Estoy retrocediendo ');
       this.move(-this.velocidad_x,0);
       if(this.getX() < 0)
       {
           this.setAnimation('caminar_izq');
           this.move(-this.getX(),0);
           this.afterFrame(4, function(){
               this.setAnimation('parado_izq');
           });
       }
   };
   this.subir = function()
   {
       console.log(this.getY());
      // this.velocidad_y = -20;
      // this.contador++;
       this.move(0,-this.velocidad_y);
       if(this.getY() <= 0)
       {
           this.setAnimation('caminar_arriba');
           this.move(0,this.velocidad_y);
           this.afterFrame(4, function(){
               this.setAnimation('parado_arriba');
           });
       }
   };
   this.bajar = function()
   {
       console.log(this.getY());
      // this.velocidad_y = -20;
      // this.contador++;
       this.move(0,this.velocidad_y);
       
       if(this.getY() > this.limiteInferior)
       {
           this.setAnimation('caminar_abajo');
           this.move(0,this.limiteInferior-this.getY());
           this.afterFrame(4, function(){
               this.setAnimation('parado_abajo');
           });
       }
   };

   this.saltarCasilla = function()
   {
       this.velocidad_y = -20;
       this.contador++;
   };
   this.caidaGravedad = function(gravedad, valor_revote)
   {
       this.velocidad_y += gravedad;
       this.move(0, this.velocidad_y);
       if(this.getY() + this.getHeight() > this.limiteTope)
       {
           this.setY(this.limiteTope-this.getHeight()-this.piso);
           this.velocidad_y = 15;
           this.contador = 0;
       }
   };
}

//Campeon.prototype = Object.create(Kinetic.Rect.prototype);
Campeon.prototype = Object.create(Kinetic.Sprite.prototype);