const db = require("../models");
const BandeiraAceita = db.bandeiraAceita;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  BandeiraAceita.create({
      descBandeiraAceita: req.body.descBandeiraAceita,
  })
  .then(data => {
    if (data) {
      res.status(200).send(data);


    }
    else {
      res.send({message: "Erro ao criar bandeiraAceita"});

    }

    })
    .catch(err => {
      res.status(500).send({
               message:
                   err.message || "Algum error ocorreu na criação de bandeiraAceita."
           });
    });
};

exports.findAll = (req, res) => {
  const descBandeiraAceita = req.query.descBandeiraAceita;
   BandeiraAceita.findAll({where:descBandeiraAceita})
       .then(data => {
           res.status(200).send(data);

       })
       .catch(err => {
           res.status(500).send({
               message:
                   err.message || "Algum error ocorreu quando recuperava os bandeiraAceitas."
           });
       });
};

exports.findOne = (req, res) => {
   const id = req.params.id;

   BandeiraAceita.findByPk(id)
       .then(data => {
           if (data) {
               res.status(200).send(data);
           } else {
               res.status(500).send()
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error recuperando o bandeiraAceita com a id=" + id
           });
       });
};

exports.update = (req, res) => {
   const bandeiraAceita = {
       descBandeiraAceita: req.body.descBandeiraAceita,
   };

   const id = req.params.id;

   BandeiraAceita.update(bandeiraAceita, {
       where: { idBandeiraAceita: id }
   })
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "bandeiraAceita foi atualizado com sucesso."
               });
           } else {
               res.send({
                   message: `Não pode atualizar o bandeiraAceita com id=${id}. Talvez o bandeiraAceita não foi encontrado ou req.body está vazio!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error atualizando bandeiraAceita com id=" + id
           });
       });
};

exports.delete = (req, res) => {
   const id = req.params.id;

   BandeiraAceita.destroy({
       where: { idBandeiraAceita: id }
   })
       //retorna o boolean (True = 1 - ok / False = 0 - not ok)
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "bandeiraAceita foi deletado com sucesso!"
               });
           } else {
               res.send({
                   message: `Não pode deletar bandeiraAceita com id=${id}. Talvez bandeiraAceita não tenha sido encontrado!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Não foi possivel deletar bandeiraAceita com id=" + id
           });
       });
};
