const router = require('express').Router()
const Check = require("../controllers/check_info")
router.route("/check_info")
      .get(Check.get)
      .post(Check.post)
      .delete(Check.delete)
      .put(Check.update)

module.exports = router
