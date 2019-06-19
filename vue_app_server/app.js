const express = require('express');

const pool = require('./pool');

const bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('start...')
});

app.use(bodyParser.urlencoded({
    extended: false
}));

const session = require('express-session');

app.use(session({
    secret: '128 random str',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const cors = require('cors');

app.use(cors({
    origin: [
        'http://127.0.0.1:3001',
        'http://localhost:3001',
        'http://localhost:8080',
        'http://localhost:8020',
        'http://localhost:63342'

    ],
    credentials: true
}))


app.get('/getImages', (q, s) => {
    var key = q.query.key;
    var rows = [{
            id: 1,
            url: 'http://127.0.0.1:3000/img/banner_main.png'
        },
        {
            id: 2,
            // url: 'http://127.0.0.1:3000/img/banner2.png'
            url: 'http://127.0.0.1:3000/img/banner_main.png'
        },
        {
            id: 3,
            url: 'http://127.0.0.1:3000/img/banner_main.png'
            // url: 'http://127.0.0.1:3000/img/banner3.png'
        },
        {
            id: 4,
            url: 'http://127.0.0.1:3000/img/banner_main.png'
            // url: 'http://127.0.0.1:3000/img/banner4.png'
        }
    ];

    s.send({code:1,data:rows,info:'success'})
})

app.get("/getCkeckNum", (q, s) => {
    var tel = q.query.tel;
    if (!tel) {
        setTimeout(() => {
            s.send({
                code: -1,
                data: '',
                info: '手机号码不正取'
            })
        }, 1000)
    } else {
        setTimeout(() => {
            s.send({
                code: 1,
                data: 123456,
                info: '获取成功'
            })
        }, 3000)
    }

})

app.post('/login', (q, s) => { 
    var data = q.body
})

//注册请求
app.post('/register', (q, s) => {
    console.log("aaaaa");
    var data = q.body;
    // var params = []
    // for (let k in data) {
    //     params.push(k)
    // }
    // var p = JSON.parse(params[0]);
    var tel = data.tel;
    var pwd = data.pwd;
    var check = data.check;
    var checkPwd = data.checkPwd;
    console.log(tel);
    console.log(pwd);
    if (!tel) {
        setTimeout(() => {
            s.send({ code: -1, info: '电话号码不能为空', data: '' })
        }, 2000);
        return
    } else { 
        var re = /^1\d{10}$/;
        if (!re.test(tel)) { 
            setTimeout(() => {
                s.send({ code: -1, info: '电话号码格式不对', data: '' })
            }, 2000);
            return
        }
    };
    if (!check) { 
        setTimeout(() => {
            s.send({ code: -1, info: '验证码不能为空', data: '' })
        },2000);
        return
    }else { 
        var re = /^1\d{10}$/;
        if (!re.test(tel)) { 
            setTimeout(() => {
                s.send({ code: -1, info: '电话号码格式不对', data: '' })
            }, 2000);
            return
        }
    };
    if (!pwd) { 
        setTimeout(() => {
            s.send({ code: -1, info: '密码不能为空', data: '' })
        },2000);
        return
    };
    if (!checkPwd) {
        setTimeout(() => {
            s.send({ code: -1, info: '确认密码不能为空', data: '' })
        }, 2000);
        return
    } else { 
        if (pwd != checkPwd) { 
            setTimeout(() => {
                s.send({ code: -1, info: '两次输入密码不一致', data: '' })
            }, 2000);
            return
        }
    }

    setTimeout(() => {
        s.send({ code: 1, info: '注册成功', data: 200 })
    }, 2000);
    
})

app.get('/getOrderLIst', (q, s) => {
    var data = [{
            id: 1, //订单id
            logo: '../image/2icon-weixin@2x.png', //订单图标
            title: '微信支付', //订单内容
            pay: false, //支付状态 true 已经支付  false 未支付
            assess: false, //评价状态 true 已经评价 false 未评价
        },
        {
            id: 2,
            logo: '../image/2icon-weixin@2x.png',
            title: '微信支付',
            pay: true,
            assess: false,
        },
        {
            id: 3,
            logo: '../image/icon-zhifubao@2x.png',
            title: '支付宝支付',
            pay: true,
            assess: true,
        },
        {
            id: 4,
            logo: '../image/icon-zhifubao@2x.png',
            title: '支付宝支付',
            pay: true,
            assess: false,
        },
        {
            id: 5,
            logo: '../image/2icon-weixin@2x.png',
            title: '微信支付',
            pay: true,
            assess: true,
        },
        {
            id: 6,
            logo: '../image/icon-zhifubao@2x.png',
            title: '支付宝支付',
            pay: false,
            assess: false,
        }
    ]

    s.send(data)
})

app.get('/getNews', (q, s) => {
    var re = /^[0-9]{1,}$/;
    var pno = q.query.pno;
    var pageSize = q.query.pageSize;
    if (!pno) {
        pno = 1
    }
    if (!pageSize) {
        pageSize = 7
    }
    if (!re.test(pno)) {
        s.send({
            code: -1,
            msg: '页码格式不正确'
        });
        return
    }
    if (!re.test(pageSize)) {
        s.send({
            code: -2,
            msg: '页大小格式不正确'
        });
        return
    }
    var progress = 0;
    var obj = {
        code: 1
    };
    var sql = 'select count(id) as c FROM xz_news';
    pool.query(sql, (e, r) => {
        if (e) throw e;
        s
        var pageCount = Math.ceil(r[0].c / pageSize);
        obj.pageCount = pageCount;
        progress += 50;
        if (progress == 100) {
            s.send(obj);
        }
    });

    var sql = 'SELECT id,ctime,title,img_url,point FROM xz_news LIMIT ?,?';
    var offset = parseInt((pno - 1) * pageSize);
    pool.query(sql, [offset, pageSize], (e, r) => {
        if (e) throw e;
        obj.data = r;
        progress += 50;
        if (progress == 100) {
            s.send(obj);
        }
    });

})

app.get('/getNewsInfo', (q, s) => {
    var id = q.query.id;
    console.log(id);
    var sql = " SELECT id,title,ctime,content";
    sql += " FROM xz_news WHERE id = ?";
    pool.query(sql, [id], (e, r) => {
        if (e) throw e;
        s.send({
            code: 1,
            data: r[0]
        })
    })
})

app.get("/addComment", (req, res) => {
    //1:参数 nid content
    var nid = req.query.nid;
    var content = req.query.content;
    //2:sql  INSERT INTO
    var sql = "INSERT INTO xz_comment(id,content,ctime,nid)VALUES(null,?,now(),?)";
    pool.query(sql, [content, nid], (err, result) => {
        if (err) throw err;
        //影响行数  07
        if (result.affectedRows > 0) {
            res.send({
                code: 1,
                msg: "评论发送成功"
            });
        } else {
            res.send({
                code: -1,
                msg: "评论发送失败"
            });
        }
    })

    //3:json {code:1,msg:""}
})

app.get('/getComments', (q, s) => {
    var re = /^[0-9]{1,}$/;
    var pno = q.query.pno;
    var pageSize = q.query.pageSize;
    var nid = q.query.nid
    if (!pno) {
        pno = 1
    }
    if (!pageSize) {
        pageSize = 7
    }
    if (!re.test(pno)) {
        s.send({
            code: -1,
            msg: '页码格式不正确'
        });
        return
    }
    if (!re.test(pageSize)) {
        s.send({
            code: -2,
            msg: '页大小格式不正确'
        });
        return
    }
    var progress = 0;
    var obj = {
        code: 1
    };
    var sql = 'select count(id) as c FROM xz_comment';
    sql += 'WHERE nid = ?'
    pool.query(sql, [nid], (e, r) => {
        if (e) throw e;
        var pageCount = Math.ceil(r[0].c / pageSize);
        obj.pageCount = pageCount;
        progress += 50;
        if (progress == 100) {
            s.send(obj);
        }
    });

    var sql = 'SELECT id,ctime,title ';
    sql += 'FROM xz_comment';
    sql += 'WHERE nid = ?';
    sql += ' LIMIT ?,?';
    var offset = parseInt((pno - 1) * pageSize);
    pool.query(sql, [nid, offset, pageSize], (e, r) => {
        if (e) throw e;
        obj.data = r;
        progress += 50;
        if (progress == 100) {
            s.send(obj);
        }
    });

})