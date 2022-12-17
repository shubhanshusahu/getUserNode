var express= require('express');
var mysql= require('mysql');
var app=express();

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'sample'
});
connection.connect(function(err){

    if(err){
        console.log("Error!",err)
    }
    else{
        console.log('connected!')
    }
})

app.get((req,response=>{
    console.log('got request')
}))


app.listen(1337);