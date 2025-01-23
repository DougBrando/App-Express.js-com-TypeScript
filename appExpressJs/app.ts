import express from "express"; // Importa o módulo express, que é um framework para construir aplicações web em Node.js.
import clientRouter from "./Router/clients"; // Importa o router de clientes, que contém as definições de rotas para a aplicação.

const app = express(); // Cria uma instância da aplicação Express.

app.set('view engine', 'pug'); // Configura o motor de visualização para Pug, que será usado para renderizar as views.
app.set('views', './Views'); // Define o diretório onde as views (templates Pug) estão localizadas. Certifique-se de que o caminho está correto.

app.use(clientRouter); // Usa o router de clientes para gerenciar as rotas da aplicação.

app.listen(3000, () => { // Inicia o servidor na porta 3000.
  console.log("Servidor criado na porta 3000"); // Exibe uma mensagem no console quando o servidor está ativo.
});
