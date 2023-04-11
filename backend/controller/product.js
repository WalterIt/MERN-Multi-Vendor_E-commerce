const express = require("express");
const path = require("path");
const Product = require("../model/product");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isSellerAuthenticated } = require("../middleware/auth");
const sendShopToken = require("../utils/ShopToken");
const Shop = require("../model/shop");

router.post(
  "/create-product",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);

      if (!shop) {
        return next(new ErrorHandler("Shop Not Found!", 400));
      } else {
        const productData = req.body;
        productData.shop = shop;
        const product = await Product.create(productData);
        res.status(201).json({
          success: true,
          message: "Product created Successfully!",
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);

// load Shop
router.get(
  "/getseller",
  isSellerAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      //   console.log(req.seller);
      const seller = await Shop.findById(req.seller._id);

      if (!seller) {
        return next(new ErrorHandler("User doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
