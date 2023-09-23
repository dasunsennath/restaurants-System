const express  =  require('express');
const OrderController  =  require('../Controller/Order.Controller');


const router = express.Router();

router.get('/', OrderController.GetAllOrders);
router.get('/:id', OrderController.GetOrderById);
router.post('/', OrderController.CreateOrder);
router.put('/:id', OrderController.UpdateOrder);
router.delete('/:id', OrderController.DeleteOrder);

module.exports = router;