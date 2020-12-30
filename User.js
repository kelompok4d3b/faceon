const express       = require('express');
const router        = express.Router();
const {DaftarUser}  = require('../controller/user.controller');
const DataBase      = {
    users: [
        {
            id: '123',
            firstName: 'Dani',
            lastName: 'Jon',
            phone: '1234567890',
            email: 'danijon@gmail.com',
            password: 'danijon',
            gender: 'Male',
            joined: new Date()
        },
        {
            id: '124',
            firstName: 'Nad',
            lastName: 'Dia',
            phone: '1234567899',
            email: 'naddia@gmail.com',
            password: 'naddia',
            gender: 'Female',
            joined: new Date()
        }
    ]
}

router.post('/login', (req,res) => {
    if(req.body.email === DataBase.users[0].email &&
        req.body.password === DataBase.users[0].password){
            res.json('Success');
        }else {
            res.status(400).json('Error');
        }
});

router.post('/register', (req,res) => {
    const { firstName, lastName, phone, email, password, gender } = req.body;
    DataBase.users.push({
        id: '126',
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password,
        gender: gender,
        joined: new Date()
    })
    res.json(DataBase.users[DataBase.users.length-1]);
})

module.exports = router