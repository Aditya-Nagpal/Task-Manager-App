const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/add-task',require('./form'));
router.post('/delete-task',require('./delete'));
module.exports=router;