const express = require("express");
const cors = require("cors");
const mySql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mySql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12651768",
    password: "txQiIVhQY8",
    database: "sql12651768"
});

app.post("/save",(req, res)=>{
    let data = [req.body.name, req.body.feedback];
    let sql = "insert into student values(?,?)";

    con.query(sql, data, (err, result)=>{
        if (err) return res.send(err);
        else return res.send(result);
    });
});

app.listen(9000, ()=>{console.log("Ready with port 9000")});