import {Sequelize} from "sequelize";

if (!process.env.DB_NAME){
  throw new Error('DB_NAME must set')
}
if (!process.env.DB_USER){
  throw new Error('DB_USER must set')
}
if (!process.env.DB_PORT){
  throw new Error('DB_NAME must set')
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect:'postgres',
    host:process.env.DB_HOST,
    port:+process.env.DB_PORT,
  }
)

export default sequelize