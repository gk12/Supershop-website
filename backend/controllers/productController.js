const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");


//create product :-Admin route
exports.createProduct=async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        product,
    });
}

//Get all products
exports.getAllProducts=async(req,res)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}

// Update Product -- Admin
exports.updateProduct=async(req,res,next)=>{
    let product=await Product.findById(req.param.id);


    if(!product)
    {
        return next(new ErrorHander("Product not found",404));

    }

    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        userFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    });
}

//DELETE PRODUCT

exports.deleteProduct=async(req,res,next)=>{
    const product=await Product.findById(req.params.id);

    if(!product)
    {
        return next(new ErrorHander("Product not found",404));

    }
  await product.remove();

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    });

}

//GET a single PRODUCT DETAILS
exports.getProductDetails=async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product not found",404));
        }
    
    
    res.status(200).json({
        success:true,
        product
    })
}