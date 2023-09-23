const express  =  require('express');
const CustomizeController  =  require('../Controller/Customize.Controller');

const router = express.Router();

router.get('/', CustomizeController.GetCustomizes);
router.get('/:id', CustomizeController.getCustomizeById);
router.post('/', CustomizeController.CreateCustomize);
router.put('/:id', CustomizeController.UpdateCustomize);
router.delete('/:id', CustomizeController.DeleteCustomize);

module.exports = router;

