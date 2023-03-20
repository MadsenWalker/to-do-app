

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json())

app.listen(4343, () => console.log('Docked at port 4343'))