const e = require('express');
const Product = require('../models/product');

//


const getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  })
};

const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  })
};

const getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart'
  })
};

exports.getCart = getCart;
exports.getProducts = getProducts;
exports.getIndex = getIndex;