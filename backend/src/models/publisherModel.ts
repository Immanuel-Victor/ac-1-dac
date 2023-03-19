import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize";

const Publishers = sequelize.define('Publishers',{
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
async function synchronize() {
    await Publishers.sync({
        force:true
    })
}
synchronize()

export {Publishers}