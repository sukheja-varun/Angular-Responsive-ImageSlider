To use this template pass `template1` as id to the directive. Check the `data` and `options` related to this template.
````html
<image-slider id="mainSlider" template-id="template1" data="imgData" options="options"></image-slider>
````

####DATA
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
####OPTIONS
check below various configuration options with their descriptions:

| Option Name | Description |
| ------ | ------ |
| indicators | Set to false to hide slide indicators. (Default: True) |
| height | Set height of slider. (Default: 400) |
| width | Set height of slider. (Default: Parent width) |
| transition | Set the duration of the transition animation in ms. (Default: 500) |
| interval | Set the duration between transitions in ms. (Default: 6000) |
| textAlign | Alignment of tag line and slogan (values: left-align / right-align / center-align) |

