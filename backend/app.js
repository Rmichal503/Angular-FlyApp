const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('./model/User')

const app = express();

app.use(express.static(__dirname, '../dist/my-app'))

mongoose.connect('mongodb+srv://Admin:UwWktAEkH7LMzMUs@testcluster.jab49.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected to database');
}).catch((error)=>{
    console.log('connection failed ',error);
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    // ustawienie midleware które pozwala na łączenie się między różnymi domenami, w tym wypadki localhost:3000(server noda) oraz localhost:4200(server Angulara)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH,PUT, DELETE, OPTIONS');

    next();
})

app.post("/api/user/signup", (req, res, next)=>{
    bcrypt.hash(req.body.password, 10).then(hash=>{
        const user = new User({
            userName: req.body.user,
            password: hash
        });
        user.save().then(result=>{
            res.status(201).json({
                message: 'użytkownik dodany',
                result: result
            });
        }).catch(err =>{
            res.status(500).json({
                message: "cos jest nie tak",
                error: err
            });
        });
    });
});

app.post('/api/user/login', (req,res,next)=>{
    let fetchedUser;
    User.findOne({userName: req.body.user}).then(user=>{
        if(!user){
            return res.status(401).json({
                message: 'auth failed'
            })
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password)
    }).then(result=>{
        if(!result){
            return res.status(401).json({
                message: 'auth failed'
            })
        }
        const token = jwt.sign({userName: fetchedUser.userName, userId: fetchedUser._id}, '1feeec6b49f2030b43257b07f53d4e513297684c0ba26e02eeb27a49ce2d9eae', {expiresIn:'1h'});
        res.status(200).json({
            token: token,
            message:'udało się zalogować'
        })
    }).catch(err=>{
        return res.status(401).json({
            error: err
        })
    })
});

module.exports = app;

