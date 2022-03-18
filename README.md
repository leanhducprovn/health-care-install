## Health Care

### Backend development

#### NodeJS

-   Cài đặt NodeJS trên Window và MacOS
    Truy cập vào website chính thức của NodeJS, tải bản cài đặt mới nhất về máy tính và thực hiện cài đặt như bình thường

```js
https://nodejs.org/
```

-   Để kiểm tra cài đặt đã thành công hay chưa, bằng cách gõ lệnh:

```js
node - v;
```

-   Để kiểm tra NPM - Công cụ quản lý package của NodeJS đã cài đặt thành công hay chưa, bằng cách gõ lệnh:.

```js
npm - v;
```

-   Tạo thư mục chứa project

```js
mkdir health-care
```

-   Tạo file `package.json` trong thư mục gốc của project

```js
npm init
```

#### Express

-   Để cài đặt Express framework sử dụng npm như sau:

```js
npm install express --save
```

-   Cài thêm một số module quan trọng đi cùng với express như:

```js
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```

-   Tạo file `server.js` để bắt đầu lập trình, có nội dung như sau:

```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Health Care");
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log(`Health care at http://localhost:${port}`);
});
```

-   Khơi chạy server bằng lệnh:

```js
node server.js
```

#### MVC paradigm

Tiếp tục phát triển theo mô hình MVC
![MVC paradigm](https://camo.githubusercontent.com/afe2798199dae8a62dbe378fda06f6b1356f6e95a9704c7019023c0eb1822abd/68747470733a2f2f692e696d6775722e636f6d2f36306c494f6c692e706e67)
**Note**: _Cấu trúc lại thư mục theo chuẩn MVC._

### Frontend development

### Mobile development
