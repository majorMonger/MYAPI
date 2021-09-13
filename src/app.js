const express = require("express");
const connectToDB=require("./db/conn");
const app = express();
const Student = require("./models/Students");

const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/students',(req,res) => {

    console.log(req.body); 
    
    const user = new Student(req.body)
    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((e) => {

    })
        res.status(400).send(user);

})

app.listen (port,() => {

    console.log(`Connection is setup at ${port}`);
    connectToDB()
})