const OrderModel = require("../Models/Order.Model");

const Today = ()=>
{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    const day = currentDate.getDate();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}


const GetAllOrders = async (req, res, next) => {
    try {
        let result;
        if("Status" in req.query)
        {
           status =  req.query.Status
            result = await OrderModel.find({order_date :Today(),order_status:req.query.Status})
            .populate('items.item_id')
            .populate('items.item_id.customize')
            .populate('items.selectedOptions');
        }
        else{
            result = await OrderModel.find({order_date :Today()})
            .populate('items.item_id')
            .populate('items.item_id.customize')
            .populate('items.selectedOptions');
        }
        //const result = await OrderModel.find({order_date :Today(),order_status:status})
     
          
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: true,
        status: "The Orders Get Successfully ",
        data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: false,
        status: "The Orders Get Failed ",
        error: err.message,
        });
    }
};


const GetOrderById = async (req, res, next) => {
    try {
        const result = await OrderModel.findById(req.params.id);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: true,
        status: "The Order Get Successfully ",
        data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: false,
        status: "The Order Get Failed ",
        error: err.message,
        });
    }
};


const CreateOrder = async (req, res, next) => {
    try {
        const {payment_method, items } = req.body;

        const order = new OrderModel({
            payment_method: payment_method,
            items: items,
        })
        const result = await order.save();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: true,
        status: "The Order Created Successfully ",
        data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: false,
        status: "The Order Creation Failed ",
        error: err.message,
        });
    }
};


const UpdateOrder = async (req, res, next) => {
    try {
        const {payment_method, items,Status } = req.body;
        const order = await OrderModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    payment_method: payment_method,
                    items: items,
                    order_status:Status
                },
            },
            { new: true }
            );
        const result = await order.save();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: true,
        status: "The Order Updated Successfully ",
        data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: false,
        status: "The Order Update Failed ",
        error: err.message,
        });
    }
};


const DeleteOrder = async (req, res, next) => {
    try {
        const result = await OrderModel.findByIdAndDelete(req.params.id);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: true,
        status: "The Order Deleted Successfully ",
        data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
        success: false,
        status: "The Order Deletion Failed ",
        error: err.message,
        });
    }
};


module.exports = {
    GetAllOrders,
    GetOrderById,
    CreateOrder,
    UpdateOrder,
    DeleteOrder
}