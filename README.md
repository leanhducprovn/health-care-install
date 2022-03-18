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
### Database development
#### MongoDB
Sử dụng **MongoDB Atlas** để lưu trữ dữ liệu. **MongoDB Atlas** là **cloud database** của MongoDB được ra mắt vào năm 2016 chạy trên AWS, Microsoft Azure và Google Cloud Platform.
<p align="left">
	<a href="https://www.mongodb.com/" target="_blank"  rel="noreferrer">
		<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="130"/>
	</a>
</p>

Để sử dụng **Atlas** truy cập [vào đây](https://www.mongodb.com/cloud/atlas) và nhấn nút **Try Free**, sau đó đăng ký tài khoản để bắt đầu!
#### Database design
![Thiết kế cơ sở dữ liệu](https://camo.githubusercontent.com/e80715b4244b5c6cc4538c6152ae317d400a77832ed50f6e58e9d990bafe4918/68747470733a2f2f692e696d6775722e636f6d2f7166416c6250312e706e67)
***Note**: Thiết kế cơ sở dữ liệu phù hợp với yêu cầu bài toán.*
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

#### Bootstrap
##### CSS
Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```
##### JavaScript
Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Popper](https://popper.js.org/). Place **one of the following  `<script>`** near the end of your pages, right before the closing `</body>` tag, to enable them.
##### Bundle
Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both `bootstrap.bundle.js` and `bootstrap.bundle.min.js` include [Popper](https://popper.js.org/) for our tooltips and popovers. For more information about what’s included in Bootstrap, please see our [contents](https://getbootstrap.com/docs/5.1/getting-started/contents/#precompiled-bootstrap) section.
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```
##### Separate
If you decide to go with the separate scripts solution, Popper must come first (if you’re using tooltips or popovers), and then our JavaScript plugins.
```html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
```
##### Responsive meta tag
Bootstrap is developed _mobile first_, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
##### Starter template
Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```
For next steps, visit the  [Layout docs](https://getbootstrap.com/docs/5.1/layout/grid/)  or  [our official examples](https://getbootstrap.com/docs/5.1/examples/)  to start laying out your site’s content and components.
### Mobile development