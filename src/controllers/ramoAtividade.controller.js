const db = require("../models");
const RamoAtividade = db.ramoAtividade;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  RamoAtividade.create({
      descRamoAtividade: req.body.descRamoAtividade,
  })
  .then(data => {
    if (data) 
    {
      res.status(200).send(data);
    }

    else 
    {
      res.send({message: "Erro ao criar ramoAtividade"});
    }

    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Algum error ocorreu na criação de ramoAtividade." });
    });
};

exports.findAll = (req, res) => {
  const descRamoAtividade = req.query.descRamoAtividade;
   RamoAtividade.findAll({where:descRamoAtividade})
       .then(data => {
           res.status(200).send(data);

       })
       .catch(err => {
           res.status(500).send({ message: err.message || "Algum error ocorreu quando recuperava os ramoAtividades." });
       });
};

exports.findOne = (req, res) => {
   const id = req.params.id;

   RamoAtividade.findByPk(id)
       .then(data => {
           if (data) {
               res.status(200).send(data);
           } else {
               res.status(500).send()
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error recuperando o ramoAtividade com a id=" + id
           });
       });
};

exports.update = (req, res) => {
   const ramoAtividade = {
       descRamoAtividade: req.body.descRamoAtividade,
   };

   const id = req.params.id;

   RamoAtividade.update(ramoAtividade, {
       where: { idRamoAtividade: id }
   })
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "ramoAtividade foi atualizado com sucesso."
               });
           } else {
               res.send({
                   message: `Não pode atualizar o ramoAtividade com id=${id}. Talvez o ramoAtividade não foi encontrado ou req.body está vazio!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error atualizando ramoAtividade com id=" + id
           });
       });
};

exports.delete = (req, res) => {
   const id = req.params.id;

   RamoAtividade.destroy({
       where: { idRamoAtividade: id }
   })
       //retorna o boolean (True = 1 - ok / False = 0 - not ok)
       .then(num => {
           if (num == 1) 
           {
               res.send({ message: "ramoAtividade foi deletado com sucesso!"});
           }

           else 
           {
               res.send({ message: `Não pode deletar ramoAtividade com id=${id}. Talvez ramoAtividade não tenha sido encontrado!`});
           }
       })
       .catch(err => {
           res.status(500).send({message: "Não foi possivel deletar ramoAtividade com id=" + id});
       });
};
