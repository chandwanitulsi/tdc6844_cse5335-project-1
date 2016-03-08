var express= require('express');
var app=express();

app.use(express.static(__dirname + '/public'));

app.get('/countrieslist',function(req,res){
	console.log("i receieved a get request with region =");
	console.log(req.query.region);
	jsonObj = [];
	
	var jsonfilestring=require('./public/countryJson.json');
	for (key in jsonfilestring){
		
		if(jsonfilestring[key].hasOwnProperty('region')){
			if(jsonfilestring[key]['region'] ==req.query.region){
				//
				jsonObj.push(jsonfilestring[key]);
			}
		}
			
	}
	console.log(jsonObj);
	res.json(jsonObj);
});

app.listen(3001);
	
console.log('Hello world on 3001');