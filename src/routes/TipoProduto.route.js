module.exports = app => {
	const TipoProduto = require("../controllers/produto.controller");
	const router = require("express").Router();

	 // Create a new TipoProduto
   router.post("/", TipoProduto.create);

   // Retrieve all TipoProduto
   router.get("/", TipoProduto.findAll);
   // Retrieve one TipoProduto
   router.get("/:id", TipoProduto.findOne);

   // Update a TipoProduto with id
   router.put("/:id", TipoProduto.update);

   // Delete a TipoProduto with id
   router.delete("/:id", TipoProduto.delete);

   app.use('/api/tipoProduto', router);
}