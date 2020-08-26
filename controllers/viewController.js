
const router = require('express').Router()

router.use('/api', require('./viewController.js'))

module.exports = router