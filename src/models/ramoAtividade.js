module.exports = (sequelize, Sequelize) => {
    const RamoAtividade = sequelize.define("ramoatividade", {
      idRamoAtividade: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
      },
      descRamoAtividade: 
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
  
    return RamoAtividade;
  };