const db = require("../models");
const TipoProduto = db.tipoProduto;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  TipoProduto.create({
      descTipoProduto: req.body.descTipoProduto,
  })
  .then(data => {
    if (data) 
    {
      res.status(200).send(data);
    }

    else 
    {
      res.send({message: "Erro ao criar TipoProduto"});
    }

    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Algum error ocorreu na criação de TipoProduto." });
    });
};

exports.findAll = (req, res) => {
  const descTipoProduto = req.query.descTipoProduto;
   TipoProduto.findAll({where:descTipoProduto})
       .then(data => {
           res.status(200).send(data);

       })
       .catch(err => {
           res.status(500).send({ message: err.message || "Algum error ocorreu quando recuperava os TipoProdutos." });
       });
};

exports.findOne = (req, res) => {
   const id = req.params.id;

   TipoProduto.findByPk(id)
       .then(data => {
           if (data) {
               res.status(200).send(data);
           } else {
               res.status(500).send()
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error recuperando o TipoProduto com a id=" + id
           });
       });
};

exports.update = (req, res) => {
   const tipoProduto = {
       descTipoProduto: req.body.descTipoProduto,
   };

   const id = req.params.id;

   TipoProduto.update(tipoProduto, {
       where: { idTipoProduto: id }
   })
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "TipoProduto foi atualizado com sucesso."
               });
           } else {
               res.send({
                   message: `Não pode atualizar o TipoProduto com id=${id}. Talvez o TipoProduto não foi encontrado ou req.body está vazio!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error atualizando TipoProduto com id=" + id
           });
       });
};

exports.delete = (req, res) => {
   const id = req.params.id;

   TipoProduto.destroy({
       where: { idTipoProduto: id }
   })
       //retorna o boolean (True = 1 - ok / False = 0 - not ok)
       .then(num => {
           if (num == 1) 
           {
               res.send({ message: "TipoProduto foi deletado com sucesso!"});
           }

           else 
           {
               res.send({ message: `Não pode deletar TipoProduto com id=${id}. Talvez TipoProduto não tenha sido encontrado!`});
           }
       })
       .catch(err => {
           res.status(500).send({message: "Não foi possivel deletar TipoProduto com id=" + id});
       });
};

exports.addTipoRamoInTipoProduto = (req, res) => {
    bdTipoProduto.findByPk(req.body.idTipoProduto)
        .then(tipoProduto => {

            if (!tipoProduto) {
                res.send({ message: "TipoProduto não encontrado!" });
            };
            bdTipoRamo.findByPk(req.body.id)
                .then(tipoRamo => {
                    if (!tipoRamo) {
                        res.send({ message: "Tipo de ramo não encontrado!" });
                    };
                    categoria.addTipoRamo(tipoRamo)
                    res.send({ message: "Tipo de ramo Incluido com sucesso!" });
                })
        })

        .catch((err) => {
            res.status(500).send({
                message: "Ocorreu algum error ao adicionar Tipo de ramo no Tipo de Produto: ", err
            });
        });
} 
