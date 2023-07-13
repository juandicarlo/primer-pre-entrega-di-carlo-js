String.prototype.replaceAt=function(index, character) 
{ return this.substring(0, index) + character + this.substring(index+character.length); } 

const button=document.querySelector('#calcular');
const palabras=['romero','benedetto','langoni','varela'];

const palabra= palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g,"_ ");

let contadorFallos=0;

document.querySelector('#output').innerHTML = palabraConGuiones;
button.addEventListener('click',()=>{
    let letra=document.querySelector('#letra').value;
    letra=letra.toLowerCase();
    let haFallado=true;
    for(const i in palabra){
        if(letra==palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado=false;
        }
    }

    if(haFallado){
       contadorFallos++;
       document.querySelector('#ahorcado').style.backgroundPosition= -(180*contadorFallos)+'px 0px'; 
       if(contadorFallos>2){
        document.querySelector('#ahorcado').style.backgroundPosition= -(198*contadorFallos)+'px 220px';
       }
       if(contadorFallos>=5){
        document.querySelector('#resultado').innerHTML="Perdiste, sos de riber.";
        document.getElementById('resultado').style.backgroundColor="#740707";
        
        button.disabled=true;
       }
    }else{
        if(palabraConGuiones.indexOf('_')<0){
            document.querySelector('#resultado').innerHTML="¡Ganaste! ¡Aguante bokita!";
            document.getElementById('resultado').style.backgroundColor="#0c5ca7";
            button.disabled=true;
        }
    }

    
       
    document.querySelector('#output').innerHTML=palabraConGuiones;
    
});