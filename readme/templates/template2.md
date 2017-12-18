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
