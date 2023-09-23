const CustomizeModel = require("../Models/Customize.Model");


const CreateCustomize = async (req, res, next) => {
    try {

        const { option, price } = req.body;

        const customizeModel = new CustomizeModel({
            option: option,
            price: price,
        })

        const Result  =  await customizeModel.save();
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({
                success: true,
                status: "The Customize Created Successfully ",
                data: Result,
            });
    }
    catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: false,
            status: "The Customize Get Failed ",
            error: err.message,
        });
    }
};


const getCustomizeById = async (req, res, next) => {
    try {
        const result = await CustomizeModel.findById(req.params.id);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: true,
            status: "The Customize Get Successfully ",
            data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: false,
            status: "The Customize Get Failed ",
            error: err.message,
        });
    }
};


const UpdateCustomize = async (req, res, next) => {
    try {
        const { option, price } = req.body;
        const result = await CustomizeModel.findByIdAndUpdate(req.params.id, {
            option: option,
            price: price,
        });
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: true,
            status: "The Customize Updated Successfully ",
            data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: false,
            status: "The Customize Updated Failed ",
            error: err.message,
        });
    }
};


const DeleteCustomize = async (req, res, next) => {
    try {
        const result = await CustomizeModel.findByIdAndDelete(req.params.id);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: true,
            status: "The Customize Deleted Successfully ",
            data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: false,
            status: "The Customize Deleted Failed ",
            error: err.message,
        });
    }
};


const GetCustomizes = async (req, res, next) => {
    try {
        const result = await CustomizeModel.find({});
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: true,
            status: "The Customizes Get Successfully ",
            data: result,
        });
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
            success: false,
            status: "The Customizes Get Failed ",
            error: err.message,
        });
    }
};



module.exports = {
    CreateCustomize,
    getCustomizeById,
    UpdateCustomize,
    DeleteCustomize,
    GetCustomizes
}