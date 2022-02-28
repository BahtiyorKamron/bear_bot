const router = require('express').Router()
const Categoriya = require("../controllers/kategoriya")
router.route("/kategoriya")
      .get(Categoriya.get)
      .post(Categoriya.post)
      .delete(Categoriya.delete)


module.exports = router
