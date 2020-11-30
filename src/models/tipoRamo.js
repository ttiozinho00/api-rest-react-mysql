module.exports = (sequelize, Sequelize) => {
    const TipoRamo = sequelize.define("tiporamo", {
      idTipoRamo: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
      },
      descTipoRamo: 
      {
        type: Sequelize.STRING(45),
        allowNull:false,
        unique:{
          msg:'Este nome já exite.',
          fields:[ 'descCategoria' ]
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
  
    return TipoRamo;
  };