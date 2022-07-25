module.exports = (sequelize, Sequelize) => {
    const Funcionario = sequelize.define("funcionario", {

        codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
        senha: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },
        funcao: {
            
            type: Sequelize.ENUM('gerente', 'funcionario'),
            allowNull: false,
          

            
        },

        email: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
    });
    return Funcionario;
};