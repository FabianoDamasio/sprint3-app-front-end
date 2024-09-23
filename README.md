# App Membros em React

Este projeto visa solucionar a demanda de uma igreja, onde é nescessário o cadastro e consulta dos membros.

Com esta etapa focando no front-end avançado.

---
## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t app-front .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run --name container-front -d -p 3000:3000 app-front
```

Abra o [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador.

---

### Observação
```

O primeiro login e senha base são: 

Login: admin
Senha: admin

---

```
# API pública utilizada
```

https://viacep.com.br

---



```
# Layout

Link para layout: https://www.figma.com/proto/wXJK9gsGNt9Qhh1RQTvUYL/Membros-App?node-id=3-45662&t=K68ieHVuQjDNBtlA-1

## Como executar

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
$ npm start
```

Abra o [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador.

---



### Alguns comandos úteis do Docker

>**Para verificar se a imagem foi criada** você pode executar o seguinte comando:
>
>```
>$ docker images
>```
>
> Caso queira **remover uma imagem**, basta executar o comando:
>```
>$ docker rmi <IMAGE ID>
>```
>Subistituindo o `IMAGE ID` pelo código da imagem
>
>**Para verificar se o container está em exceução** você pode executar o seguinte comando:
>
>```
>$ docker container ls --all
>```
>
> Caso queira **parar um conatiner**, basta executar o comando:
>```
>$ docker stop <CONTAINER ID>
>```
>Subistituindo o `CONTAINER ID` pelo ID do conatiner
>
>
> Caso queira **destruir um conatiner**, basta executar o comando:
>```
>$ docker rm <CONTAINER ID>
>```
>Para mais comandos, veja a [documentação do docker](https://docs.docker.com/engine/reference/run/).
