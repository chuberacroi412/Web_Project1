var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  {name: 'Trang chủ'});
});
// res.render('index', { title: 'Express' });

router.get('/index.html', (req, res, next)=>{
  res.render('index', {name: 'Trang chủ'});
});

router.get('/barchart.html', (req, res, next)=>{
  res.render('barchart', {name: 'Báo cáo doanh thu'});
});

router.get('/cards.html', (req, res, next)=>{
  res.render('cards', {name: 'Danh sách tài khoản'});
});

router.get('/datatable.html', (req, res, next)=>{
  res.render('datatable', {name: 'Sản phẩm bán chạy nhất'});
});

router.get('/form.html', (req, res, next)=>{
  res.render('form', {name: 'Chỉnh sửa tài khoản'});
});

router.get('/form', (req, res, next)=>{
  res.render('form', {name: 'Chỉnh sửa tài khoản'});
});

router.get('/index2.html', (req, res, next)=>{
  res.render('index2', {name: 'Quản lí đơn hàng'});
});


router.get('/linechart.html', (req, res, next)=>{
  res.render('linechart', {name: 'Báo cáo doanh thu'});
});

router.get('/piechart.html', (req, res, next)=>{
  res.render('piechart', {name: 'Báo cáo doanh thu'});
});

router.get('/table-basic.html', (req, res, next)=>{
  res.render('table-basic', {name: 'Quản lí sản phẩm'});
});

router.get('/table-layout.html', (req, res, next)=>{
  res.render('table-layout', {name: 'Quản lí quầy hàng'});
});


module.exports = router;
