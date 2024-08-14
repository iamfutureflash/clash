import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 7001;
app.get('/', (req, res) => {
    return res.send("Server is running..  ");
});
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
