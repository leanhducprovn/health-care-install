## Health Care

### Backend development

<p align="left">  
  <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/leanhducprovn/health-care-install/main/images/backend.png" alt="backend development" width="" height="130"/> 
  </a>
 </p>
 
#### NodeJS
 - Cài đặt NodeJS trên Window hoặc MacOS
Truy cập vào website chính thức của NodeJS, tải bản cài đặt mới nhất về máy tính và thực hiện cài đặt như bình thường
```
https://nodejs.org/
```
 - Để kiểm tra cài đặt đã thành công hay chưa, bằng cách gõ lệnh:
```
node -v
```
- Để kiểm tra NPM - Công cụ quản lý package của NodeJS đã cài đặt thành công hay chưa, bằng cách gõ lệnh:.
```
npm -v
```
- Tạo thư mục chứa project
```
mkdir health-care
```
- Tạo file `package.json` trong thư mục gốc của project
```
npm init
```
#### Express
- Để cài đặt Express framework sử dụng npm như sau:
```
npm install express --save
```
- Cài thêm một số module quan trọng đi cùng với express như:
```
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```
- Tạo file `server.js` để bắt đầu lập trình, có nội dung như sau:
```js
var express = require("express");
var app = express();

app.get("/", function(req, res) {
res.send("Health Care");
});

var server = app.listen(3000, function() {
var port = server.address().port;
console.log(`Health care at http://localhost:${port}`);
});

```
- Khơi chạy server bằng lệnh:
```

node server.js

```
#### MVC paradigm
Tiếp tục phát triển theo mô hình MVC
![MVC paradigm](https://camo.githubusercontent.com/afe2798199dae8a62dbe378fda06f6b1356f6e95a9704c7019023c0eb1822abd/68747470733a2f2f692e696d6775722e636f6d2f36306c494f6c692e706e67)
**Note**: *Cấu trúc lại thư mục theo chuẩn MVC.*
### Frontend development
<p align="left">
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="70"/>
  </a>
  <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="70"/>
  </a>
  <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="50" height="70"/>
  </a>
  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="70"/>
  </a>
  <a href="https://handlebarsjs.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/leanhducprovn/health-care-install/main/images/handlebarsjs.png" alt="handlebars" width="100" height="70"/>
  </a>
</p>

### Mobile development
```
