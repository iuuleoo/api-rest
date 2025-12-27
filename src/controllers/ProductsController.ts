import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

class ProductsController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query;

    res.send(`pagina ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
    const { name, price } = req.body;

    // throw new Error("ERRO DE EXEMPLO!");
    // throw new AppError("ERRO DE EXEMPLO!");

    res.status(201).json({ name, price, user_id: req.user_id });
  }
}

export { ProductsController };
