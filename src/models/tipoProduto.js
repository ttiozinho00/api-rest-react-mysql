module.exports = (sequelize, Sequelize) => {
    const TipoProduto = sequelize.define("tipoproduto", {
      idTipoProduto: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
      },
      descTipoProduto: 
      {
        type: Sequelize.STRING(45),
        allowNull:false,
        unique:{
          msg:'Este nome já exite.',
          fields:[ 'desctipoProduto' ]
        },
        validate:
        {
          notEmpty:
          {
            msg:'Esse campo não pode ser vazio' 
          }
        }
      },
    },

    {
      createdAt: 'dataCadastro',
      updatedAt: 'dataAlteracao',
    }

    );
  
    return TipoProduto;
  };