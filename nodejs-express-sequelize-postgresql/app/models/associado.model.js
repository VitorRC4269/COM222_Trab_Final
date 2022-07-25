module.exports = (sequelize, Sequelize) => {
    const Associado = sequelize.define("associado", {

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

        endereco: {
            type: Sequelize.STRING(45),
            allowNull: false,
        },

        email: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },





        status: {
            type:  Sequelize.ENUM('Grad', 'Posgrad', 'Prof'),
            allowNull: false,
    

        }
    });
    return Associado;
};