const db = require("../models");
const Categoria = db.categoria;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Categoria.create({
      descCategoria: req.body.descCategoria,
  })
  .then(data => {
    if (data) {
      res.status(200).send(data);


    }
    else {
      res.send({message: "Erro ao criar categoria"});

    }

    })
    .catch(err => {
      res.status(500).send({
               message:
                   err.message || "Algum error ocorreu na criação de categoria."
           });
    });
};

exports.findAll = (req, res) => {
  const descCategoria = req.query.descCategoria;
   Categoria.findAll({where:descCategoria})
       .then(data => {
           res.status(200).send(data);

       })
       .catch(err => {
           res.status(500).send({
               message:
                   err.message || "Algum error ocorreu quando recuperava os categorias."
           });
       });
};

exports.findOne = (req, res) => {
   const id = req.params.id;

   Categoria.findByPk(id)
       .then(data => {
           if (data) {
               res.status(200).send(data);
           } else {
               res.status(500).send()
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error recuperando o categoria com a id=" + id
           });
       });
};

exports.update = (req, res) => {
   const categoria = {
       descCategoria: req.body.descCategoria,
   };

   const id = req.params.id;

   Categoria.update(categoria, {
       where: { idCategoria: id }
   })
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "categoria foi atualizado com sucesso."
               });
           } else {
               res.send({
                   message: `Não pode atualizar o categoria com id=${id}. Talvez o categoria não foi encontrado ou req.body está vazio!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Error atualizando categoria com id=" + id
           });
       });
};

exports.delete = (req, res) => {
   const id = req.params.id;

   Categoria.destroy({
       where: { idCategoria: id }
   })
       //retorna o boolean (True = 1 - ok / False = 0 - not ok)
       .then(num => {
           if (num == 1) {
               res.send({
                   message: "categoria foi deletado com sucesso!"
               });
           } else {
               res.send({
                   message: `Não pode deletar categoria com id=${id}. Talvez categoria não tenha sido encontrado!`
               });
           }
       })
       .catch(err => {
           res.status(500).send({
               message: "Não foi possivel deletar categoria com id=" + id
           });
       });
};

exports.addRamoAtividadeInCategoria = (req, res) => {
    bdCategoria.findByPk(req.body.idCategoria)
        .then(categoria => {

            if (!categoria) {
                res.send({ message: "Categoria não encontrado!" });
            };
            bdRamoAtividade.findByPk(req.body.id)
                .then(ramoAtividade => {
                    if (!ramoAtividade) {
                        res.send({ message: "Ramo de atividadenão encontrado!" });
                    };
                    categoria.addrRmoAtividade(ramoAtividade)
                    res.send({ message: "Ramo de atividade Incluido com sucesso!" });
                })
        })

        .catch((err) => {
            res.status(500).send({
                message: "Ocorreu algum error ao adicionar tipo de categoria no Ramo de atividade: ", err
            });
        });
} 
