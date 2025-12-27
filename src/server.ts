import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

app.use((err: any, req: Request, res: Response, _: any) => {
  res.status(500).json({ message: "Erro ao tentar criar um produto!" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
