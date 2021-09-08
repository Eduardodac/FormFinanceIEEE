module.exports = function(sequelize, dataTypes) {

    let alias = "Registro";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
            allowNull: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        conocimientosPrevios: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        inversionesAnteriores: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        miembroIEEE: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    };

    let config = {
        tableName: "registros",
        timestamps: false,
        modelName: alias
    }

    let Registro = sequelize.define(alias, cols, config);

    return Registro;
}