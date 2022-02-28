const router = require('express').Router()
const Check = require("../controllers/check_admin")
router.route("/check_admin")
      .get(Check.get)
      .post(Check.post)
      .delete(Check.delete)
      .put(Check.update)

module.exports = router
