const express = require('express')
const index = require('./router/index');
const app = express();

app.use('/', index);

app.listen(3000, () => {
    console.log('端口启动成功');
});
