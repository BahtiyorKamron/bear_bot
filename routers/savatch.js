const router = require('express').Router()
const Savatcha = require("../controllers/savatcha.js")
router.route("/savatcha")
      .get(Savatcha.get)
      .post(Savatcha.post)
      .delete(Savatcha.delete)
      .put(Savatcha.update)

module.exports = router
