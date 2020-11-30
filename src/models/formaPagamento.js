module.exports = (sequelize, Sequelize) => {
    const FormaPagamento = sequelize.define("formapagamento", {
      idFormaPagamento: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
      },
      descFormaPagamento: 
      {
        type: Sequelize.STRING(45),
        allowNull:false,
        unique:{
          msg:'Este nome já exite.',
          fields:[ 'descFormaPagamento' ]
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
  
    return FormaPagamento;
  };