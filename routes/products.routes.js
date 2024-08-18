import express from "express";
import products from "../controllers/products.controller.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    try{
        const{id} = req.params;
        const data = id ? await products.findOne(id) : await products.findAll();
        res.json(data)

    }catch (error){
        next.error
    }
});

router.post("/", async (req, res, next) => {
    try{
        const product = req.body;
        if (!product || Object.keys(product).length === 0) {
            return res.status(400).json({error: "Product data is required"});
        }
        const data = await products.addOne(product);
        res.status(201).json(data)
    }catch(error){
        next(error);
    }
})

router.put("/:id", async(req, res, next) => {
    try{
        const {id} = req.params;
        const product = req.body;
        const data = await products.updateOne(id, product);
        res.json(data);
    }catch(error){
        next(error);
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        const{id} = req.params;
        const data = await products.removeOne(id);
        res.json(data);
    }catch(error){
        next(error);
    }
})
export default router;