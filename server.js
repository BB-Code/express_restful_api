var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mytest')
var db = mongoose.connection;
db.on('error', console.error.bind(console, '链接失败'));
db.once('open', function() {
    console.log('数据库链接成功')
})
var Fruit = require('./models/fruits');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 9090;

var router = express.Router();
router.use(function(req, res, next) {
    console.log('中间件运行...');
    next();
})


router.route('/fruits')
    .post(function(req, res) {
        var fruit = new Fruit();
        fruit.name = req.body.name;
        fruit.color = req.body.color;
        fruit.price = req.body.price;

        fruit.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: '创建水果成功' })
        });
    })
    .get(function(req, res) {
        Fruit.find(function(err, fruits) {
            if (err) {
                res.send(err);
            }
            res.json(fruits);
        });
    });

router.route('/fruits/:fruit_id')
    .get(function(req, res) {
        Fruit.findById(req.params.fruit_id, function(err, fruit) {
            if (err) {
                console.log(errr)
            }
            res.json(fruit);
        });
    })
    .put(function(req, res) {
        Fruit.findById(req.params.fruit_id, function(err, fruit) {
            if (err) {
                console.log(err);
            }
            fruit.name = req.body.name;
            fruit.color = req.body.color;
            fruit.price = req.body.price;

            fruit.save(function(err) {
                if (err) {
                    console.log(err);
                }
                res.json({ message: '修改水果成功' })
            });
        });
    })
    .delete(function(req, res) {
        Fruit.remove({
            _id: req.params.fruit_id
        }, function(err, fruit) {
            if (err) {
                console.send(err);
            }
            res.json({ message: '删除水果成功' });
        });
    });

// router.get('/', function(req, res) {
//     res.json({ message: '我的API' });
// });

app.use('/api', router);
app.listen(port);
console.log("服务在端口" + port + "运行");