var express=require('express');
var app=express();

app.listen('3000',function(req,res){
console.log("listening to port 3000");

})

app.get('/home',function(req,res){
res.send('welcome to express');
})

var userList=require('./user.json');
app.get('/showuser',function(req,res){
var newuser=[];
user=req.query.user;
var flag=0;
for(const ele in userList)
{
if(userList[ele].username==user){
   newuser.push(userList[ele]);
   res.send("user already exist");
   flag=1;
}
}
if(flag==0)
res.send("not found");
res.send(newuser)

})