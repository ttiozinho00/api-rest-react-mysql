const db = require("../models");
const TipoRamo = db.tipoRamo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  TipoRamo.create({
      descTipoRamo: req.body.descTipoRamo,
  })
  .then(data => {
    if (data) 
    {
      res.status(200).send(data);
    }

    else 
    {
      res.send({message: "Erro ao criar TipoRamo"});
    }

    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Algum error ocorreu na criação de TipoRamo." });
    });
};

exports.findAll = (req, res) => {
  const descTipoRamo = req.query.descTipoRamo;
   TipoRamo.findAll({where:descTipoRamo})
       .then(data => {
           res.status(200).send(data);

       })
       .catch(err => {
           res.status(500).send({ message: err.message || "Algum error ocorreu quando recuperava os TipoRamos." });
       });
};

exports.findOne = (req, res) => {
   const id = req.params.id;

   TipoRamo.findByPk(id)
       .then(data => {
           if (data) {
               res.status(200).send(data);
           } else {
               res.status(500).send()
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error recuperando o TipoRamo com a id=" + id
           });
       });
};

exports.update = (req, res) => {
   const tipoRamo = {
       descTipoRamo: req.body.descTipoRamo,
   };

   const id = req.params.id;

   TipoRamo.update(tipoRamo, {
       where: { idTipoRamo: id }
   })
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "TipoRamo foi atualizado com sucesso."
               });
           } else {
               res.send({
                   message: `Não pode atualizar o TipoRamo com id=${id}. Talvez o TipoRamo não foi encontrado ou req.body está vazio!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error atualizando TipoRamo com id=" + id
           });
       });
};

exports.delete = (req, res) => {
   const id = req.params.id;

   TipoRamo.destroy({
       where: { idTipoRamo: id }
   })
       //retorna o boolean (True = 1 - ok / False = 0 - not ok)
       .then(num => {
           if (num == 1) 
           {
               res.send({ message: "TipoRamo foi deletado com sucesso!"});
           }

           else 
           {
               res.send({ message: `Não pode deletar TipoRamo com id=${id}. Talvez TipoRamo não tenha sido encontrado!`});
           }
       })
       .catch(err => {
           res.status(500).send({message: "Não foi possivel deletar TipoRamo com id=" + id});
       });
};
