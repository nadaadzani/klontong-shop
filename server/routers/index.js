const router = require('express').Router()
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const CategoryController = require('../controllers/CategoryController')
const authentication = require('../middlewares/authentication')

// No Authentication
// router.get('/')
router.post('/register', UserController.register)
router.post('/login', UserController.login)

// Authentication Middleware
router.use(authentication)

// Authentication required
router.get('/products', ProductController.readAllProducts)
router.get('/products/:id', ProductController.readProduct)
router.post('/products', ProductController.addProduct)

module.exports = router