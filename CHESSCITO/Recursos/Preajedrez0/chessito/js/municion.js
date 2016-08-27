//function Municion(x,y,objSeleccionado, imagen)
function Municion(objSeleccionado, imagen)
{
    Kinetic.Image.call(this);
    //Kinetic.Rect.call(this);
    //Kinetic.Circle.call(this); 
    var velocidad_ataque = 10;
    this.setWidth(30);
    this.setHeight(30);
    var velX = 10;
    var velY = 5;
    var b_x = objSeleccionado.getX();//+(objSeleccionado.getWidth()/2);
    var b_y = objSeleccionado.getY()+objSeleccionado.getHeight()/2;
    this.lmtDer = objSeleccionado.getX() + 2*objSeleccionado.getWidth() ;
    this.lmtUp = objSeleccionado.getY();
//    var b_x = objSeleccionado.getX()+(objSeleccionado.getWidth()/2);
//	var b_y = objSeleccionado.getY()+(objSeleccionado.getHeight()/2);
//
//	var targetX = x - b_x,
//		targetY = y - b_y,
//		distance = Math.sqrt(targetX * targetX + targetY * targetY);
//
//	var velX = (targetX / distance) * velocidad_ataque;
//	var velY = (targetY / distance) * velocidad_ataque;
	
	
	this.setX(b_x);
	this.setY(b_y);
    //this.setRadius(5);
    this.setImage(imagen);
   // this.setFill("limegreen");
    this.mover = function(){
       b_x += velX;
       b_y += velY;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.moverXposi = function(){
       b_x += velocidad_ataque;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.moverXnega = function(){
       b_x -= velocidad_ataque;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.moverYposi = function(){
       b_y += velocidad_ataque;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.moverYnega = function(){
       b_y -= velocidad_ataque;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.moverDiagPosiDere = function(){
       b_x += velocidad_ataque;
       b_y -= velocidad_ataque;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.moverDiagPosiIzq = function(){
       b_x -= velocidad_ataque;
       b_y -= velocidad_ataque;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.moverDiagNegaDere = function(){
       b_x += velocidad_ataque;
       b_y += velocidad_ataque;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.moverDiagNegaIzq = function(){
       b_x -= velocidad_ataque;
       b_y += velocidad_ataque;
       this.setAbsolutePosition(b_x, b_y);
    };
    this.atackCaballoDerUp = function()
    {
//        console.log((objSeleccionado.getX()+ ' - '+ objSeleccionado.getY()));
//        console.log((this.lmtDer+ ' - '+ this.lmtUp));

        this.setX(this.lmtDer);
        this.setY(this.lmtUp);
    };
}
Municion.prototype = Object.create(Kinetic.Image.prototype);
//Municion.prototype = Object.create(Kinetic.Rect.prototype);
//Municion.prototype = Object.create(Kinetic.Circle.prototype);