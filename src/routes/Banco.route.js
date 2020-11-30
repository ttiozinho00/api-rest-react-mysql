module.exports = app => {
    const Banco = require("../controllers/banco.controller");

   const router = require("express").Router();

   // Create a new Banco
   router.post("/", Banco.create);

   // Retrieve all Bancos
   router.get("/", Banco.findAll);
   // Retrieve one Bancos
   router.get("/:id", Banco.findOne);

   // Update a Banco with id
   router.put("/:id", Banco.update);

   // Delete a Banco with id
   router.delete("/:id", Banco.delete);

   app.use('/api/Banco', router);

};
