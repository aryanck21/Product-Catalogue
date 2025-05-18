import Product from "../models/Product.model.js"
import mongoose from "mongoose";


export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({sucess:true , data: products});
    } catch (error) {
        console.log("error in fetching",error.message);
        res.status(500).json({sucess:false , message:"Server error"});
        
    }
};

export const createProducts = async(req,res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success: false,message: "Please provide all fields"});
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({sucess: true ,data: newProduct});
    } catch (error) {
        console.error("Error in create product",error.message);
        res.status(500).json({sucess:false,message:"server Error"});
    }
};

export const updateProducts = async(req,res)=>{
    const {id} =req.params;
    const product=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess:false,message:"Invalid Product id"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({sucess:true,data:updatedProduct});
    } catch (error) {
        res.status(500).json({sucess:false,message:"server error"});
    }
};

export const deleteProducts = async(req,res)=>{
    const {id}=req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({ sucess: true,message:"Product deleted"});
    }
    catch(error){
        res.status(404).json({ sucess: false,message:"Product not found"});
    }
};