import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./utils/app-error";

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

app.use((err: any, req: Request, res: Response, _: any) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
