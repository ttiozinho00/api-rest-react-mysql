module.exports = (sequelize, Sequelize) => {
    const BandeiraAceita = sequelize.define("bandeiraaceita", {
      idBandeiraAceita: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
      },
      descBandeiraAceita: 
      {
        type: Sequelize.STRING(45),
        allowNull:false,
        unique:{
          msg:'Este nome já exite.',
          fields:[ 'descBandeiraAceita' ]
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
  
    return BandeiraAceita;
  };