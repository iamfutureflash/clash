import express, { Application, Request, Response } from "express";
import "dotenv/config";

const app: Application = express();

const PORT = process.env.PORT || 7001;

app.get('/', (req: Request, res: Response) => {
    return res.send("Server is running..  ")
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));