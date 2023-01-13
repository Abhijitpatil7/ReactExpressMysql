const express=require("express");
var app =express();
const core=require("cors");
const bodyparser=require("body-parser");
const mysql=require("mysql2");

const db=mysql.createPool(
    {
        host:"localhost",
        user:"root",
        password:"root123",
        database:"Employee"
    }
);


app.use(core());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

// app.get("/",(req,res)=>{
//     const sql="insert into emp(id,name,email) values (2,'sham','ram@123')";
//     db.query(sql,(err,result)=>{
//      console.log("error",err);
//      console.log("result",result);
//     res.send("hello world");
// })
// });

app.get("/emp",(req,res)=>{
    const s="select * from emp";
    db.query(s,(err,result)=>{
        console.log("err",err);
        console.log("result",result);
        res.send(result);
    })
});


app.listen(5000,()=>{
    console.log("server is listening at port 5000");
})