import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize";

const Books = sequelize.define('Books',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataDeLancamento: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}
)

export {Books}