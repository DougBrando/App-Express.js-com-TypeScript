import { Router } from "express"; // Importa o módulo Router do Express para criar um roteador.
import * as ClientsController from "../Controller/clientsControllers"; // Importa todas as funções do controlador de clientes.

const router = Router(); // Cria uma nova instância do roteador.

 // Define a rota para a página inicial ("/") e associa à função 'index' do ClientsController.
router.get("/", ClientsController.index);

// Define a rota para a página de contato ("/contact") e associa à função 'contact' do ClientsController.
router.get('/contact', ClientsController.contact); // Corrigido para usar a função contact

// Define a rota para a página "Sobre" ("/about") e associa à função 'about' do ClientsController.
router.get('/about', ClientsController.about);

// Exporta o roteador para que possa ser utilizado em outros arquivos (como app.ts).
export default router;
