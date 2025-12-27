import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

const productsRoutes = Router();

productsRoutes.get("/:id", (req, res) => {
  const { page, limit } = req.query;
  const { id } = req.params;

  res.send(`pagina ${page} de ${limit} - ID: ${id}`);
});

productsRoutes.post("/", myMiddleware, (req, res) => {
  const { name, price } = req.body;

  //res.send(`Produto ${name} custa ${price}`);
  res.status(201).json({ name, price, user_id: req.user_id });
});

export { productsRoutes };
