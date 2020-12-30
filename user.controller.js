exports.DaftarUser  = (req,res) => {
    if(req.body.email === User.DataBase.users[0].email &&
        req.body.password === User.DataBase.users[0].password){
            res.json('Success');
        }else {
            res.status(400).json('Error');
        }
}