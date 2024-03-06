const Review = require("../models/review.js");
const productService=require("../services/product.service.js");

async function createReview(reqData,user){
    const product=await productService.findProductById(reqData.productId);

    const review=new Review({
        user:user._id,
        product:product,
        review:reqData.review,
        createdAt:new Date(),
    })

    await product.save();
    return await review.save();
}

async function getAllReview(productId){
    const product=await productService.findProductById(reqData.productId);
    return await Review.find({product:productId}).populate("user");
}

module.exports={
    createReview,
    getAllReview
}