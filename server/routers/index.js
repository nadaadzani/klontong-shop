const router = require('express').Router()
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const CategoryController = require('../controllers/CategoryController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)


module.exports = router