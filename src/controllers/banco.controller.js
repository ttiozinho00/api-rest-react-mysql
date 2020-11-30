const db = require("../models");
const Banco = db.banco;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Banco.create({
      descBanco: req.body.descBanco,
  })
  .then(data => {
    if (data) {
      res.status(200).send(data);


    }
    else {
      res.send({message: "Erro ao criar banco"});

    }

    })
    .catch(err => {
      res.status(500).send({
               message:
                   err.message || "Algum error ocorreu na criação de banco."
           });
    });
};

exports.findAll = (req, res) => {
  const descBanco = req.query.descBanco;
   Banco.findAll({where:descbanco})
       .then(data => {
           res.status(200).send(data);

       })
       .catch(err => {
           res.status(500).send({
               message:
                   err.message || "Algum error ocorreu quando recuperava os bancos."
           });
       });
};

exports.findOne = (req, res) => {
   const id = req.params.id;

   banco.findByPk(id)
       .then(data => {
           if (data) {
               res.status(200).send(data);
           } else {
               res.status(500).send()
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error recuperando o banco com a id=" + id
           });
       });
};

exports.update = (req, res) => {
   const banco = {
       descBanco: req.body.descBanco,
   };

   const id = req.params.id;

   Banco.update(banco, {
       where: { idBanco: id }
   })
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "banco foi atualizado com sucesso."
               });
           } else {
               res.send({
                   message: `Não pode atualizar o banco com id=${id}. Talvez o banco não foi encontrado ou req.body está vazio!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error atualizando banco com id=" + id
           });
       });
};

exports.delete = (req, res) => {
   const id = req.params.id;

   banco.destroy({
       where: { idBanco: id }
   })
       //retorna o boolean (True = 1 - ok / False = 0 - not ok)
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "banco foi deletado com sucesso!"
               });
           } else {
               res.send({
                   message: `Não pode deletar banco com id=${id}. Talvez banco não tenha sido encontrado!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Não foi possivel deletar banco com id=" + id
           });
       });
};
