# Angular-Responsive-ImageSlider 
[![Build Status](https://secure.travis-ci.org/sukheja-varun/Angular-Responsive-ImageSlider.png?branch=develop)](http://travis-ci.org/sukheja-varun/Angular-Responsive-ImageSlider)

> A repsonsive image slider developed using angularjs-1 and materializecss

## Jump to Section

* [💾 Installation](#💾-installation)
* [▶️ Usage](#▶️-usage)
* [🔌Templates](#🔌templates)
* [💡Examples](#💡examples)
* [🎓 License](#🎓-license)

## 💾 Installation
[[Back To Top]](#jump-to-section)

### Bower

As a `Dependency` in your project using bower

```bash
bower install angular-responsive-imageslider --save
```

### NPM

As a `Dependency` in your project using npm

```bash
npm install angular-responsive-imageslider --save
```

Add this as a `dependency` to `bower.json/package.json`:

```
{
  "name": "my-package",
  "version": "1.0.0".
  "dependencies": {
    "angular-responsive-imageslider": "^0.0.1"
  }
}
```

## ▶️ Usage
[[Back To Top]](#jump-to-section)

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

NOTE: `data and options keep changing with their templates.`

## 🔌Templates
[[Back To Top]](#jump-to-section)

### Jump to Section

* [Template1](#template1)
* [Template2](#template2)

### Template1
[[Back To Top]](#jump-to-section)

To use this template pass `template1` as id to the directive. Check the `data` and `options` related to this template.
````html
<image-slider id="mainSlider" template-id="template1" data="imgData" options="options"></image-slider>
````

#### DATA
data has to be an array of objects, where each object contains 3 attributes:

|S# | Attribute | Mandatory | Description |
| ------ | ------ |----- |----- |
| 1 | imageUrl | Yes | image url of the image to be shown in the slider |
| 2 | tagLine | No | a big tagline to be displayed over image |
| 3 | slogan | No | a small slogan to be displayed over image |


Example
```angularjs
 $scope.imgData = [
            {
                imageUrl: 'https://lorempixel.com/580/250/nature/1',
                tagLine: 'This is our big Tagline!',
                slogan: 'Here\'s our small slogan.'
            }, {
                imageUrl: 'https://lorempixel.com/580/250/nature/2',
                tagLine: 'This is our big Tagline!',
                slogan: 'Here\'s our small slogan.'
            }, {
                imageUrl: 'https://lorempixel.com/580/250/nature/3',
                tagLine: 'This is our big Tagline!',
                slogan: 'Here\'s our small slogan.'
            }, {
                imageUrl: 'https://lorempixel.com/580/250/nature/4',
                tagLine: 'This is our big Tagline!',
                slogan: 'Here\'s our small slogan.'
            }
        ];
```
#### OPTIONS
check below various configuration options with their descriptions:

| Option Name | Description |
| ------ | ------ |
| indicators | Set false to hide slide indicators. (Default: True) |
| height | Set height of slider. (Default: 400) |
| width | Set height of slider. (Default: Parent width) |
| transition | Set the duration of the transition animation in ms. (Default: 500) |
| interval | Set the duration between transitions in ms. (Default: 6000) |
| textAlign | Alignment of tag line and slogan (values: left-align / right-align / center-align) |
| enableZoom | Set true to enable the feature of image zoom (Default: false) |

Example
```angularjs
    $scope.options = {
               textAlign: 'center-align',
               indicators: true,
               height: 500, 
               duration: 200,
               interval: 4000,
               enableZoom:true
           };
```

### Template2
[[Back To Top]](#jump-to-section)

To use this template pass `template2` as id to the directive. Check the `data` and `options` related to this template.
````html
<image-slider id="mainSlider" template-id="template2" data="imgData" options="options"></image-slider>
````

#### DATA
data has to be an array of imageUrls:

Example
```angularjs
  $scope.imgData = [
             'https://static.pexels.com/photos/257360/pexels-photo-257360.jpeg',
             'https://lorempixel.com/580/250/nature/1',
             'https://lorempixel.com/580/250/nature/2',
             'https://lorempixel.com/580/250/nature/3',
             'https://lorempixel.com/580/250/nature/4',
         ]
```
#### OPTIONS
check below various configuration options with their descriptions:

| Option Name | Description |
| ------ | ------ |
| height | Set height of slider. (Default: 400) |
| width | Set height of slider. (Default: Parent width) |
| enableZoom | Set true to enable the feature of image zoom (Default: false) |

Example
```angularjs
   $scope.options = {
              height: 500, 
              width: 600, 
              enableZoom:true
          };
```




## 💡Examples
[[Back To Top]](#jump-to-section)

* **Temaplate1**: https://codepen.io/sukheja-varun/pen/NXxBPe
* **Temaplate2**: https://codepen.io/sukheja-varun/pen/XVXobe

## 🎓 License
[[Back To Top]](#jump-to-section)

Copyright © 2017 sukheja-varun 

This software is licensed under [MIT License](https://github.com/sukheja-varun/Angular-Responsive-ImageSlider/blob/develop/LICENSE).

