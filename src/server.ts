import express from "express";
import { myMiddleware } from "./middlewares/my-middleware";

const PORT = 3333;

const app = express();
app.use(express.json());
app.use(myMiddleware);

app.get("/products", (req, res) => {
  const { page, limit } = req.query;

  res.send(`pagina ${page} de ${limit}`);
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  //res.send(`Produto ${name} custa ${price}`);
  res.status(201).json({ name, price });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
