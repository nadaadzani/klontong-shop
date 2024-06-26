const router = require('express').Router()
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const CategoryController = require('../controllers/CategoryController')
const authentication = require('../middlewares/authentication')
const upload = require('../utils/multer')
const middlewareUpload = upload.single('image')

// No Authentication
// router.get('/')
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/products', ProductController.readAllProducts)

// Authentication Middleware
router.use(authentication)

// Authentication required
router.get('/products/:id', ProductController.readProduct)
router.post('/products', middlewareUpload, ProductController.addProduct)

module.exports = router