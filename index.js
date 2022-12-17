var express= require('express');
const res = require('express/lib/response');
var mysql= require('mysql');
var app=express();

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'sample'
});  //connection
connection.connect(function(err){

    if(err){
        console.log("Error!",err)
    }
    else{
        console.log('connected!')
    }
})

app.get('/',(req,response)=>{
    console.log('got request')
    connection.query("Select * from users",function(err,rows,fields){  //query
        if(err){
            console.log(err)
        }
        else
        {
            response.send(rows)
        }
    })
})


app.listen(1337);