import express from "express";


import productsRouter from "./products.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});



router.use("/products", productsRouter);

export default router;
