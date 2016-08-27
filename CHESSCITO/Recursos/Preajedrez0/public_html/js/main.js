/*Campeon*/
var posIniPjX, posIniPjY;
/*Frames Animaciones*/
var framesCampeon = {
    parado_izq:[{
            x: 24,
            y: 11,
            width: 30,
            height: 60
    }],
    parado_dere:[{
            x: 351,
            y: 91,
            width: 30,
            height: 60
    }],
    parado_arriba:[{
            x: 24,
            y: 173,
            width: 30,
            height: 60
    }],
    parado_abajo:[{
            x: 24,
            y: 256,
            width: 30,
            height: 60
    }],

    caminar_izq:[{
            x: 351,
            y: 11,
            width: 30,
            height: 60
    },{
            x: 271,
            y: 11,
            width: 30,
            height: 60
    },{
            x: 186,
            y: 11,
            width: 30,
            height: 60
    },{
            x: 105,
            y: 11,
            width: 30,
            height: 60
    },{
            x: 24,
            y: 11,
            width: 30,
            height: 60
    }],
    caminar_dere:[{
            x: 24,
            y: 91,
            width: 30,
            height: 60
    },{
            x: 105,
            y: 91,
            width: 30,
            height: 60
    },{
            x: 186,
            y: 91,
            width: 30,
            height: 60
    },{
            x: 271,
            y: 91,
            width: 30,
            height: 60
    },{
            x: 351,
            y: 91,
            width: 30,
            height: 60
    }],
    caminar_arriba:[{
            x: 24,
            y: 173,
            width: 30,
            height: 60
    },{
            x: 105,
            y: 173,
            width: 30,
            height: 60
    },{
            x: 186,
            y: 173,
            width: 30,
            height: 60
    },{
            x: 271,
            y: 173,
            width: 30,
            height: 60
    },{
            x: 351,
            y: 173,
            width: 30,
            height: 60
    }],
    caminar_abajo:[{
            x: 24,
            y: 256,
            width: 30,
            height: 60
    },{
            x: 105,
            y: 256,
            width: 30,
            height: 60
    },{
            x: 186,
            y: 256,
            width: 30,
            height: 60
    },{
            x: 271,
            y: 256,
            width: 30,
            height: 60
    },{
            x: 351,
            y: 256,
            width: 30,
            height: 60
    }]
    
};
var framesMenu = {
    pieza_lvl1:[{
            x: 0,
            y: 0,
            width: 92,
            height: 119
    }],
    pieza_lvl2:[{
            x: 92,
            y: 0,
            width: 92,
            height: 119
    }],
    pieza_lvl3:[{
            x: 184,
            y: 0,
            width: 92,
            height: 119
    }],
    pieza_lvl4:[{
            x: 0,
            y: 119,
            width: 92,
            height: 119
    }],
    pieza_lvl5:[{
            x: 92,
            y: 119,
            width: 92,
            height: 119
    }],
    pieza_lvl6:[{
            x: 184,
            y: 119,
            width: 92,
            height: 119
    }]};
var frameTransfomacion = {
    transformacionPj:[{
            x: 0,
            y: 0,
            width: 50,
            height: 50
    },{
            x: 50,
            y: 0,
            width: 50,
            height: 50
    },{
            x: 100,
            y: 0,
            width: 50,
            height: 50
    },{
            x: 0,
            y: 50,
            width: 50,
            height: 50
    },{
            x: 50,
            y: 50,
            width: 50,
            height: 50
    },{
            x: 100,
            y: 50,
            width: 50,
            height: 50
    },{
            x: 0,
            y: 100,
            width: 50,
            height: 50
    },{
            x: 50,
            y: 100,
            width: 50,
            height: 50
    },{
            x: 100,
            y: 100,
            width: 50,
            height: 50
    }]
};
var framesEnemigo = {
    caminar_abajo:[{
            x: 0,
            y: 0,
            width: 50,
            height: 50
    },{
            x: 50,
            y: 0,
            width: 50,
            height: 50
    },{
            x: 100,
            y: 0,
            width: 50,
            height: 50
    },{
            x: 150,
            y: 0,
            width: 50,
            height: 50
    }],
    caminar_izq:[{
            x: 0,
            y: 50,
            width: 50,
            height: 50
    },{
            x: 50,
            y: 50,
            width: 50,
            height: 50
    },{
            x: 100,
            y: 50,
            width: 50,
            height: 50
    },{
            x: 150,
            y: 50,
            width: 50,
            height: 50
    }],
    caminar_dere:[{
            x: 0,
            y: 100,
            width: 50,
            height: 50
    },{
            x: 50,
            y: 100,
            width: 50,
            height: 50
    },{
            x: 100,
            y: 100,
            width: 50,
            height: 50
    },{
            x: 150,
            y: 100,
            width: 50,
            height: 50
    }],
    caminar_arriba:[{
            x: 0,
            y: 150,
            width: 50,
            height: 50
    },{
            x: 50,
            y: 150,
            width: 50,
            height: 50
    },{
            x: 100,
            y: 150,
            width: 50,
            height: 50
    },{
            x: 150,
            y: 150,
            width: 50,
            height: 50
    }]
};
var framesEnemigoEsp = {
    esperando:[
        {
            x:0,
            y:0,
            height:72,
            width:61
        },
        {
            x:0,
            y:72,
            height:72,
            width:61
        },
        {
            x:0,
            y:144,
            height:72,
            width:61
        }
    ]
};
var framesBtn = {
    btn_der:[{
            x: 0,
            y: 0,
            width: 80,
            height:60
    }],
    btn_izq:[{
            x: 80,
            y: 0,
            width: 80,
            height:60
    }],
    btn_der_up:[{
            x: 160,
            y: 0,
            width: 80,
            height:60
    }],
    btn_der_down:[{
            x: 240,
            y: 0,
            width: 80,
            height:60
    }],
    
    btn_izq_up:[{
            x: 320,
            y: 0,
            width: 80,
            height:60
    }],
    btn_izq_down:[{
            x: 400,
            y: 0,
            width: 80,
            height:60
    }],
    btn_up:[{
            x: 480,
            y: 0,
            width: 50,
            height:60
    }],
    btn_down:[{
            x: 530,
            y: 0,
            width: 50,
            height:60
    }]
};
/*Capas y grupos*/
var escenario, CapaFondo, CapaMenu,grupoAyudaGrafica,grupoFiguras, grupoFondo;
var teclado = {};
/*Mennu*/
var grupoMenu;
var btnAtckDere, btnAtckIzq, btnAtckUp, btnAtckDwn, btnAtckPieza;
var tooltip;
var limite_btn_y;
var limite_btn_x ;

/*intervalos*/
var intvExplosion, tiempoExplosion = 2;//segundos
var numeroEnemigos = 4;
var intervalo, aparicionEnemigos, disparoPersonaje;
var grupoEnemigos = [];
/*Panel de resultados*/
var panel_resultado;
var fondo_panel;

/*elementos importantes*/
var personaje;
var gravedad = 0.8;
var valor_revote = 0;
var contador = 0;
var zonaPanel = 170;
var barraVida;
var avatarPj;
var piedra;
/*Cuadricula*/
//var estelaAyuda;
/*disparos*/
var disparos = [];
var disparando = false;
/*correccion-duplicados*/
//var banderaDuplicados = false;
var objJuego = new Juego();
/*Sprites - Juego*/
var imgCampeon = new Image();
imgCampeon.src = 'img/campeonA.png';
var imgMenu = new Image();
imgMenu.src = 'img/lvl_pieza.png';
var imgEnemigo = new Image();
imgEnemigo.src = 'img/enemi1.png';
var imgPuerta = new Image();
imgPuerta.src = 'img/puerta.png';
var imgSucres = new Image();
imgSucres.src = 'img/sucre.png';
var imgPremio = new Image();
imgPremio.src = 'img/premio.png';
var imgFondo = new Image();
imgFondo.src = 'img/piso.png';
var imgMunicion = new Image();
imgMunicion.src = 'img/fuego.png';
var imgExplosion = new Image();
imgExplosion.src = 'img/explosion_azul.png';
var imgEnemigoAni = new Image();
imgEnemigoAni.src = 'img/espanolEnemigo.png';
var imgBtnDer = new Image();
imgBtnDer.src = 'img/btn_der.png';
var imgBtnIzq = new Image();
imgBtnIzq.src = 'img/btn_izq.png';
var imgBtnUp = new Image();
imgBtnUp.src = 'img/btn_up.png';
var imgBtnDwn = new Image();
imgBtnDwn.src = 'img/btn_down.png';
var imgVida = new Image();
imgVida.src = 'img/barra_vida.png';
var imgBorde = new Image();
imgBorde.src = 'img/bordes.png';
var imgAvatar1 = new Image();
imgAvatar1.src = 'img/avatar_1.png';
var imgFondoTierra = new Image();
imgFondoTierra.src = 'img/textura_tierra.png';
var imgFondoPiedra = new Image();
imgFondoPiedra.src = 'img/textura_piedra.png';


grupoFondo = new Kinetic.Group({
    x:0,
    y:0
});
grupoAyudaGrafica = new Kinetic.Group({
    x:0,
    y:0
});
grupoFiguras = new Kinetic.Group({
    x:0,
    y:0
});
grupoMenu = new Kinetic.Group({
    x:0,
    y:0
});
escenario = new Kinetic.Stage({
    container: 'tutor0',
    width: 960,
    height: 500,
    canvas:{
        height:500,
        width:960
    }
});
var imgFondoJuego = new Kinetic.Image({
   image: imgFondo,
   x: 0,
   y: 0,
   width: escenario.getWidth(),
   height: escenario.getHeight()
});
/*Campeon inicializacion*/
personaje = new Campeon(imgCampeon,framesCampeon);
personaje.limiteInferior = escenario.getHeight()-(zonaPanel + personaje.getHeight());
posIniPjX = 0;
posIniPjY = escenario.getHeight() - (zonaPanel+personaje.getHeight());

 /*Botones Menu*/
 limite_btn_x = 150;
 limite_btn_y = (escenario.getHeight()-113);
    btnAtckDere = new Piezalvl(imgBtnDer);//,'btn_der');
    btnAtckDere.setX(limite_btn_x);
    btnAtckDere.setY(limite_btn_y);
    
    btnAtckIzq = new Piezalvl(imgBtnIzq);//,'btn_izq');
    btnAtckIzq.setX(btnAtckDere.getX()+85);
    btnAtckIzq.setY(limite_btn_y);
    
    btnAtckUp = new Piezalvl(imgBtnUp);//,'btn_up');
    btnAtckUp.setWidth(50);
    btnAtckUp.setX(btnAtckIzq.getX()+85);
    btnAtckUp.setY(limite_btn_y);
    
    btnAtckDwn = new Piezalvl(imgBtnDwn);//,'btn_down');
    btnAtckDwn.setWidth(50);
    btnAtckDwn.setX(btnAtckUp.getX()+55);
    btnAtckDwn.setY(limite_btn_y);
    
    btnAtckPieza = new Piezalvl(imgBtnDer);//,'btn_der');
    btnAtckPieza.setX(btnAtckDwn.getX()+55);
    btnAtckPieza.setY(limite_btn_y);
    /*Funciones TORRE*/
    /*Derecha*/
    btnAtckDere.on('mousedown',function(e){
        
        if(!disparando)
        {
            console.log('down');
            roedorDown();
            personaje.estado = 'pj_dere';
//        personaje.setAnimation('caminar_dere');
            personaje.attrs.image = imgExplosion;
            personaje.setAnimations(frameTransfomacion);
            personaje.setAnimation('transformacionPj');
            personaje.afterFrame(4, function(){
                   personaje.attrs.image = imgCampeon;
                   personaje.setAnimations(framesCampeon);
                   personaje.setAnimation('caminar_dere');
               });
            removeDisparos();
            addMunicion();
            disparando = true;
        }else
        {
            console.log('Btn inactivo');
        }
        
             
    });
    btnAtckDere.on('mouseover',function(e){
        console.log('sobre');
        roedorOver();
        addTooltip(btnAtckDere,'Ataque hacia delante');
        addRutaAtackDere();
    });
    btnAtckDere.on('mouseout',function(e){
        console.log('normal');
        roedorNormal();
        removeTooltip();
        removeEstelaAtaque();
    });
    /*izquierda*/
    btnAtckIzq.on('mousedown',function(e){
        if(!disparando)
        {
        console.log('down');
        roedorDown();
        personaje.estado = 'pj_izq';
        personaje.setAnimation('caminar_izq');
        removeDisparos();
        addMunicion();
        disparando = true;
         }else
        {
            console.log('Btn inactivo');
        }
              
    });
    btnAtckIzq.on('mouseover',function(e){
        console.log('sobre');
        roedorOver();
        addTooltip(btnAtckIzq,'Ataque hacia atras');
        addRutaAtackIzq();
    });
    btnAtckIzq.on('mouseout',function(e){
        console.log('normal');
        roedorNormal();
        removeTooltip();
        removeEstelaAtaque();
    });
    /*Arriba*/
    btnAtckUp.on('mousedown',function(e){
        if(!disparando)
        {
        console.log('down');
        roedorDown();
        personaje.estado = 'pj_top';
        personaje.setAnimation('caminar_arriba');
        removeDisparos();
        addMunicion();
        disparando = true;
        }else
        {
            console.log('Btn inactivo');
        }
              
    });
    btnAtckUp.on('mouseover',function(e){
        console.log('sobre');
        roedorOver();
        addTooltip(btnAtckUp,'Ataque hacia arriba');
        addRutaAtackUp();
    });    
    btnAtckUp.on('mouseout',function(e){
        console.log('normal');
        roedorNormal();
        removeTooltip();
        removeEstelaAtaque();
    });
    /*Abajo*/
    btnAtckDwn.on('mousedown',function(e){
        if(!disparando)
        {
        console.log('down');
        roedorDown();
        personaje.estado = 'pj_bot';
        personaje.setAnimation('caminar_abajo');
        removeDisparos();
        addMunicion();
        disparando = true;
        }else
        {
            console.log('Btn inactivo');
        }
    });
    btnAtckDwn.on('mouseover',function(e){
        console.log('sobre');
        roedorOver();
        addTooltip(btnAtckDwn,'Ataque hacia abajo');
        addRutaAtackDwn();
    }); 
    btnAtckDwn.on('mouseout',function(e){
        console.log('normal');
        roedorNormal();
        removeTooltip();
        removeEstelaAtaque();
    });
    /*Pieza Completa*/
    btnAtckPieza.on('mousedown',function(e){
        if(!disparando)
        {
        console.log('down');
        roedorDown();
        personaje.estado = 'pj_cbll_der_up';
        personaje.setAnimation('caminar_abajo');
//        removeDisparos();
        addMunicion();
        explosionHonda();
        disparando = true;
        }else
        {
            console.log('Btn inactivo');
        }      
    });
    btnAtckPieza.on('mouseover',function(e){
        roedorOver();
        /*Test Torre*/
//        addRutaAtackDere();
//        addRutaAtackIzq();
//        addRutaAtackUp();
//        addRutaAtackDwn();
        
        /*Test Alfil*/
        /*Test Dama*/
        /*Test Caballo*/
          addRutaAtackCaballoUpDer();
          addRutaAtackCaballoUpIzq();
          addRutaAtackCaballoDwnDer();
          addRutaAtackCaballoDwnIzq();
          addRutaAtackCaballoDerUp();
          addRutaAtackCaballoDerDwn();
          addRutaAtackCaballoIzqUp();
          addRutaAtackCaballoIzqDwn();
    }); 
    btnAtckPieza.on('mouseout',function(e){
        roedorNormal();
        removeTooltip();
        removeEstelaAtaque();
    });
            /*tooltip*/
tooltip = new Kinetic.Label({
    x: 100,
    y: 100,
    visible:false,
    opacity: 0.75,
    listening: false,
    text: {
    text: 'Indefinido',
    fontFamily: 'Calibri',
    fontSize: 18,
    padding: 5,
    fill: 'white'
    },
    rect: {
    fill: 'black',
    pointerDirection: 'down',
    pointerWidth: 10,
    pointerHeight: 10,
    lineJoin: 'round',
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: 10,
    shadowOpacity: 0.5
    }
});

panel_resultado = new Kinetic.Text({
        x: 0,
        y: escenario.getHeight()-48,
        text: 'indefinido',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#00ff00',
        width: escenario.getWidth(),
        height:53,
        padding: 20,
        align: 'center'
      });

fondo_panel = new Kinetic.Rect({
        x: 0,
        y: escenario.getHeight()-48,
        opacity:0.5,
        stroke: '#555',
        strokeWidth: 5,
        fill: '#000',
        width: escenario.getWidth(),
        height: panel_resultado.getHeight(),
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: [10, 10],
        shadowOpacity: 0.2,
        cornerRadius: 10
      });


/*estructura del juego por niveles*/
function nivelTorre(){
    console.log('Nivel 1: Torre');
}
function nivelAlfil(){
    console.log('Nivel 1: Alfil');
}
function nivelDama(){
    console.log('Nivel 1: Dama');
}
function nivelCaballo(){
    console.log('Nivel 1: Caballo');
}
function nivelPeon(){
    console.log('Nivel 1: Peon');
}
function nivelUno(){
//    if(banderaDuplicados) return;
//    banderaDuplicados = true;
    /*Elementos clave*/
//    objJuego.puntaje = 0;
    objJuego.llave = true;
    
    //si no tiene capa no se puede agregar ningun objeto
    CapaFondo = new Kinetic.Layer();
    CapaMenu = new Kinetic.Layer();
    var canvas = CapaFondo.getCanvas()._canvas;
    console.log(canvas);

//    fondo2 = new Kinetic.Layer();
    /*Escenario*/
    CapaFondo.add(new Fondo_escenario(imgFondoTierra));
//    grupoFiguras.add(new Plataforma(360, 180, 'SandyBrown'));	

    var enemigoEsp1 = new EnemigoFuerte(aleatorio((escenario.getWidth()/2)-60, escenario.getWidth()-120), aleatorio(0,escenario.getHeight()-90),imgEnemigoAni,framesEnemigoEsp); 
    var enemigoEsp2 = new EnemigoFuerte(aleatorio((escenario.getWidth()/2)-60, escenario.getWidth()-120), aleatorio(0,escenario.getHeight()-90),imgEnemigoAni,framesEnemigoEsp); 
    
    grupoFiguras.add(enemigoEsp1);
    grupoFiguras.add(new Enemigo(aleatorio((escenario.getWidth()/2)-60, escenario.getWidth()-120), aleatorio(0,escenario.getHeight()-90),imgEnemigo));
    grupoFiguras.add(enemigoEsp2);
    grupoFiguras.add(new Enemigo(aleatorio((escenario.getWidth()/2)-60, escenario.getWidth()-120), aleatorio(0,escenario.getHeight()-90),imgEnemigo));
    grupoFiguras.add(new Enemigo(300, 200,imgEnemigo));
    grupoFiguras.add(new Enemigo(500, 200,imgEnemigo));
    grupoFiguras.add(new Enemigo(700, 200,imgEnemigo));

    addEnemigos();
    /*Tablero*/
    var piso = new Plataforma(0, escenario.getHeight()-175,imgBorde);//,"brown");
    piso.setHeight(48);
    piso.setWidth(escenario.getWidth()*2);
   

    /*sucres*/
    grupoFiguras.add(new Sucres(400, escenario.getHeight()-100, imgSucres));
    grupoFiguras.add(new Sucres(700, escenario.getHeight()-200, imgSucres));
    grupoFiguras.add(new Sucres(600, escenario.getHeight()-300, imgSucres));
    /*pasadizo */
    grupoFiguras.add(new Pasadizo(escenario.getWidth()-100, escenario.getHeight()-95, imgPuerta));
    

    /*Campeon*/
    
    personaje.setX(posIniPjX);
    personaje.setY(posIniPjY);
    personaje.limiteDerecho = escenario.getWidth() - personaje.getWidth();
    personaje.limiteTope = escenario.getHeight();
   
    /*textura piedra*/
    piedra = new Plataforma(0, escenario.getHeight()-175,imgFondoPiedra);//,"brown");
    piedra.setHeight(144);
    piedra.setWidth(escenario.getWidth()*2);
    /*Barra de vida pj*/
    var recuadroVida = new Kinetic.Rect({
       x:118,
       y:escenario.getHeight()-50,
       stroke: 'limegreen',
       height: 20,
       width:200,
       strokeWidth: 2
    });
    barraVida = new Plataforma(120, escenario.getHeight()-50,imgVida);
    barraVida.setWidth(200);
    barraVida.setHeight(20);
    /*imgPersonaje*/
    avatarPj = new Avatar(65, escenario.getHeight()-65,imgAvatar1);
    avatarPj.setWidth(120);
    avatarPj.setHeight(120);
    avatarPj.setStroke('limegreen');
    avatarPj.setStrokeWidth(10);
    
//    crearCuadricula();
    crearTablero();
    
    console.log(avatarPj);
    
    /*Agregacion de elementos al escenario*/
    grupoFiguras.add(piso);


    CapaFondo.add(grupoFondo);
    CapaFondo.add(piedra);

    CapaFondo.add(grupoFiguras);
    CapaFondo.add(grupoAyudaGrafica);
    /*Agregar botones al escenario*/
    grupoMenu.add(btnAtckDere);
    grupoMenu.add(btnAtckIzq);
    grupoMenu.add(btnAtckUp);
    grupoMenu.add(btnAtckDwn);
    grupoMenu.add(btnAtckPieza);
    
    CapaFondo.add(grupoMenu);
    CapaFondo.add(personaje);
//    CapaMenu.add(grupoMenu);
    CapaFondo.add(tooltip);
    CapaFondo.add(fondo_panel);
    CapaFondo.add(panel_resultado);
    CapaFondo.add(recuadroVida);
    CapaFondo.add(barraVida);
    CapaFondo.add(avatarPj);

    /*verificar balas*/
    personaje.bala = [];
    console.log(personaje.bala.length);
    
    personaje.start();
    enemigoEsp1.start();
    enemigoEsp2.start();
    
    escenario.add(CapaFondo);



  

         /*Disparo por piezas*/

//    aparicionEnemy = setInterval(function(){
//		var enemy = new Enemigo(aleatorio((escenario.getWidth()/2)-60, 
//                escenario.getWidth()-120), aleatorio(0,escenario.getHeight()-90),
//                imgEnemigo);
//		grupoFiguras.add(enemy);
//		CapaFondo.add(grupoFiguras);
//		grupoEnemigos.push(enemy);
//                console.log(grupoEnemigos.length);
//	},5000);
         
//    intervalo = window.setInterval(frameLoop, 1000/55);

}
function nivelDos(){
    
    console.log('Nivel 2: iniciado');
    /*Elementos clave lvl2*/
//    if(banderaDuplicados) return;
//    banderaDuplicados = true;
    objJuego.nivel = 2;                    
    objJuego.llave = false;   
    
    CapaFondo = new Kinetic.Layer();
    /*Escenario*/
    CapaFondo.add(new Fondo_escenario(imgFondo));
    /*Enemigos*/
    grupoFiguras.add(new Enemigo(300, 300,imgEnemigo));
    grupoFiguras.add(new Enemigo(600, escenario.getHeight()-300, imgEnemigo));
    grupoFiguras.add(new Enemigo(150, 100,imgEnemigo));
    grupoFiguras.add(new Enemigo(450, escenario.getHeight()-450, imgEnemigo));
    /*Tablero*/
    var piso = new Plataforma(0, escenario.getHeight()-15, "brown");
    piso.setWidth(escenario.getHeight()*2);
    grupoFiguras.add(piso);
    /*sucres*/
    grupoFiguras.add(new Sucres(400, escenario.getHeight()-100, imgSucres));
    grupoFiguras.add(new Sucres(700, escenario.getHeight()-200, imgSucres));
    grupoFiguras.add(new Sucres(600, escenario.getHeight()-300, imgSucres));
    /*pasadizo */
    grupoFiguras.add(new Pasadizo(escenario.getWidth()-100, escenario.getHeight()-300, imgPuerta));
    grupoFiguras.add(new Llave(escenario.getWidth()/2, escenario.getHeight()/2, imgPremio));	

    personaje = new Campeon(imgCampeon,framesCampeon);
    personaje.setX(0);
    personaje.setY(escenario.getHeight() - (personaje.getHeight()+50));
    personaje.limiteDerecho = escenario.getWidth() - personaje.getWidth();
    personaje.limiteTope = escenario.getHeight();

    CapaFondo.add(grupoFondo);
    CapaFondo.add(grupoFiguras);
    CapaFondo.add(personaje);

    personaje.start();
    
    escenario.add(CapaFondo);
    
//         intervalo = window.setInterval(frameLoop, 1000/55);
}
/*Timer para movimiento Caballo*/
function explosionHonda()
{
        intvExplosion = setTimeout(function()
        {
            disparos.pop();
            var objDisparos = CapaFondo.children;
            for(var i in objDisparos)
            {
                objDisparo  = objDisparos[i];
                if(objDisparo instanceof Municion)
                {
                    objDisparo.remove();
                }
            }
            console.log('BOOM');
            disparando = false;
            
        },tiempoExplosion*1000);
        
}
/*Creando Enemigos */
function addEnemigos()
{
    var enemy = numeroEnemigos;
    enemy--;
    if(enemy === 0)
    {
        numeroEnemigos = 'Enemigos eliminados';
        return;
    }else
    {
        numeroEnemigos = enemy;
    }
   aparicionEnemigos = setTimeout(function(){addEnemigos();},5000);
}
function detenerAddEnemigos()
{
    clearTimeout(aparicionEnemigos);
}

function writeMessage(messageLayer, message) {
        var context = messageLayer.getContext();
        messageLayer.clear();
        context.font = '18pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, 10, 25);
      }

/*Tooltip*/
function addTooltip(Objbtn, msjTooltip){
    tooltip.setX(Objbtn.getX()+(Objbtn.getWidth()/2));
    tooltip.setY(Objbtn.getY()-10);
    tooltip.getText().setText(msjTooltip);
    tooltip.setVisible(true);
}
function removeTooltip(){
    tooltip.setVisible(false);
}
/*Estados del cursor*/
function roedorOver(){
    document.body.style.cursor = "url(img/cursor_game/apretado.cur), auto";
}
function roedorDown(){
    document.body.style.cursor = "url(img/cursor_game/apretado.cur), auto";
}
function roedorNormal(){
    document.body.style.cursor = "url(img/cursor_game/sobre.cur), auto";
}

function addMunicion(){
//    var fuego = new Municion(Objetivo1.getX(), Objetivo1.getY(), personaje, imgMunicion);
    if(disparando === false)
    {
        var fuego = new Municion(personaje,imgMunicion);
        CapaFondo.add(fuego);
        disparos.push(fuego);
    }else
    {
        console.log('No hay municion');
    }
}
function dispararMunicion(){
        for(var i in disparos)
        {
            var disparo =  disparos[i];
            if(personaje.estado === 'pj_dere')
                disparo.moverXposi();
            else if(personaje.estado === 'pj_izq')
                disparo.moverXnega();
            else if(personaje.estado === 'pj_top')
                disparo.moverYnega();
            else if(personaje.estado === 'pj_bot')
                disparo.moverYposi();
            else if(personaje.estado === 'pj_diag_sup_dere')
                disparo.moverDiagPosiDere();
            else if(personaje.estado === 'pj_diag_sup_izq')
                disparo.moverDiagPosiIzq();
            else if(personaje.estado === 'pj_diag_inf_dere')
                disparo.moverDiagNegaDere();
            else if(personaje.estado === 'pj_diag_inf_izq')
                disparo.moverDiagNegaIzq();
            else if(personaje.estado === 'pj_cbll_der_up')
                disparo.atackCaballoDerUp();

            if(disparo.getX() >= escenario.getWidth() || disparo.getY() <= 0 
                    || disparo.getY() >= escenario.getHeight() 
                    || disparo.getX() <= 0)// || personaje.estado === 'esperando')
            {
                    disparo.remove();
                    disparos.splice(i, 1);
                    console.log('municion eliminada '+disparos );
                    disparando = false;

            }
            removeDisparos();
        }
}
function removeDisparos(){
    disparos = disparos.filter(function(disparo){
            if (disparo && disparo.estado !== 'golpeo' 
                    && disparo.estado !== 'caballo')
            {
                return true;
            }//|| personaje.estado !== 'esperando' ) return true;
            return false;
        });
}

function crearTablero()
{
    /*Cuadricula 1*/
    for(var i = 0; i < escenario.getWidth() ; i = i+personaje.velocidad_x*2)
    {
        for(var j = 0; j < personaje.limiteInferior+personaje.getHeight() ; j = j+personaje.velocidad_y*2)
        {
            var estelaAyuda = new Kinetic.Rect({
              x: i,
              y: j,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'white',
              opacity:0.2,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
        }
    }
    /*Cuadricula 2*/
    for(var i = personaje.velocidad_x; i < escenario.getWidth() ; i = i+personaje.velocidad_x*2)
    {
        for(var j = personaje.velocidad_y; j < personaje.limiteInferior+personaje.getHeight() ; j = j+personaje.velocidad_y*2)
        {
            var estelaAyuda = new Kinetic.Rect({
              x: i,
              y: j,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'white',
              opacity:0.2,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
        }
    }
    grupoAyudaGrafica.setVisible(true);

}
function crearCuadricula(){
    /*Verticales*/
      for(var i = 0; i <= escenario.getWidth(); i = i+personaje.velocidad_x)
      {
         var vertical = new Kinetic.Line({
            points: [0, 100, escenario.getWidth(),100],
            stroke: 'limegreen',
            strokeWidth: 1,
            lineJoin: 'round',
            dashArray: [15, 5]
        });
          vertical.setPoints([i,0,i,posIniPjY+personaje.getHeight()]);
          grupoFiguras.add(vertical);

      }
      /*Horizontales*/
      for(var j = 0; j <= (posIniPjY+personaje.getHeight()); j = j+personaje.velocidad_y)
      {
         var horizontal = new Kinetic.Line({
            points: [0, 100, escenario.getWidth(),100],
            stroke: 'limegreen',
            strokeWidth: 1,
            lineJoin: 'round',
            dashArray: [15, 5]
        });
          horizontal.setPoints([0,j,escenario.getWidth(),j]);
          grupoFiguras.add(horizontal);

      }
    console.log('Cuadricula creada');
}
/*Rutas Torre*/
function addRutaAtackDere()
{
    var inicioX = personaje.getX()+personaje.getWidth();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = inicioX; i <= escenario.getWidth(); i = i+personaje.velocidad_x)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setX(i);
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
      }
}
function addRutaAtackIzq()
{
    var inicioX = personaje.getX()-personaje.getWidth();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = inicioX; i > -10; i = i-personaje.velocidad_x)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setX(i);
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
      }
}
function addRutaAtackUp()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()-personaje.getHeight()/2;
    
      for(var i = inicioY; i > -10; i = i-personaje.velocidad_y)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setY(i);
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
      }
}
function addRutaAtackDwn()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight();
    var inf = escenario.getHeight() - zonaPanel;
    
      for(var i = inicioY; i < inf; i = i+personaje.velocidad_y)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setY(i);
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
      }
}
/*Ruta Alfil*/
/*Rutas Caballo*/
function addRutaAtackCaballoUpDer()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = 0; i <= 2; i++)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.2,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setY(inicioY-i*personaje.velocidad_y);
          grupoAyudaGrafica.add(estelaAyuda);
      }
      
      var estelaAyuda = new Kinetic.Rect({
              x: inicioX+personaje.getWidth(),
              y: inicioY+personaje.getHeight(),
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'red',
              stroke: 'red',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
}
function addRutaAtackCaballoUpIzq()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = 0; i <= 2; i++)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.2,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setY(inicioY-i*personaje.velocidad_y);
          grupoAyudaGrafica.add(estelaAyuda);
      }
      
      var estelaAyuda = new Kinetic.Rect({
              x: inicioX-personaje.getWidth(),
              y: inicioY-personaje.getHeight(),
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'red',
              stroke: 'red',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
}
function addRutaAtackCaballoDwnDer()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = 0; i <= 2; i++)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.2,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setY(inicioY+i*personaje.velocidad_y);
          grupoAyudaGrafica.add(estelaAyuda);
      }
      
      var estelaAyuda = new Kinetic.Rect({
              x: inicioX+personaje.getWidth(),
              y: inicioY-personaje.getHeight(),
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'red',
              stroke: 'red',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
}
function addRutaAtackCaballoDwnIzq()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = 0; i <= 2; i++)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.2,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setY(inicioY+i*personaje.velocidad_y);
          grupoAyudaGrafica.add(estelaAyuda);
      }
      
      var estelaAyuda = new Kinetic.Rect({
              x: inicioX-personaje.getWidth(),
              y: inicioY+personaje.getHeight(),
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'red',
              stroke: 'red',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
}
function addRutaAtackCaballoDerUp()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = 0; i <= 2; i++)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.2,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setX(inicioX+i*personaje.velocidad_x);
          grupoAyudaGrafica.add(estelaAyuda);
      }
      
      var estelaAyuda = new Kinetic.Rect({
              x: inicioX+personaje.getWidth()*2,
              y: inicioY-personaje.getHeight()/2,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'red',
              stroke: 'red',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
}
function addRutaAtackCaballoDerDwn()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = 0; i <= 2; i++)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.2,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setX(inicioX+i*personaje.velocidad_x);
          grupoAyudaGrafica.add(estelaAyuda);
      }
      
      var estelaAyuda = new Kinetic.Rect({
              x: inicioX+personaje.getWidth()*2,
              y: inicioY+personaje.getHeight()/2,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'red',
              stroke: 'red',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
}
function addRutaAtackCaballoIzqUp()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = 0; i <= 2; i++)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.2,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setX(inicioX-i*personaje.velocidad_x);
          grupoAyudaGrafica.add(estelaAyuda);
      }
      
      var estelaAyuda = new Kinetic.Rect({
              x: inicioX-personaje.getWidth()*2,
              y: inicioY-personaje.getHeight()/2,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'red',
              stroke: 'red',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
}
function addRutaAtackCaballoIzqDwn()
{
    var inicioX = personaje.getX();
    var inicioY = personaje.getY()+personaje.getHeight()/2;
    
      for(var i = 0; i <= 2; i++)
      {
          var estelaAyuda = new Kinetic.Rect({
              x: inicioX,
              y: inicioY,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'limegreen',
              stroke: 'limegreen',
              opacity:0.2,
              strokeWidth: 1,
              visible: true
          });
          estelaAyuda.setX(inicioX-i*personaje.velocidad_x);
          grupoAyudaGrafica.add(estelaAyuda);
      }
      
      var estelaAyuda = new Kinetic.Rect({
              x: inicioX-personaje.getWidth()*2,
              y: inicioY+personaje.getHeight()/2,
              width: personaje.velocidad_x,
              height: personaje.velocidad_y,
              fill: 'red',
              stroke: 'red',
              opacity:0.4,
              strokeWidth: 1,
              visible: true
          });
          grupoAyudaGrafica.add(estelaAyuda);
          grupoAyudaGrafica.setVisible(true);
}

function removeEstelaAtaque()
{
    grupoAyudaGrafica.setVisible(false);
    grupoAyudaGrafica.removeChildren();
}
function moverPersonaje()
{
    
    if(teclado[65] )
    {
        //caminando
          if(!teclado.estado)
          {
            personaje.setAnimation('caminar_izq');
            removeEstelaAtaque();
            personaje.retroceder();
            teclado.estado = true;
          }
//          personaje.estado = 'esperando';
          teclado.estado = true;
      }else if(teclado[68] )
      {
        //caminando
          if(!teclado.estado)
          {
            personaje.setAnimation('caminar_dere');
            removeEstelaAtaque();
            personaje.caminar();
            teclado.estado = true;
          }
//          personaje.estado = 'esperando';
          teclado.estado = true;
      }else if(teclado[87] )
      {
          //caminando
          if(!teclado.estado)
          {
              personaje.setAnimation('caminar_arriba');
              removeEstelaAtaque();
              personaje.subir();
              teclado.estado = true;
          }
//          personaje.estado = 'esperando';
          teclado.estado = true;
      }else if(teclado[83] )
      {
        if(!teclado.estado)
        {
            personaje.setAnimation('caminar_abajo');
            removeEstelaAtaque();
            personaje.bajar();
            teclado.estado = true;
          }
//          personaje.estado = 'esperando';
          teclado.estado = true;
      }else
      {//sino espera
          teclado.estado = false;
      }

}
function actualizarDisparos()
{
//    	if(personaje.bala.length > 0){
            for(var i in personaje.bala)
            {
                personaje.bala[i].moverX();
                if(personaje.bala[i].getX() >= escenario.getWidth() 
                        || personaje.bala[i].getY() <= 0 
                        || personaje.bala[i].getX() < 0 
                        || personaje.bala[i].getY() < 0)
                {
                    personaje.bala[i].remove();
                    //fondo2.removeChildren();
                    personaje.bala.splice(i, 1);
		}
            }
            
//            if (disparos.length > 0) {
                        for (var i = 0; i < disparos.length; i++) {
                                disparos[i].mover();

                                if(disparos[i].getX() >= escenario.getWidth() || disparos[i].getY() <= 0 ){
                                        disparos[i].remove();
                                        disparos.splice(i, 1);
                                }
                        }
//                }
//	}
}
function agregar_Evento_Teclado()
{
    agregar_Eventos(document, "keydown", function (e){
        //Ponemos verdadero a la tecla que se presiono
        teclado[e.keyCode] = true;
        //console.log(e.keyCode);
        
    });
    agregar_Eventos(document, "keyup", function (e){
        //Ponemos falso a la tecla que dejo de ser presionada
        teclado[e.keyCode] = false;
        //console.log(e.keyCode);
    });
    function agregar_Eventos(elemento, nombre_Evento, funcion)
    {
        if (elemento.addEventListener)
        {
            //Navegadores nuevos
            elemento.addEventListener(nombre_Evento, funcion, false);
        }else if(elemento.attachEvent)
        {
            //IE viejo
            elemento.attachEvent(nombre_Evento, funcion);
        }
    }
}

function colisiona(Obj1, Obj2)
{
    var colision = false;
    //colision horizontal
    if(Obj2.getX() + Obj2.getWidth() >= Obj1.getX() && Obj2.getX() < Obj1.getX() + Obj1.getWidth())
    {
        //colision vertical
        if(Obj2.getY() + Obj2.getHeight() >= Obj1.getY() && Obj2.getY() < Obj1.getY() + Obj1.getHeight())
        {
           colision = true; 
        }        
    }
    //colision de Obj1 con Obj2
    if(Obj2.getX() <= Obj1.getX() && Obj2.getX() + Obj2.getWidth() >= Obj1.getX() + Obj1.getWidth())
    {
        if(Obj2.getY() <= Obj1.getY() && Obj2.getY() + Obj2.getHeight() >= Obj1.getY() + Obj1.getHeight())
        {
               colision = true; 
        }        
    }    
    //colision de Obj2 con Obj1
    if(Obj1.getX() <= Obj2.getX() && Obj1.getX() + Obj1.getWidth() >= Obj2.getX() + Obj2.getWidth())
    {
        if(Obj1.getY() <= Obj2.getY() && Obj1.getY() + Obj1.getHeight() >= Obj2.getY() + Obj2.getHeight())
        {
               colision = true; 
        }        
    }
    return colision;
}

function fuerzas_fisicas()
{
    personaje.caidaGravedad(gravedad, valor_revote);
}

function moverEnemigos()
{
    var enemigos = grupoFiguras.children;
    for(var i in enemigos)
    {
        var enemigo = enemigos[i];
        if(enemigo instanceof Enemigo) //
        //enemigo.aparecer();
        enemigo.mover();
          
    }
}
function detectarColicion()
{
    var ObjsGenerico = grupoFiguras.children;
    for(i in ObjsGenerico)
    {
        var ObjGenerico = ObjsGenerico[i];
        if (colisiona(ObjGenerico, personaje))
        {
            if (ObjGenerico instanceof Enemigo )
            {
                if(personaje.velocidad_y > 2 && personaje.getY() < ObjGenerico.getY())
                {
                    ObjGenerico.remove();
                    objJuego.puntaje +=5;
                    console.log(objJuego.puntaje);
                }else
                {
                    
                    
                    if (objJuego.vidas > 1)
                    {
                        personaje.setX(posIniPjX);
                        personaje.setY(posIniPjY);
                        objJuego.vidas--;
                        grupoFiguras.removeChildren();
                        grupoMenu.removeChildren();
                        terminarJuego();
                        nivelUno();
                        
                    }                    
                    else// if(objJuego.vidas  == 0)
                    {
                        grupoFiguras.removeChildren();
                        grupoMenu.removeChildren();
                        terminarJuego();
                        escenario.setWidth(escenario.getWidth());
                        document.querySelector('#perdedor').style.display = 'block';
                        document.querySelector('#tutor0').style.display = 'none';
                        document.querySelector('#iniciaTutor').style.display = 'none';
                        document.querySelector('#iniciaTutor2').style.display = 'none';
                        document.querySelector('#winner').style.display = 'none';

                        document.querySelector('#puntaje').innerHTML = 'Tu puntuacion es: '+objJuego.puntaje;
                    }
                    
                    
                }
            }else if (ObjGenerico instanceof Llave )
            {
                ObjGenerico.remove();
                objJuego.llave = true;
                continue;
            }else if(ObjGenerico instanceof EnemigoFuerte)
            {
                objJuego.vidas--;
                personaje.setX(posIniPjX);
                personaje.setY(posIniPjY);
                barraVida.setWidth(barraVida.getWidth()*(objJuego.vidas)*0.3);
                console.log(barraVida.getWidth());
            }
            
//            else if (ObjGenerico instanceof Plataforma && personaje.getY() < ObjGenerico.getY() && personaje.velocidad_y >=0)
//            {
//                //personaje.contador = 0;
//                personaje.setY(ObjGenerico.getY() - personaje.getHeight());
//                personaje.velocidad_y *= valor_revote;
//                console.log('Enmigo golpe');
//            }
            else if(ObjGenerico instanceof Sucres)
            {
                ObjGenerico.remove();
                objJuego.puntaje += 10;
            }
            else if(ObjGenerico instanceof Pasadizo && objJuego.llave)
            {
                ObjGenerico.remove();
                if(objJuego.nivel == 1)
		{
                    
                    grupoFiguras.removeChildren();
                    document.querySelector('#iniciaTutor2').style.display = 'block';
                    document.querySelector('#perdedor').style.display = 'none';
                    document.querySelector('#iniciaTutor').style.display = 'none';
                    document.querySelector('#tutor0').style.display = 'none';
                    document.querySelector('#winner').style.display = 'none';
                    
                    document.querySelector('#puntaje').innerHTML = 'Tu puntuacion es: '+objJuego.puntaje;
                    terminarJuego();

                    
		}if(objJuego.nivel == 2)
		{
                    grupoFiguras.removeChildren();
                    document.querySelector('#winner').style.display = 'block';
                    document.querySelector('#perdedor').style.display = 'none';
                    document.querySelector('#iniciaTutor2').style.display = 'none';
                    document.querySelector('#iniciaTutor').style.display = 'none';
                    document.querySelector('#tutor0').style.display = 'none';
                    
                    document.querySelector('#puntaje').innerHTML = 'Tu puntuacion es: '+objJuego.puntaje;
                    terminarJuego();
                    
		}
			
            }else if(ObjGenerico instanceof Pasadizo && !objJuego.llave)
            {
                console.log('Haz olvidado conseguir la llave');
            }

        }
        
        for(var i in disparos)
        {
            var disparo = disparos[i];
            if(colisiona(ObjGenerico, disparo))
            {
                if(ObjGenerico instanceof Enemigo)
                {
                    
                    disparo.remove();
                    ObjGenerico.remove();
                    disparo.estado = 'golpeo';
//                    disparos.estado = 'caballo';
                    console.log('Obj. eliminado');                
                    disparando = false;
                    
                }
                
            }
        }
            
    }
    
    
}
function terminarJuego()
{
    window.clearInterval(intervalo);
    window.clearInterval(disparoPersonaje);
   // window.clearInterval(aparicionEnemy);
    detenerAddEnemigos();
//    banderaDuplicados = false;
}
function moverEscenario()
{
    if(personaje.getX() <= 0 && teclado[37])
    {
        console.log('no puedo retroceder');
    }else if(personaje.getX() >= escenario.getWidth() && teclado[39])
    {
        console.log('no puedo avanzar');
    }
    else if(personaje.getX() > (escenario.getWidth()/2) && teclado[39])
    {
        console.log(personaje.getX());
        personaje.velocidad_x = 2;
        for(var i in grupoFiguras.children)
        {
            var figura = grupoFiguras.children[i];
            figura.move(-5,0);
        }
    }else if(teclado[37])
    {
        console.log(personaje.getX());
        for(var i in grupoFiguras.children)
        {
            var figura = grupoFiguras.children[i];
            figura.move(5,0);
        }
    }else
    {
        personaje.velocidad_x = 10;
    }
}

function actualizarPanel()
{
    fondo_panel.setHeight(panel_resultado.getHeight());
    panel_resultado.setText('\t'+objJuego.nombreAvatar+' ATACK'
            + '\tVIDAS:'+ objJuego.vidas +'\tPUNTOS:\t'+objJuego.puntaje
            + '\tLLAVES: '+objJuego.llave +'\tNivel: '+objJuego.nivel
            +'\tN.Enemigo: '+numeroEnemigos
            +'\tDisparo: '+disparando);
}

function aleatorio(inferior, superior)
{
    var posibilidades = superior - inferior;
    var a = Math.random() * posibilidades;
    a = Math.floor(a);
    return parseInt(inferior)+a;
}

agregar_Evento_Teclado();

var iniciarAnimacion = new Kinetic.Animation(function(frame) {
//    var time = frame.time,
//        timeDiff = frame.timeDiff,
//        frameRate = frame.frameRate;
//    console.log(time + ' : '+timeDiff + ' : '+frameRate);
    /*Aplicando eventos*/
    detectarColicion();
    moverPersonaje();
    actualizarPanel();
    dispararMunicion();
//    removeEnemyEscenario();
    
    
  }, CapaFondo);

  iniciarAnimacion.start();  

//function frameLoop()
//{
////    moverEscenario();
//    detectarColicion();
//    moverPersonaje();
//    moverEnemigos();
////    actualizarPanel();
//    dispararMunicion();
// 
//        for(var i in grupoEnemigos)
//        {
//            if(grupoEnemigos[i].lenght>=1)
//            {
//                grupoEnemigos[i].remove();
//                grupoEnemigos[i].splice(i,1);
//            }
//        }
//
////
//escenario.draw();
//    
//}