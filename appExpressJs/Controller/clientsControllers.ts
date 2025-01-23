// Controller/clientsControllers.ts
import { Request, Response } from "express";

export function index(req: Request, res: Response) {
  res.render('index'); // Renderiza index.pug
}

export function contact(req: Request, res: Response) {
  res.render('contato'); // Renderiza contato.pug
}
export function about(req: Request, res: Response) {
  res.render('sobre'); // Renderiza sobre.pug
}