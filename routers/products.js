const router = require('express').Router()
const Products = require("../controllers/products.js")
router.route("/products")
      .get(Products.get)
      .post(Products.post)
      .delete(Products.delete)
      .put(Products.update)

module.exports = router
