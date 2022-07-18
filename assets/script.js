var Numero_Atual_Wrapper = document.getElementById("Numero_Atual");
var Numero_Atual = 0;

function increment(){   

Numero_Atual = Numero_Atual +1;
Numero_Atual_Wrapper.innerHTML = Numero_Atual;

console.log(Numero_Atual);
if (Numero_Atual > 9) {
    
    document.getElementById("soma").disabled = true;
    alert("Não podemos passar de 10!");
}   

    }

function decrement(){
    Numero_Atual = Numero_Atual - 1;
    Numero_Atual_Wrapper.innerHTML = Numero_Atual;

    if (Numero_Atual <= 9){

        document.getElementById("soma").disabled = false;
     }
    //if (Numero_Atual < 0) {console.log("Negativo");}
}




