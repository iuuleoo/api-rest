import { Request, Response, NextFunction } from "express";

export function myMiddleware(req: Request, res: Response, next: Function) {
  console.log("Passou pelo Midlleware!");

  return next();
}
