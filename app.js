require('dotenv').config();
const express = require('express'); 

const app = express(); 
const port = process.env.PORT || 3000; 

app.use(express.json());

app.listen(port, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ port);
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 

app.get('/login', (req, res) =>{
    const data = {
        username: process.env.APP_USERNAME,
        password: process.env.APP_PASSWORD
    };
    console.log(data);
    res.json(data);
})

app.get('/users', (req, res) =>{
    const usersdata = require('./users.json');
    const resData = usersdata.map( (user) => ({
        name: user.name,
        email: user.email,
        username: user.username
    }))
    console.log(resData);
    res.json(resData);
})