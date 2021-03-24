const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

const postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save()
  res.redirect('/');
};

exports.getAddProduct = getAddProduct;
exports.postAddProduct = postAddProduct;