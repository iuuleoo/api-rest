import { Request, Response } from "express";

class ProductsController {
  index(req: Request, res: Response) {
    const { page, limit } = req.query;

    res.send(`pagina ${page} de ${limit}`);
  }

  create(req: Request, res: Response) {
    const { name, price } = req.body;

    res.status(201).json({ name, price, user_id: req.user_id });
  }
}

export { ProductsController };
