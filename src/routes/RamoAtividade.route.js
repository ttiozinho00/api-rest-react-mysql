module.exports = app => {
	const RamoAtividade = require("../controllers/ramoAtividade.controller");
	const router = require("express").Router();

	 // Create a new RamoAtividade
   router.post("/", RamoAtividade.create);

   // Retrieve all RamoAtividade
   router.get("/", RamoAtividade.findAll);
   // Retrieve one RamoAtividade
   router.get("/:id", RamoAtividade.findOne);

   // Update a RamoAtividade with id
   router.put("/:id", RamoAtividade.update);

   // Delete a RamoAtividade with id
   router.delete("/:id", RamoAtividade.delete);

   app.use('/api/RamoAtividade', router);
}