module.exports = app => {
    const Categoria = require("../controllers/categoria.controller");

   const router = require("express").Router();

   // Create a new Categoria
   router.post("/", Categoria.create);

   // Retrieve all Categorias
   router.get("/", Categoria.findAll);
   // Retrieve one Categorias
   router.get("/:id", Categoria.findOne);

   // Update a Categoria with id
   router.put("/:id", Categoria.update);

   // Delete a Categoria with id
   router.delete("/:id", Categoria.delete);

   app.use('/api/categoria', router);

};
