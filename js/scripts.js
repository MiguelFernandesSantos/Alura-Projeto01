function listener(){

    let btn = document.getElementById('criptografar');
    btn.addEventListener("click", criptografar);


}

function criptografar(){

    let mensagem = document.getElementById("mensagem").value;
    let mensagem_crip = '';

    if(mensagem.length > 0){

        for(let i = 0; i < mensagem.length; i++){

            switch(mensagem[i]){

                case "e":
                    mensagem_crip = mensagem_crip + "enter";
                    break;

                case "i":
                    mensagem_crip = mensagem_crip + "imes";
                    break;
                
                case "a":
                    mensagem_crip = mensagem_crip + "ai";
                    break;
                
                case "o":
                    mensagem_crip = mensagem_crip + "ober";
                    break;
                
                
                case "u":
                    mensagem_crip = mensagem_crip + "ufat";
                    break;

                default:
                    mensagem_crip = mensagem_crip + mensagem[i];

            }

        }

        document.getElementById("criptografado").value = mensagem_crip;

    }else{

        alert("Nenhum texto digitado!!");

    }

}

document.addEventListener("DOMContentLoaded", listener);