const express = require("express");
const router = express.Router();

const userController = require("../controller/user");



router.post('/create',userController.userCreate)
router.get('/read',userController.userRead)
router.put('/update',userController.userUpdate)
router.delete('/delete',userController.userDelete)





module.exports = router;