import { Router } from 'express';
import * as GoodController from '../controllers/good.controller';
const router = new Router();

// Get all goods
router.route('/goods').get(GoodController.getGoods);

// Get one good by id
router.route('/goods/:id').get(GoodController.getGood);

// Add a new good
router.route('/goods').post(GoodController.addGood);

// Edit a good
router.route('/goods/:id').put(GoodController.editGood);

// Delete a good by id
router.route('/goods/:id').delete(GoodController.deleteGood);

export default router;
