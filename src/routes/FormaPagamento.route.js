module.exports = app => {
    const FormaPagamento = require("../controllers/formaPagamento.controller");

   const router = require("express").Router();

   // Create a new FormaPagamento
   router.post("/", FormaPagamento.create);

   // Retrieve all FormaPagamentos
   router.get("/", FormaPagamento.findAll);
   // Retrieve one FormaPagamentos
   router.get("/:id", FormaPagamento.findOne);

   // Update a FormaPagamento with id
   router.put("/:id", FormaPagamento.update);

   // Delete a FormaPagamento with id
   router.delete("/:id", FormaPagamento.delete);

   app.use('/api/FormaPagamento', router);

};
