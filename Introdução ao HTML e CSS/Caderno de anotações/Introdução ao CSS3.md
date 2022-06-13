# Introdução ao CSS3
 - O que são seletores.
 - Conceitos básicos.
 - Principais seletores.

 ## Definição
 - Após a criação do HTML a necessidade de formatar as páginas ficou evidente, assim, em 1996, foi criada a linguagem de estilo que conhecemos por css.

 - Pode ser explicado em uma frase: "Você cria regras de estilos para elementos ou grupo de elementos."

exemplo:

    (seletores)

    a, p, h1, h3 {
    
    color: blue; 
    font size: 14px;
    
    (declarações)
}

 - É representada por um seletor ou um grupo de seletores.
 - Dentro de um par de chaves adicionamos as declarações.
 - Podemos colocar várias seletores em uma regra separando-os por virgula.

 ## ID x Class

 - ID - é representada pelo simbolo #(hash) seguido de um nome para esse ID.
 - Class - a class é representada de forma parecida do ID, mas é precida por um ponto em vez do has.

 - O ID só pode ser usado uma vez em uma página html, enquato  class, não tem restrições.

 ## Box-Model
 - O navegador representa cada eleemento HTML como uma caixa retângular, isso é o box-model. é com css que alternamos a aparência dessa caixa.

 - É composta por 4 áreas: as margens(margin): são espaçamentos entre elementaos; as bordas (border); o padding é um espaçamento entre as bordas e o conteúdo, a diferença para as margens é que declarações de imagem de fundo funcionam nele; o conteudo(content) é o que seu bloco representa, um texto, uma imagem, um vídeo;

 ## Estilizando 

 - Font-family - alterar a fornte dos nossos textos, como uma fonte da internet ou uma que esteja instalada no nosso computador. Mas vamos nos ater às fontes seguras, chamadas de web safe fonts. São chamadas assim porque são encontradas em quase todos os sistemas.

 - Font-size - alterar o tamanho.

 - Border-radius - arrendonda um elemento.
 
 - texto-transform - Muda a formatação das letras.
 
 - text-decoration - decora o texto com linhas.
 
 - List-style-type - Muda os marcadores da lista.

 - List-style-image: url("imagem"); - Muda o marcador para imagens.

 ## Dimensões e Alimento

 - Width - Largura
 - Heigth - Altura

 - margin - pode alinhar elementos.

 - text align - alinha textos.