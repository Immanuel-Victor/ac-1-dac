import { Sequelize} from 'sequelize'

const sequelize = new Sequelize('books_api', 'postgres', '1234', {
    host: 'database-1',
    dialect: 'postgres'
  });

export { sequelize }