// Router/clients.ts
import { Router } from "express";
import * as ClientsController from "../Controller/clientsControllers"; // Importação correta

const router = Router();

router.get("/", ClientsController.index);
router.get('/contact', ClientsController.contact); // Corrigido para usar a função contact
router.get('/about', ClientsController.about);

export default router;