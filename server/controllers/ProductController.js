const { getAllProducts, getProduct, addProduct } = require("../models/products")

class ProductController {
    static async readAllProducts(req, res, next) {
        try {
            // Accepts an argument for offset
            const products = await getAllProducts(10)

            res.status(200).json({
                message: 'Successfully fetched all products',
                data: products
            })
        } catch (error) {
            next(error)
        }
    }

    static async readProduct(req, res, next) {
        try {
            const product = await getProduct(+req.params.id)

            res.status(200).json({
                message: 'Successfully fetched product',
                data: product
            })
        } catch (error) {
            next(error)
        }
    }

    static async addProduct(req, res, next) {
        try {
            const { name, sku, categoryId, price, description, image } = req.body
            const newProduct = addProduct({ name, sku, categoryId, price, description, image })

            res.status(201).json({
                message: 'Successfully added new product',
                data: newProduct
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProductController