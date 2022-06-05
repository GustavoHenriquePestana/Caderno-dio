# TCP/IP
 - São protocolos de comunicação entre computadoees
 - TCP - Transmission Control Protocol - Protocolo de controle de transmisção.
 - IP - Internet Control

#### Usam modelos de Camadas, uma comunicação passa por 4 camadas

 - 1 - Física (ex. placa de rede)
 - 2 - Rede (ex. IP)
 - 3 - Transporte (ex. TCP, UDP)
 - 4 - Aplicação (ex. FTP, SMTP, HTTP)

## TCP/UDP

### UDP - Conexão entre dispositivos e a internet
 - Rápido, porém algumas coisas podem se perder na comunicação.
 - Não é tão confiavel.
 - "Carro do ovo" - Dispara mensagens e pacotes sem saber quem recebe, todos conectados a rede podem receber ou não.
 - Livestream - é muito usado por exemplo para lives.

### TCP 
 - Voltado á conexão.
 - "handshake" - Os dispositivos pedem permissões para enviar ou receber arquivos, e notificam conforme seu progresso.
 - integridade e ordem de dados - pacotes e mensagens são enviadas em ordem.
 - Aplicativos de mensagens - É muito usado para aplicativos de mensagens.


### Portas
 - A tradução de port é porto, porém a palavra chegou ao Brasil como porta. As "Portas" por onde dados chegam e saem.
 - 20: FTP - Apenas para envio de arquivos.
 - 22: SSH - Conexão segura para executar comandos.
 - 25: SMTP - Envio de e-mails.
 - 53: DNS - Tradutor de texto para IP.
 - 80: HTTP - Requisição semples da internet.
 - 443: HTTPS - Requisição segura da internet.


### Roteadores/Switches/Modens

#### Modens(Modulator-demodulator)
 - Hardware que que converte dados em um formato que possa ser transmitido de um computador para outro.

#### Roteador
 - Distribui internet para um ou mais dispositivos de uma rede.
 - Pode fazer a comunicação entre redes.
 - Pode ser "burro" - Ele pode mandar mensagens e pacotes para todos os dispositivos conectados a ele.
#### Switch
 - Distribui internet para um ou mais dispositivos ou reses.
 - Criado para ser "Inteligente" - Dispara pacotes e mensagens apenas para quem fez a requisição deles.


## Exercicio Final

### O gmail costuma a trabalhar ocm portas próprias, tente descobrir quais são.
- SMTP, IMAP E POP3.

### O programador que trabalha com a internet costuma usar bancos de dados, como o MySql, e, claro servidor web como o Apache. Que tal você se adiantar e já descobrir qual porta usadas por esses sistemas?
- TCP 1433, 4022, 135, 1434
- UDP 1434
- São usadas por padrão.
