require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());
const database = require("./database/mongoDb");
const user = require("../src/routes/user");


database();
app.use(user)



const port = process.env.PORT
app.listen(port, () => console.log(`Server Start on port ${port}`));


