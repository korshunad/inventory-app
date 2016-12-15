import { Router } from 'express';
import * as CategoryController from '../controllers/category.controller';
const router = new Router();

// Get all categories
router.route('/categories').get(CategoryController.getCategories);


// Add a new category
router.route('/categories').post(CategoryController.addCategory);

// Delete a category by id
router.route('/categories/:id').delete(CategoryController.deleteCategory);

export default router;
