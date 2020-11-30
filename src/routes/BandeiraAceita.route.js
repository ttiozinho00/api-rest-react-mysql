module.exports = app => {
    const BandeiraAceita = require("../controllers/bandeiraAceita.controller");

   const router = require("express").Router();

   // Create a new BandeiraAceita
   router.post("/", BandeiraAceita.create);

   // Retrieve all BandeiraAceitas
   router.get("/", BandeiraAceita.findAll);
   // Retrieve one BandeiraAceitas
   router.get("/:id", BandeiraAceita.findOne);

   // Update a BandeiraAceita with id
   router.put("/:id", BandeiraAceita.update);

   // Delete a BandeiraAceita with id
   router.delete("/:id", BandeiraAceita.delete);

   app.use('/api/BandeiraAceita', router);

};
