const express = require("express");
const path = require('path')
const cors = require("cors");
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, "./public")))


const { preflopCalc, pairWinCalc, rangeList } = require('./controller')

app.get("/api/range/:chart", rangeList)
app.post("/api/preflop", preflopCalc);
app.post("/api/pair", pairWinCalc);


app.listen(3000, () => {
    console.log('Running on port 3000')
});