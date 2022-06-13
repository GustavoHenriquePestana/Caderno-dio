# Intodução ao HTML 5
 - História e estrutura básica.
 - Semântica.
 - Principais Elementos HTML.

Html foi criado em 1991 por Tim Bermers-Lee, pela necessidade de compartilhar arquivos.

- HTML1 - 1991.
- HTML2 - 1995.
- HTML3 - 1997.
- HTML4 - 1997.
- HTML5 - 2014.


O elemento é a base do HTML, tudo no Html tem um elemento. O elemento é composto por: tag de abertura, tipo do elemento , pode ter atributo, conteudo e tag de fechamento em alguns casos.

ex: < h1 class="Titulo"> Titulo </ h1>

## Estrura Básica

    <!DOCTYPE html>

    <html>
        <head>
        <meta>
            <title> </title>
        </head>
        <body>
        </body>
    </html> 


## Definição da Estrutura Básica

### <! DOCTYPE html >
 - Ele diz ao navegador que ele está lidando com um arquivo do tipo HTML 5.

### < HTML>
 - É a raiz do seu documento, todos os elementos HTML devem estar dentro dela. E nela informamos ao navegador qual é o idioma desse documento, através do atributo lang, para o português do brasileiro usamos o pt-br.

### < HEAD>
 - A tag Head contém elementos que serão lidos pelo navegador como os metadados, um exemolo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o css através de style e link.

### < BODY>
- É dentro da tag body que colocamos todo o conteúdo visivel ao usuário: texto, imagens e videos.


## Semântica

Durante muitos anos o elemento padrão no HTML era a div, contruimos nosso conteúdo todo baseado nela, e assim tinhamos uma sopa de divs.

Com a 5° versão do HTML, vieram a várias mudanças importantes, como performace e acessibilidade.

A semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div:

### < section>

 - Representa uma seção genérica de conteúdo quando não houver um elemento mais especifico para isso.

### < header>
 - É o cabeçalho da págiba ou de uma seção da página e normalmente contém logo tipos, menus, campos de busca.

### < article>
 - Representa um contéudo independente e de maior relevância dentro de uma página, como um post de blog, uma noticia em uma barra lateral ou um bloco de comentários. Um article pode conteer outros elementos, como header, cabeçalhos, parágrafos e imagens.

### < Aside>
 - É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do ator e publicidade.

### < Footer>
 - Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article, section e até o body. Exemplo de conteúdo < footer> são informações de autor e links relacionados.

### < h1> - < h6>
 - Eles não foram criados na versão 5. São utilizados para marcar a importância dos titulo, sendo h1 o mais importância e o h6, com a menor importância.



 ### Textos e Links
  - Para textos maiores e mais densos, usamos o elemento < p>. < p> representa um paragrafo, mas ele suporta mais que texto, como por exemplo imagens, códigos, vídeos, etc.
  - Tem vários atributos, mas o foco aqui serão apenas o href e o target.
  - href - representa um hiperLink para onde sua âncora aponta, pode ser uma página do seu site, ou de outro site externo, um e-mail ou mesmo um telefone, os últimos dois precisam dos préfixos mailto: e tel:, respectivamente.
  - Target serve para nos ajudar a abrir nossos links em outras abas do navegador, usando o valor _blank

  ### Imagens

  - < img> é um daqueles elementos sem tag de fechamento.
  - tem apenas 2 atributos, src e alt.
  - src é obrigatório e guarda o caminho para a imagem que pretende mostrar na página.
  - O alt não é obrigatório mas é altamente recomendado por melhorar a acessibilidade, ele mostra a descrição da imagem.

  ### Listas

  - < ul>, < ol> e < li>.
  - servem para agrupar uma coleção de itens, como uma lista de ingredientes.
  - < ul> - Cria listas não odernadas.
  - < ol> - Cria listas ordenadas.
  - < li> - Cria itens nas listas.
  