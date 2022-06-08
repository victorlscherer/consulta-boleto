<h1>consulta-boleto</h1>

📜 Uma API para consultar dados um boleto pelo código de barra.

## 🛠️ Instalação

1. Baixe o repositório utilizando o Git com o commando:<br>

utilizando HTTPS

```sh
$ https://github.com/victorlscherer/consulta-boleto.git
```

ou SSh

```sh
$ git@github.com:victorlscherer/consulta-boleto.git
```

1. Instale as dependências presentes no arquivo <code>package.json</code>:
   <br>: no terminal :

```
$ yarn
```

2 - Em seguida, inicie a aplicação:
<br>: no terminal :

```
$ yarn dev
```

<br><hr><br>

## <b> 🌄 Inicialização da API </b>

Base Url: http://localhost:8080/

<br>

## 🔚 Endpoints

Existe 1 endpoint para tratamento e retorno de dados através de um código de um boleto.
<br><br>

### Boleto:

<br>

<span>GET</span><br>
<code>/boleto/:boleto</code><br><br>
Sem corpo de requisição

```json

```

Status: <code style="color: green; font-size: 16px;"> 200 OK</code>
<br>Resposta:

```json

  {
    “barCode”: “21299758700000020000001121100012100447561740”,
    “amount”: “20.00”,
    “expirationDate”: “2018-07-16”
}

```
