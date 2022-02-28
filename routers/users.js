const router = require('express').Router()
const User = require("../controllers/users")
router.route("/users")
      .get(User.get)
      .post(User.post)
      .delete(User.delete)
      .put(User.update)

module.exports = router
