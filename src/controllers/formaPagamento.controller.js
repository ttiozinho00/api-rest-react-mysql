const db = require("../models");
const FormaPagamento = db.formaPagamento;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  FormaPagamento.create({
      descFormaPagamento: req.body.descFormaPagamento,
  })
  .then(data => {
    if (data) {
      res.status(200).send(data);


    }
    else {
      res.send({message: "Erro ao criar formaPagamento"});

    }

    })
    .catch(err => {
      res.status(500).send({
               message:
                   err.message || "Algum error ocorreu na criação de formaPagamento."
           });
    });
};

exports.findAll = (req, res) => {
  const descFormaPagamento = req.query.descFormaPagamento;
   formaPagamento.findAll({where:descFormaPagamento})
       .then(data => {
           res.status(200).send(data);

       })
       .catch(err => {
           res.status(500).send({
               message:
                   err.message || "Algum error ocorreu quando recuperava os formaPagamentos."
           });
       });
};

exports.findOne = (req, res) => {
   const id = req.params.id;

   formaPagamento.findByPk(id)
       .then(data => {
           if (data) {
               res.status(200).send(data);
           } else {
               res.status(500).send()
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error recuperando o formaPagamento com a id=" + id
           });
       });
};

exports.update = (req, res) => {
   const formaPagamento = {
       descFormaPagamento: req.body.descFormaPagamento,
   };

   const id = req.params.id;

   FormaPagamento.update(formaPagamento, {
       where: { idFormaPagamento: id }
   })
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "formaPagamento foi atualizado com sucesso."
               });
           } else {
               res.send({
                   message: `Não pode atualizar o formaPagamento com id=${id}. Talvez o formaPagamento não foi encontrado ou req.body está vazio!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error atualizando formaPagamento com id=" + id
           });
       });
};

exports.delete = (req, res) => {
   const id = req.params.id;

   FormaPagamento.destroy({
       where: { idFormaPagamento: id }
   })
       //retorna o boolean (True = 1 - ok / False = 0 - not ok)
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "formaPagamento foi deletado com sucesso!"
               });
           } else {
               res.send({
                   message: `Não pode deletar formaPagamento com id=${id}. Talvez formaPagamento não tenha sido encontrado!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Não foi possivel deletar formaPagamento com id=" + id
           });
       });
};
