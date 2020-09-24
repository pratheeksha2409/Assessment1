var express=require('express');
var app=express();

app.listen('3000',function(req,res){
console.log("listening to port 3000");

})

app.get('/home',function(req,res){
res.send('Welcome to Express');
})

var listofhotels=require('./hotels.json');

app.get('/listofhotels',function(req,res){
   res.send(listofhotels);
   })

app.get('/hotelbycity',function(req,res){
   var newhotel=[];
//    res.setHeader('Acess-Control-Allow-Origin','*');//NEW
//    city1=req.query.city;
   res.send(city1);
   var flag=0;
   for(const ele in listofhotels)
   {
   if(listofhotels[ele].city==city1){
      newhotel.push(listofhotels[ele]);
      flag=1;
   }
   }
   if(flag==0)
   res.send("Not found");
   res.send(newhotel)
   
   })
   app.get('/hotelbytype',function(req,res){
      var newhotel=[];
      type=req.query.type;
      var flag=0;
      for(const ele in listofhotels)
      {
      if(listofhotels[ele].type==type){
         newhotel.push(listofhotels[ele]);
         flag=1;
      }
      }
      if(flag==0)
      res.send("Not found");
      res.send(newhotel)
      
      })

     
app.get("/hotelbycuisine", function(req, res)
{
    cuisine = req.query.cuisine;
    searchcuisine = [];
    listofhotels.forEach(element =>
    {
        for (const key in element.cuisine)
        {
            if(cuisine == element.cuisine[key])
            {
                searchcuisine.push(element.name);
            }
        }
    });
    res.send(searchcuisine);
})