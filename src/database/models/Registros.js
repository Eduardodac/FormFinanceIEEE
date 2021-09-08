module.exports = function(sequelize, dataTypes) {

    let alias = "Registro";

    let cols = {
        id: {
            type: dataTypes.STRING,
            primaryKey: true,
            allowNull: false,
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
            allowNull: true,
        },
        inversionesAnteriores: {
            type: dataTypes.STRING,
            allowNull: true,
        },
        miembroIEEE: {
            type: dataTypes.STRING,
            allowNull: true,
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