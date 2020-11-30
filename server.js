const bodyParser = require("body-parser");
const express = require("express");
const db = require("./src/models");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./src/routes/BandeiraAceita.route")(app);
require("./src/routes/FormaPagamento.route")(app);
require("./src/routes/RamoAtividade.route")(app);
require("./src/routes/TipoProduto.route")(app);
require("./src/routes/Categoria.route")(app);
require("./src/routes/Ramo.route")(app);
require("./src/routes/Banco.route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  //console.clear();
  console.log(`Server is running on port ${PORT}.`);
});
