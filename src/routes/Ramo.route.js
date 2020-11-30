module.exports = app => {
	const Ramo = require("../controllers/ramo.controller");
	const router = require("express").Router();

	 // Create a new Ramo
   router.post("/", Ramo.create);

   // Retrieve all Ramo
   router.get("/", Ramo.findAll);
   // Retrieve one Ramo
   router.get("/:id", Ramo.findOne);

   // Update a Ramo with id
   router.put("/:id", Ramo.update);

   // Delete a Ramo with id
   router.delete("/:id", Ramo.delete);

   app.use('/api/Ramo', router);
}