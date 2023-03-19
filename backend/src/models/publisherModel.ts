import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize";

const Publisher = sequelize.define('Publisher',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    localDeOrigem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeFantasia: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}
)

export {Publisher}