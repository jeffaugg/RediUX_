var express = require("express")
var router = express.Router()
var loginService = require("../services/login.firebase.services")

// Deposi de importar o express e o serivce, criamos o método post no endpoint login, para realizar a transação com o "loginService". Neste método post é retornado pelo respose um valor true ou false.
router.post('/login', function(req, res, next) {
    let isLogin = loginService.login(req.body)
    res.json(isLogin)
})

export default router