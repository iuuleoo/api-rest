import express from "express";

const PORT = 3333;

const app = express();

app.get("/products/:id/:user", (req, res) => {
  const { id, user } = req.params;
  res.send(`Produto ${id} do usuário ${user}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
