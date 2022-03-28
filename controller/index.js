const express = require('express')
const router = express.Router()
const {index} = require('../config/router.js')

router.get('/', index)

module.exports = router