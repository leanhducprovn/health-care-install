## Health Care

### Backend development

#### NodeJS

-   Cài đặt NodeJS trên Window và MacOS
    Truy cập vào website chính thức của NodeJS, tải bản cài đặt mới nhất về máy tính và thực hiện cài đặt như bình thường

```
https://nodejs.org/
```

-   Để kiểm tra cài đặt đã thành công hay chưa, bằng cách gõ lệnh:

```
node -v
```

-   Để kiểm tra NPM - Công cụ quản lý package của NodeJS đã cài đặt thành công hay chưa, bằng cách gõ lệnh:.

```
npm -v
```

-   Tạo thư mục chứa project

```
mkdir health-care
```

-   Tạo file `package.json` trong thư mục gốc của project

```
npm init
```

#### Express

-   Để cài đặt Express framework sử dụng npm như sau:

```
npm install express --save
```

-   Cài thêm một số module quan trọng đi cùng với express như:

```
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```

-   Tạo file `server.js` để bắt đầu lập trình, có nội dung như sau:

```
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

-   Khơi chạy server bằng lệnh:

```
node server.js
```

### Frontend development

### Mobile development
