# App Express.js com TypeScript e Bootstrap

Este projeto é um servidor web simples construído com **Express.js**, **TypeScript** e **Bootstrap**. O objetivo é demonstrar como configurar um servidor básico utilizando essas tecnologias, além de criar páginas web responsivas e estilizadas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js que facilita a criação de servidores.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática e outros recursos.
- **Bootstrap**: Framework CSS para estilização responsiva e moderna.

## Estrutura do Projeto

```plaintext
/appExpressJs
│
├── Controller
│   └── clientsControllers.ts   # Controlador com as funções de renderização
├── Router
│   └── clients.ts               # Arquivo de rotas
├── Views
│   ├── contato.pug              # View para a página de contato
│   ├── index.pug                # View para a página inicial
│   └── sobre.pug                # View para a página "Sobre"
├── app.ts                       # Arquivo principal do servidor
├── package.json                 # Gerenciador de pacotes e scripts do projeto
└── tsconfig.json                # Configurações do TypeScript
```

## Processo de Criação

1. **Inicialização do Projeto**:
   - Execute o comando para criar um novo projeto Node.js:
     ```bash
     npm init -y
     ```

2. **Instalação do Express**:
   - Instale o Express.js como uma dependência do projeto:
     ```bash
     npm i express
     ```

3. **Instalação do TypeScript**:
   - Instale o TypeScript como uma dependência de desenvolvimento:
     ```bash
     npm install typescript -D
     ```

4. **Inicialização do TypeScript**:
   - Crie um arquivo de configuração do TypeScript:
     ```bash
     npx tsc --init
     ```

5. **Instalação dos Tipos do Express**:
   - Instale os tipos do Express para TypeScript:
     ```bash
     npm install @types/express -D
     ```

6. **Instalação do Pug**:
   - Instale o Pug como motor de template:
     ```bash
     npm install pug
     ```

7. **Instalação do Bootstrap**:
   - Para usar o Bootstrap, você pode incluir o CSS diretamente nas views através de um CDN, como mostrado nos arquivos Pug.

8. **Execução do Servidor**:
   - Para iniciar o servidor, adicione o seguinte script ao seu `package.json`:
     ```json
     "scripts": {
       "start": "npx ts-node-dev app.ts"
     }
     ```
   - Em seguida, execute o comando:
     ```bash
     npm start
     ```

Após a execução, você verá a mensagem `Servidor criado na porta 3000` no console. Você pode acessar o servidor em seu navegador ou usando uma ferramenta como Postman em `http://localhost:3000`.

## Rotas

- **`/`**: Página inicial (index).
- **`/contact`**: Página de contato.
- **`/sobre`**: Página "Sobre".

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Você pode abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [Licença ISC](LICENSE).

