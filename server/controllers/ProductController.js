const { getAllProducts, getProduct, addProduct } = require("../models/products")
const imagekit = require("../utils/imagekit")

class ProductController {
  static async readAllProducts(req, res, next) {
    try {
      const { offset } = req.query
      // Accepts an argument for offset
      const products = await getAllProducts(+offset)

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
      const { categoryName, sku, name, description, weight, width, length, height, price } = req.body
      // console.log(req.file, 'ini req.file')
      // This is using form data (multipart/form-data) for image uploading
      const { originalname, buffer } = req.file
      const imageInBase64 = buffer.toString("base64")
      const image = await imagekit.upload({
        file: imageInBase64,
        fileName: originalname,
      })

      const newProduct = await addProduct({ categoryName, sku, name, description, weight, width, length, height, image, price })

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