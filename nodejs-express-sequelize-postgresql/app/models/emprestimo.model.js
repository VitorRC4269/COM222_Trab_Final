module.exports = (sequelize, Sequelize) => {
    const Emprestimo = sequelize.define("emprestimo", {

        codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nro_exemplar: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        isbn: {
            type: Sequelize.STRING(12),
            allowNull: false,
        },

        codigo_assoc: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        data_emp: {
            type: Sequelize.DATE,
            allowNull: false,
        },

        data_devol: {
            type: Sequelize.DATE,
            allowNull: false,
        },

    });
    return Emprestimo;
};