﻿const express = require('express');
const router = express.Router();
const userService = require('./game.service');

// routes
router.post('/', saveGame);
// router.get('/', getAll);

module.exports = router;

// function authenticate(req, res, next) {
//     userService.authenticate(req.body)
//         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
//         .catch(err => next(err));
// }

function saveGame(req, res, next) {
    console.log(JSON.stringify, req);
    // userService.getAll()
    //     .then(users => res.json(users))
    //     .catch(err => next(err));

}
