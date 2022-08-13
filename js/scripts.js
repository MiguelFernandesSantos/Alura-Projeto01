function listener(){

    let btnCrip = document.getElementById('criptografar');
    btnCrip.addEventListener("click", criptografar);
    let btnDesc = document.getElementById('descriptografar');
    btnDesc.addEventListener("click", descriptografar);

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

function descriptografar(){

    let mensagem = document.getElementById("mensagem").value;
    let mensagem_desc = '';

    if(mensagem.length > 0){

        for(let i = 0; i < mensagem.length; i++){

            switch(mensagem[i]){

                case "e":
                    mensagem_desc = mensagem_desc + "e";
                    i = i + 4;
                    break;

                case "i":
                    mensagem_desc = mensagem_desc + "i";
                    i = i + 3;
                    break;
                
                case "a":
                    mensagem_desc = mensagem_desc + "a";
                    i = i + 1;
                    break;
                
                case "o":
                    mensagem_desc = mensagem_desc + "o";
                    i = i + 3;
                    break;
                
                
                case "u":
                    mensagem_desc = mensagem_desc + "u";
                    i = i + 3;
                    break;

                default:
                    mensagem_desc = mensagem_desc + mensagem[i];

            }

        }

        document.getElementById("criptografado").value = mensagem_desc;

    }else{

        alert("Nenhum texto digitado!!");

    }


}

document.addEventListener("DOMContentLoaded", listener);