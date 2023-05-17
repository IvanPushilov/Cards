const express = require('express');

const router = express.Router();
const main = require ('./view/main.routes.js')
const mainRoute = require('./view/user.routes');
const userRoute = require('./view/user.routes')
const cardRoute = require('./view/card.routes')
router.use('/', mainRoute)
router.use('/user', userRoute)
router.use('/cards', cardRoute);

module.exports = router;
