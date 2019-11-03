var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index', (req, res, next) => {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
}); 

router.get('/cart', (req, res, next)=>{
  res.render('cart');
});

router.get('/checkout',(req, res, next)=>{
  res.render('checkout');
});

router.get('/contact-us',(req, res, next)=>{
  res.render('contact-us');
});

router.get('/my-account',(req, res, next)=>{
  res.render('my-account');
});

router.get('/service',(req, res, next)=>{
  res.render('service');
});

router.get('/shop-detail',(req, res, next)=>{
  res.render('shop-detail');
});

router.get('/shop',(req, res, next)=>{
  res.render('shop');
});

router.get('/wishlist',(req, res, next)=>{
  res.render('wishlist');
});

router.get('/register',(req, res, next)=>{
  res.render('register');
});


router.get('/login',(req, res, next)=>{
  res.render('login');
});

  router.get('/searchResult',(req, res, next)=>{
    res.render('searchResult');
});

router.get('/orders-history',(req, res, next)=>{
  res.render('orders-history');
});

router.get('/update-account',(req, res, next)=>{
  res.render('update-account');
});

router.get('/update-accept',(req, res, next)=>{
  res.render('update-accept');
});

router.get('/forget-password',(req, res, next)=>{
  res.render('forget-password');
});

module.exports = router;
