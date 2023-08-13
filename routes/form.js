const express=require('express');
const router=express.Router();
const formController=require('../controllers/form_controller');
router.post('/add-task',formController.form);
module.exports=router;