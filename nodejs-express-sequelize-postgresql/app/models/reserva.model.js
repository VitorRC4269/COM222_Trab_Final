module.exports = (sequelize, Sequelize) => {
    const Reserva = sequelize.define("reserva", {

        codigo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        isbn: {
            type: Sequelize.STRING(12),
            allowNull: false,
        },


       
        codigo_assoc: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        data: {
            type: Sequelize.DATE,
            defaultValue: DataTypes.NOW,
        },

        status: {
            type: Sequelize.ENUM('Iniciado', 'Avisado', 'Anulado'),
            allowNull: false,
           
        },

    });
    return Reserva;
};