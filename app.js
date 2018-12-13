    var resultado1 = 0; 
    var resultado2 = 0;
    var current1 = 0;
    var numero = 0
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
document.querySelector("#rol").addEventListener('click', function(){
    
     numero = Math.round(Math.random() * 5 + 1 );
    document.getElementById("dice").src = `dice-${numero}.png`;   
    validar();
})
function validar(){
    if(document.getElementsByClassName("player-0-panel")[0].classList.contains("active")) {
        jugador1()
    } else {
        jugador2()
    }
}

function jugador1(){
    if(numero > 1){
        current1 = current1 + numero;        
    } else{
        current1 = 0;
        document.getElementsByClassName("player-0-panel")[0].classList.remove("active")
        document.getElementsByClassName("player-1-panel")[0].classList.add("active");
        jugador2();
    }
    document.getElementById("current-0").innerHTML = current1;    
}
function jugador2(){
    if(numero > 1){
        current1 = current1 + numero;        
    } else{
        current1 = 0;
        document.getElementsByClassName("player-1-panel")[0].classList.remove("active")
        document.getElementsByClassName("player-0-panel")[0].classList.add("active");  
        jugador1();  
    }
    document.getElementById("current-1").innerHTML = current1;    
}

document.querySelector(".btn-hold").addEventListener("click",function(){
    if(document.getElementsByClassName("player-0-panel")[0].classList.contains("active")){
        document.getElementsByClassName("player-0-panel")[0].classList.remove("active")
        document.getElementsByClassName("player-1-panel")[0].classList.add("active");
        resultado1 = resultado1 + current1;
        document.getElementById("score-0").innerHTML = resultado1;
        current1 = 0;
        document.getElementById("current-0").innerHTML = current1;
        } else {
        document.getElementsByClassName("player-1-panel")[0].classList.remove("active")
        document.getElementsByClassName("player-0-panel")[0].classList.add("active");
        resultado2 = resultado2 + current1;
        document.getElementById("score-1").innerHTML = resultado2;
        current1 = 0;
        document.getElementById("current-1").innerHTML = current1;
        }  
        if(resultado1 > 19){
            document.getElementById("current-0").innerHTML = "WIN";
            document.getElementById("current-1").innerHTML = "LOSE";
            let r1 = document.getElementById("rol");
            r1.remove("rol");
            let h1 = document.getElementById("hold")
            h1.remove();
        } else if (resultado2 > 19){
            document.getElementById("current-1").innerHTML = "WIN";
            document.getElementById("current-0").innerHTML = "LOSE";
            let r1 = document.getElementById("rol");
            r1.remove("rol");
            let h1 = document.getElementById("hold")
            h1.remove();
        }      
})

    







