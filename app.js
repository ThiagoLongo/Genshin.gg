function pesquisar(){ // '()' indica ser uma função nesse caso é para o botao funcionar 

//console.log(dados); //Imprime no console o valor completo da variável 'dados'. o colchete [] serve para indicar qual elemento quero mostrar do meus dado
//se eu colocar 'dados.descricao' por exemplo eu vou mostrar apenas a descricao

let section = document.getElementById("resultados-pesquisa"); //'document' é a forma de acessar o documento em html
//'.getElementById é pra pegar o id 

let campoPesquisa = document.getElementById("campo-pesquisa").value
 
    if(!campoPesquisa){ // '==' é para comparar   //no cao se a pessoa nao digitar nada aparece a mensagem 
        section.innerHTML = "<p>Nenhum resultado foi encontrado, digite um personagem de genshin</p>"
        return;
    }  

campoPesquisa = campoPesquisa.toLowerCase(); //tranforma tudo que a pessoa digitar em letra minuscula

//o ideal é declarar variavel antes do loop for
let resultados = ""; //variavel 'resultados'

let titulo = ""; //variavel 'titulo'
let descricao = ""; //variavel descricao
let tags = "";

//para cada dado dentro da lista de dados
for (let dado of dados){ //para cada dado da 'função que eu quero' 
    titulo = dado.titulo.toLowerCase();
    descricao = dado.titulo.toLowerCase(); //tranforma tudo que a pessoa digitar em letra minuscula para que na hora se o usuario digitar com maiusculo n de problema na pesquisa
    tags = dado.titulo.toLowerCase();
//com a sintaxe '${função.LocalDoQueQueroMostrar}' to puxando nos dados la em 'dados.js' na função 'dados' na posição 0 que no caso é da kokomi
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){   //se titulo includes campo-pesquisa, ent faça...  
//+= soma uma na outra em vez de sobrepor
//o + ta fazendo assim: sangonomiya kokomi + yelan + neuvillete 
        resultados += `  
        <div class="item-resultado"> 
        <h2> ${dado.titulo} </h2> 
        <p class="descricao-meta">${dado.descricao}</p><br>
        <a href=${dado.link}target="_blank">Acesse aqui para informaçoes sobre suas melhores builds!</a>
        </div>
`;
    }
}

if (!resultados) {
    resultados = "<p>Nenhum resultado foi encontrado</p>"
}

section.innerHTML = resultados 
}