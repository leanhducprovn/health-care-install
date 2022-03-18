## Health Care

### Backend development
<p align="left">  
  <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/leanhducprovn/health-care-install/main/src/public/images/backend.png" alt="backend development" width="" height="130"/> 
  </a>
</p>
 
#### NodeJS
Cài đặt NodeJS trên Window hoặc MacOS
Truy cập vào website chính thức của NodeJS, tải bản cài đặt mới nhất về máy tính và thực hiện cài đặt như bình thường
```
https://nodejs.org/
```
Để kiểm tra cài đặt đã thành công hay chưa, bằng cách gõ lệnh:
```
node -v
```
Để kiểm tra NPM - Công cụ quản lý package của NodeJS đã cài đặt thành công hay chưa, bằng cách gõ lệnh:.
```
npm -v
```
Tạo thư mục chứa project
```
mkdir health-care
```
Tạo file `package.json` trong thư mục gốc của project
```
npm init
```
#### Express
Để cài đặt Express framework sử dụng npm như sau:
```
npm install express --save
```
Cài thêm một số module quan trọng đi cùng với express như:
```
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```
Tạo file `server.js` để bắt đầu lập trình, có nội dung như sau:
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
Khởi chạy server bằng lệnh:
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
    <img src="https://raw.githubusercontent.com/leanhducprovn/health-care-install/main/src/public/images/handlebarsjs.png" alt="handlebars" width="100" height="70"/> 
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
#### Handlebars
Có nhiều cách để cài đặt Handlebars, tùy thuộc vào ngôn ngữ lập trình và môi trường bạn đang sử dụng.

Việc triển khai tham chiếu của Handlebars được viết bằng JavaScript. Nó được cài đặt phổ biến nhất bằng cách sử dụng `npm` hoặc `yarn`:

```
npm install handlebars
# or
yarn add handlebars
```
Sau đó, bạn có thể sử dụng Handlebars bằng `require`
```js
const handlebars = require("handlebars");
const hbs = handlebars.create({
	extname: ".hbs",
});
```
Sử template engine:
```js
app.engine("hbs", hbs.engine);
```
### Deploy
#### GitHub
GitHub là một dịch vụ cung cấp kho lưu trữ mã nguồn Git dựa trên nền web cho các dự án phát triển phần mềm.

**Git** hỗ trợ các hệ điều hành **Windows, Mac OS, Linux (Ubuntu, ..)**, để download bạn có thể truy cập vào trang chủ của **Git**:
```
https://git-scm.com
```
Push code lên GitHub
```
echo "# push" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/leanhducprovn/push.git
git push -u origin main
```
**Note**: *Trên đây là ví dụ minh hoạ!*
#### Heroku
Heroku là một nền tảng đám mây như một dịch vụ hỗ trợ một số ngôn ngữ lập trình.

Truy cập trang chủ của **Heroku** và đăng ký tài khoản:
```
https://www.heroku.com/
```
**Các bước deploy**:
- Chọn **New** → chọn **Create new app** → đặt tên **App** → chọn **Create app** 
- Trong **Deployment method** chọn **GitHub**
- Trong **Connect to GitHub** chọn **Tài khoản** và **Repo** → chọn **Connect** → chọn **Enable Automatic Deploys**
- Trong **Manual deploy** → chọn **Deploy Branch** → Thành công!

**Note**: *Có thể thêm tên tên miền tuỳ chỉnh trong phần cài đặt!*
### Mobile development
#### Flutter
Flutter là một SDK phát triển ứng dụng di động nguồn mở được tạo ra bởi Google. Nó được sử dụng để phát triển ứng ứng dụng cho Android và iOS, cũng là phương thức chính để tạo ứng dụng cho Google Fuchsia.
##### Get the Flutter SDK
Download the following installation bundle to get the latest stable release of the Flutter SDK:
<a href="https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_2.10.3-stable.zip" target="_blank" rel="noreferrer"> 
	<img src="https://img.shields.io/badge/Downloads-6.9M/week-success" alt="flutter_macos_2.10.3-stable.zip" width="200" height=""/> 
</a>

Extract the file in the desired location, for example:
```
cd ~/development
unzip ~/Downloads/flutter_macos_2.10.3-stable.zip
```
Add the `flutter` tool to your path:
```
export PATH="$PATH:`pwd`/flutter/bin"
```
##### Create and run a simple Flutter app
Create a new Flutter app by running the following from the command line:
```
$ flutter create my_app
```
A  `my_app`  directory is created, containing Flutter’s starter app. Enter this directory: 
```
cd my_app
```
To launch the app in the Simulator, ensure that the Simulator is running and enter:
```
flutter run
```