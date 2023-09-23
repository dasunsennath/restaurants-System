const ItemModel = require("../Models/Items.Model");
const CustomizeModel = require("../Models/Customize.Model");

const GetAllItems = async (req, res, next) => {
  try {
    const result = await ItemModel.find({})
    .populate('customize');
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Items Get Successfully ",
      data: result,
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "The Items Get Failed ",
      error: err.message,
    });
  }
};

const GetItemById = async (req, res, next) => {
  try {
    const result = await ItemModel.findById(req.params.id)
    .populate('customize');
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Item Get Successfully ",
      data: result,
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "The Item Get Failed ",
      error: err.message,
    });
  }
};

const CreateItem = async (req, res, next) => {
  try {
    const { title, description, price, imageURL, category, qty, customize } = req.body;

    console.log(customize);
    const item = new ItemModel({
        title: title,
        description: description,
        price: price,
        imageURL: imageURL,
        category: category,
        qty: qty,
        customize: customize,
    })
    const result = await item.save();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Item Created Successfully ",
      data: result,
    });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "The Item Created Failed ",
      error: err.message,
    });
  }
};

const UpdateItem = async (req, res, next) => {
  try {
    const { title, description, price, imageURL, category, qty, customize } =
      req.body;

    const itemModel = await ItemModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: title,
          description: description,
          price: price,
          imageURL: imageURL,
          category: category,
          qty: qty,
          customize: customize,
        },
      },
      { new: true }
    );

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "The Item Updated Successfully ",
      data: itemModel,
    });
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: error.message, data: null });
  }
};


const DeleteItem = async (req, res, next) => {
    try {
        const result = await ItemModel.findByIdAndDelete(req.params.id)
        .populate('customize');
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: true,
            status: "The Item Deleted Successfully ",
            data: result,
        });
        }
        catch (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({
                success: false,
                status: "The Item Deleted Failed ",
                error: err.message,
            });
        }
}

module.exports = {
  GetAllItems,
  GetItemById,
  CreateItem,
  UpdateItem,
  DeleteItem,
};