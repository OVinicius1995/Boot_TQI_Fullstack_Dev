var Numero_Atual_Wrapper = document.getElementById("Numero_Atual");
var Numero_Atual = 0;

function increment() {

    //Icrementa mais um no valor ao clicar no botão de soma.
    Numero_Atual = Numero_Atual + 1;
    //Passa o valor na tela através do InnerHtml
    Numero_Atual_Wrapper.innerHTML = Numero_Atual;

    //console.log(Numero_Atual);

    //Valida se o número exibido na tela é maior que 10, e se verdadeiro ele desabilita o botão de soma.
    if (Numero_Atual > 9) {

        document.getElementById("soma").disabled = true;
        alert("Não podemos passar de 10!");
    }

}

function decrement() {
    Numero_Atual = Numero_Atual - 1;
    Numero_Atual_Wrapper.innerHTML = Numero_Atual;

    //Valida se o número exibido na tela é menor que 10, e se verdadeiro ele reabilita o botão de soma.
    if (Numero_Atual <= 9) {

        document.getElementById("soma").disabled = false;
    }
    //if (Numero_Atual < 0) {console.log("Negativo");}
}




