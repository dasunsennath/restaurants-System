const express  =  require('express');
const ItemsController  =  require('../Controller/Items.Controller');


const router = express.Router();

router.get('/', ItemsController.GetAllItems);
router.get('/:id', ItemsController.GetItemById);
router.post('/', ItemsController.CreateItem);
router.put('/:id', ItemsController.UpdateItem);
router.delete('/:id', ItemsController.DeleteItem);

module.exports = router;