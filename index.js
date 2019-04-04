const sql = require("mssql");
const express = require("express");
const bodyparser = require("body-parser");
const timeout = require('connect-timeout');



var exps = express(); // initiate express.js

exps.use(bodyparser.json()); //to change the data to json 





var dbconnect= {
    
        user: "sa",  
        password: "Episource123",  
        server: "10.3.1.138",
        database: "SFDC"
    
};

//connecting database 

sql.connect(dbconnect,(err)=>
{
    if(!err)
    {
        console.log("DB connection worked ")
    }
    else{
        console.log("faliled\n"+ JSON.stringify(err))
    }
});

exps.listen(4003, ()=> console.log("Server has been started, running in 4003"));
exps.use(timeout(15000));

// doing the frst post
exps.get("/client",(req,res)=>{
    
    sql.query("select top(10) * from  EPI_MRR_Consolidated",(err,rows)=>
    {
        if(!err)
        {
            
            
           var data = bodyparser.json(rows);
           console.log(data);
           
           res.send(rows);

        }
        else{
            console.log("Fetch has been failed" + err);
            res.send(err);
        }
    })
    
});


exps.get('/client/:phase',(req,res)=>{

    sql.query('select top(10) * from EPI_MRR_Consolidated WHERE PP = ?',[req.params.Phase],(err,rows1,fields)=>
    {
        if(!err)
        {

            console.log("Method2 worked");
            res.send(rows1);

        }
        else{
            console.log("Not Worked "/n + err)

        }
    });

    

})