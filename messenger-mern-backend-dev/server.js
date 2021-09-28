//import dependecies
import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import cors from 'cors';

import mongoMessages from './messageModel.js';

//app config
const app = express();
const port = process.env.PORT || 9000;


//middlewares

app.use(express.json());
app.use(cors());

//db config

const mongoURI = 'mongodb+srv://admin:sampath@cluster0.qjmkv.mongodb.net/messengerDB?retryWrites=true&w=majority';
mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', ()=>{
    console.log("Successfully Connected to mongo"); // mongoose.connection.readyState for status of connection
})
.on('error', (err)=>{
    console.log(err);
});

//api routes

app.get('/',(req, res)=>{
    res.status(200).send('hello world');
});

app.post('/save/messages',(req, res)=>{
    console.log(req.body);
    const dbMessage = req.body;
    mongoMessages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
});

app.get('/retrieve/conversation', (req, res)=>{
    mongoMessages.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
});

//listens
app.listen(port, ()=> console.log(`listening to ${port}`));
