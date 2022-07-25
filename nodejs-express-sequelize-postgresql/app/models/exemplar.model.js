module.exports = (sequelize, Sequelize) => {
    const Exemplar = sequelize.define("exemplar", {

        numero: {
            type: Sequelize.INTEGER,
            primaryKey: true,
           
        },

        isbn: {
            type: Sequelize.STRING(12),
            allowNull: false,
        },
        preco: {
            type: Sequelize.FLOAT,
            allowNull: false,
            defaultValue: null
        },

    

    });
    return Exemplar;
};