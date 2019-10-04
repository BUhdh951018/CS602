const express = require('express');
const router = express.Router();

const { duplicateKey, updatedPassword, deletedPassword, verifyUnique, addPassword, getPassword, passwordSwap, passwordDelete } = require('../util/passwordMethods');

router.all('*', (req, res, next) => {
    let secrets = req.session.secrets || [];
    req.session.secrets = secrets;
    next();
});

router.post('/create/:key-:password', function(req,res) {
    if (verifyUnique(req.params.key, req.session.secrets)) {
        req.session.secrets = addPassword(req.params.key, req.params.password, req.session.secrets);
        res.send(req.session.secrets);
    }
    else {
        res.send({
            message: duplicateKey
        });
    }
});

router.get('/retrieve', function(req,res) {
    res.send(req.session.secrets);
});

router.get('/retrieve/:key', function(req,res) {
    res.send({
        password: getPassword(req.params.key, req.session.secrets)
    });
});

router.put('/update/:key-:password', function(req,res) {
    req.session.secrets = passwordSwap(req.params.key, req.params.password, req.session.secrets);
    res.send({
        message: updatedPassword
    });
});

router.delete('/delete/:key', function(req,res) {
    req.session.secrets = passwordDelete(req.params.key, req.session.secrets);
    res.send({
        message: deletedPassword
    });
});

module.exports = router;