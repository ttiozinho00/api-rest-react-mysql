const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categoria = require("./categoria.js")(sequelize, Sequelize);
db.tipoProduto = require("./tipoProduto.js")(sequelize, Sequelize);
db.ramoAtividade = require("./ramoAtividade.js")(sequelize, Sequelize);
db.tipoRamo = require("./tipoRamo.js")(sequelize, Sequelize);
db.banco = require("./banco.js")(sequelize, Sequelize);
db.formaPagamento = require("./formaPagamento.js")(sequelize, Sequelize);
db.bandeiraAceita = require("./bandeiraAceita")(sequelize, Sequelize);

db.categoria.belongsToMany(db.ramoAtividade, {//ok
    through: "categoria_ramoAtividade",
    foreignKey: "categoria_id",
});
db.ramoAtividade.belongsToMany(db.categoria, {//ok
    through: "categoria_ramoAtividade",
    foreignKey: "ramoAtividade_id",
});

db.tipoProduto.belongsToMany(db.tipoRamo, {//ok
    through: "tipoProduto_tipoRamo",
    foreignKey: "tipoPrduto_id",
});
db.tipoRamo.belongsToMany(db.tipoProduto, {//ok
    through: "tipoProduto_tipoRamo",
    foreignKey: "tipoRamo_id",
});

module.exports = db;