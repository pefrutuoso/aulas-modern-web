// coleta todas as ocorrencias da tag <p>
window.onload = function(){
    // criei uma variavel com ono meparagrafo, acessei o dom do meu index.html e pedi pra selecionar todos os elementos "p"
    const paragrafos = document.querySelectorAll("p");

    // exibe todos os paragrafos
    console.log(paragrafos);

    // exibe o paragrafo na posição 2
    console.log(paragrafos[2]);

    console.log(paragrafos[3].nodeName);


}



// modificando a estrutura do html usando javascript e dom

// document.createElement()     Cria um novo elemento HTML.
// document.removeChild()       Remove um elemento HTML.
// document.appendChild()       Adiciona um elemento HTML.
// document.replaceChild()      Substitui um elemento HTML.
// document.write()             Escreve dentro de um elemento HTML.


// criei uma variável chamada mensagem, acessei o document, pedi para ele escrever usando o comando write, e passei a frase que eu gostaria que ele escrevesse
let mensagem = document.write("Olá mundo do JS!");


// copiando o conteudo de texto no div A e passando para o div B
window.onload = function(){
    document.getElementById("B").textContent = document.getElementById("A").innerHTML;
    document.getElementById("A").innerHTML = "";


// lista de comandos JavaScript para modificação do DOM
// element.innerHTML = novo conteúdohtml           Altera o interior de um elemento HTML.
// element.attribute = novo valor                  Muda o atributo valor de um elementoHTML.
// element.setAttribute (atributo,valor)           Muda o atributo valor de um elementoHTML.
// element.style.property = novoestilo             Altera o estilo de um elemento HMTL.

    // alterando estilo
    document.getElementById("A").style.backgroundColor = "green";


    // acesso as tags div
    let elemento = document.getElementsByTagName("div");


    // o for varreu o numero de elementos divs que tem no index.html
    for(let i=0; i < elemento.length; i++){
    elemento[i].classList.add("texto-branco");
    elemento[0].classList.remove("texto-branco");
    }


    let elemento2 = document.getElementsByClassName("texto-branco");
    for(let i=0; i <elemento2.length; i++){
        elemento2[i].style.color = "yellow";
    }
}



// eventos
// onchange          Quando um elemento HTML foi mudado.
// onclick           Quando um elemento é clicado
// onmouseover       Quando o mouse passa por cima de um elemento.
// onmouseout        Quando o mouse sai de cima de um elemento.
// onkeydown         Quando uma tecla do teclado é digitada.
// onload            Quando uma página é carregada.

function clique(){
    alert("Hello, World!");
}