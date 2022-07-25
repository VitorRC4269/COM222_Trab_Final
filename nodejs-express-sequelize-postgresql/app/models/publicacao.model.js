module.exports = (sequelize, Sequelize) => {
    const Publicacao = sequelize.define("publicacao", {


        isbn: {
            type: Sequelize.STRING(12),
            primaryKey : true,
            allowNull: false,
        },


        titulo: {
            type: Sequelize.STRING(40),
            allowNull: false,
        },

        autor: {
            type: Sequelize.STRING(35),
            allowNull: false,
        },

        editora: {
            type: Sequelize.STRING(30),
            allowNull: false,
        },
    

    });
    return Publicacao;
};