// This is a JavaScript file
$(document).on("click", "#alerta", function(){
    function retorno(){
        retorno
    }
    navigator.notification.alert("Que comece os jogos, só existe uma opção:", retorno, "Jogos Mortais", "Aceito");
});
$(document).on("click","#confirme", function(){
    function confirma(buttonIndex){
        if(buttonIndex == "1"){
            navigator.notification.alert("Errou, jacaré foi pro lago e morreu ");
        } else if(buttonIndex == "2") {
            navigator.notification.alert("Errou, jacaré atravessou a pista e morreu");
        } else {
            navigator.notification.alert("Se saiu é pq tu é fraco!");
        }
    }
    navigator.notification.confirm("Escolha jacaré vai para a PISTA(A) ou vai para o LAGO(B)", confirma, "Escolha:", ['B', 'A']);
});
$(document).on("click","#beep",function(){
    if(navigator.notification.beep) {
        navigator.notification.beep(4);
    } else {
        navigator.notification.alert("Seu dispositivo não é compatível, atualize o android ou jogue fora seu Iphone!");
    }
});
$(document).on("click","#vibrar",function(){
    if(navigator.vibrate){
        navigatior.vibrate(2000);
    } else {
        navigator.notification.alert("Seu dispositivo não é compatível, atualize o android ou jogue fora seu Iphone!");
    }
    
});