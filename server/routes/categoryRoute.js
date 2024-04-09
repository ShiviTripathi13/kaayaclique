const express = require('express');
const router = express.Router();

const { categoryController,
        updateCategoryController, 
        getAllCategoryController,
        getSingleCategoryController,
        deleteCategoryController } = require('../controllers/categoryController.js');
const { requireLogin, requireAdmin} = require('../middlewares/authMiddleware.js');
const { get } = require('mongoose');

// category route
router.post('/create-category', requireLogin, requireAdmin, categoryController);

// update category 
router.put('/update-category/:slug', requireLogin, requireAdmin, updateCategoryController);

// get all categories
router.get('/all-category', getAllCategoryController);

// single category
router.get('/single-category/:slug', getSingleCategoryController);

// delete category
router.delete('/delete-category/:slug', requireLogin, requireAdmin, deleteCategoryController);
module.exports = router;