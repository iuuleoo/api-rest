import express from "express";

const PORT = 3333;

const app = express();

app.get("/products", (req, res) => {
  const { page, limit } = req.query;

  res.send(`pagina ${page} de ${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
