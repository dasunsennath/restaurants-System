const mongoose = require('mongoose');
const ShortUniqueId = require('short-unique-id');

const uid = new ShortUniqueId({ length: 4 });
//const { v4: uuidv4 } = require('uuid');
const OrderUUID =()=>{
   const ID =  uid.rnd();
    return `ORD${ID}`;
}


const OrderStatus  = {
    PENDING : "PENDING",
    CONFIRMED : "CONFIRMED",
    PROCESSING : "PROCESSING",
    CANCELLED : "CANCELLED",
    COMPLETED : "COMPLETED",
}

const PaymentMethod = {
    CASH : "CASH",
    CREDIT_CARD : "CREDIT CARD",
    Add_To_Bill : "ADD TO BILL"
}

const Today = ()=>
{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    const day = currentDate.getDate();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

const itemsSchema = mongoose.Schema({
    item_id : {   type : mongoose.Schema.Types.ObjectId,
                 ref : 'Item',
                  required : true },
    qty :  { type: Number, required: true },
    menu_id : { type: Number, required: false },
    selectedOptions : [{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Customize',
                required : false      
    }],
    comment :  { type: String, required: false },

}, {timestamps: true});

const OrderSchema = mongoose.Schema({
    order_id : { type: String, required: true, unique: true , default:OrderUUID() },
    order_status :  { type: String, required: true, enum: Object.values(OrderStatus),default: OrderStatus.PENDING },
    order_date: { type: String, required: true, default:Today() },
    payment_method :  { type: String, required: true, enum: Object.values(PaymentMethod),default: PaymentMethod.CASH },
    customer_id : { type: String},
    items : [itemsSchema],
}, {timestamps: true});



 



module.exports = mongoose.model('Order', OrderSchema);