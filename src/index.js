const express = require('express');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars'); // Đảm bảo import đúng cú pháp
const path = require('path');
const handlebars = require('express-handlebars');

//Dòng mã này cho phép bạn phục vụ các tập tin tĩnh trực tiếp từ thư mục public trong ứng dụng Express
app.use(express.static(path.join(__dirname,'public')))
//HTTP logger
var morgan = require('morgan');
app.use(morgan('combined'))

//express.json() :Middleware này giúp Express.js parse (phân tích) dữ liệu từ yêu cầu HTTP có dạng JSON.
//express.urlencoded() :Middleware này giúp parse dữ liệu form HTML, cụ thể là với yêu cầu HTTP có phương thức POST và Content-Type là application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Template engine
app.engine('handlebars', engine({
  extname: '.handlebars', // Thiết lập phần mở rộng file nếu cần thiết, mặc định là .handlebars
  defaultLayout: 'main', // Thiết lập layout mặc định nếu có
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));

//Route init
const route = require('./routes')
route(app);

//connect db
const db = require('./config/db');
db.connect();



app.listen(port, () => {
  console.log(`Example app listening on port :  http://localhost:${port}`)
})