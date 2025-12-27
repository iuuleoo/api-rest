import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { z } from "zod";

class ProductsController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query;

    res.send(`pagina ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
    const bodyShema = z.object({
      name: z
        .string({ required_error: "Name is required" })
        .min(6, { message: "Name Must be 6 or more characters" }),
      price: z
        .number({ required_error: "Price is required" })
        .positive({ message: "Price must be positive" }),
    });

    const { name, price } = bodyShema.parse(req.body);

    /*
    if (!name) {
      throw new AppError("Nome do produto é obrigatório!");
    }

    if (name.length < 6) {
      throw new AppError("Nome do produto deve ter no mínimo 6 caracteres!");
    }

    if (!price) {
      throw new AppError("Preço do produto é obrigatório!");
    }

    if (price < 0) {
      throw new AppError("Preço do produto não pode ser menor do que zero!");
    }
    */

    // throw new Error("ERRO DE EXEMPLO!");
    // throw new AppError("ERRO DE EXEMPLO!");

    res.status(201).json({ name, price, user_id: req.user_id });
  }
}

export { ProductsController };
