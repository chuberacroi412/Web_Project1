var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/index.html', (req, res, next) => {
  res.render('index');
});

router.get('/about.html', function(req, res, next) {
  res.render('about');
}); 

router.get('/cart.html', (req, res, next)=>{
  res.render('cart');
});

router.get('/checkout.html',(req, res, next)=>{
  res.render('checkout');
});

router.get('/contact-us.html',(req, res, next)=>{
  res.render('contact-us');
});

router.get('/my-account.html',(req, res, next)=>{
  res.render('my-account');
});

router.get('/service.html',(req, res, next)=>{
  res.render('service');
});

router.get('/shop-detail.html',(req, res, next)=>{
  res.render('shop-detail');
});

router.get('/shop.html',(req, res, next)=>{
  res.render('shop');
});

router.get('/wishlist.html',(req, res, next)=>{
  res.render('wishlist');
});

router.get('/register.html',(req, res, next)=>{
  res.render('register');
});


router.get('/login.html',(req, res, next)=>{
  res.render('login');
});

  router.get('/searchResult.html',(req, res, next)=>{
    res.render('searchResult');
});

router.get('/orders-history.html',(req, res, next)=>{
  res.render('orders-history');
});

router.get('/update-account.html',(req, res, next)=>{
  res.render('update-account');
});

router.get('/update-accept.html',(req, res, next)=>{
  res.render('update-accept');
});

router.get('/forget-password.html',(req, res, next)=>{
  res.render('forget-password');
});

module.exports = router;
