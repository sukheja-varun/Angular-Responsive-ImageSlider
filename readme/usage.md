1. Add Angular-Responsive-ImageSlider.min.js and Angular-Responsive-ImageSlider.min.css to your main file (index.html)
  ```html
  <link rel="stylesheet" href="bower_components/angular-responsive-imageslider/dist/css/Angular-Responsive-ImageSlider.min.css">
  <script src="bower_components/angular-responsive-imageslider/dist/js/Angular-Responsive-ImageSlider.min.js"></script>
  ```
OR
  ```html
  <link rel="stylesheet" href="node_modules/angular-responsive-imageslider/dist/css/Angular-Responsive-ImageSlider.min.css">
  <script src="node_modules/angular-responsive-imageslider/dist/js/Angular-Responsive-ImageSlider.min.js"></script>
  ```

2. Set `angular-responsive-imageslider` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['image_slider'])
  ```
3. Add `image-slider` directive wherever needed
```html
<image-slider id="mainSlider" template-id="template1" data="imgData" options="options"></image-slider>
```
| Attribute | Descriptions |
| ------ | ------ |
| id | ID that you want to give to image-slider |
| template-id | id of template which you want to use in image-slider |
| data | images you want to display |
| options | various configuration parameters |

NOTE: `data and options keep chnaging with their templates.`