import express from "express";
import { appRouter } from "./routes/routes";
import dotenv from "dotenv";
import { sequelize } from "./database/sequelize";

dotenv.config();

const app:any = express();
const port:string = process.env.PORT || '3030' ;

app.use(express.json());
app.use(appRouter)

app.get("/", (req:any, res:any) => {
    res.send("Running");
});


const authenticate = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

authenticate()

app.listen(port, () => console.log(`Running on port ${port}`));