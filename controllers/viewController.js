const router = require('express').Router()

router.get('/', (req, res) => {
    grocery.getAll(groceries => {
        res.render('index', { groceries })
    })
})

module.exports = router