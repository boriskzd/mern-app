const express = require("express");
// import CRUD operations
const UserCtrl = require("../controllers/user-ctrl");
// create router which will handle belonging CRUD operation for each route
const router = express.Router();

router.post("/user", UserCtrl.createUser);
router.delete("/user/:id", UserCtrl.deleteUser);
router.get("/user/:id", UserCtrl.getUserById);
router.get("/users", UserCtrl.getUsers);

module.exports = router;
