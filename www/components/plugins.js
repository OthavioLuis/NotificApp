// This is a JavaScript file

$(document).on("click", "#alerta", function(){
    
    function retorno(){
        retorno
    }
    navigator.notification.alert("Olá, jogador:", retorno, "Aviso!", "Aceito");
});
$(document).on("click","#confirme", function(){
    function confirma(buttonIndex){
        if(buttonIndex == "1"){
            navigator.notification.alert("Errou, jacaré atravessou a pista e morreu");
        } else {
            navigator.notification.alert("Errou, jacaré foi pro lago e morreu");
        }
    }
    navigator.notification.confirm("Escolha jacaré vai para a PISTA(A) ou vai para o LAGO(B)", confirma, "Escolha:", ['A', 'B']);
});
$(document).on("click","#beep",function(){
    navigator.notification.beep(4);
});
$(document).on("click","#vibrar",function(){
    navigator.vibrate.vibrar;
});