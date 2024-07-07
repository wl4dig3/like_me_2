import express from "express";
import router from "./routes/router.js";
import dotenv from  "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;
// #### midlewares
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router) ;

// #### routes

app.listen(port, () => {
    console.log(`[server]: Server Wladi is running at https://localhost:${port}`);
})