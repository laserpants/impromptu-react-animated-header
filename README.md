# Impromptu React Animated Header

Responsive nav header component for React.

### What is it?

[Try it](http://johanneshilden.github.io/impromptu-react-animated-header/) before you browserify it.

## Installation

Npm is the recommended install method.

```bash
$ npm install impromptu-react-animated-header
```

Copy CSS files and icons to build location.

```bash
$ cp -r node_modules/impromptu-react-animated-header/css/ node_modules/impromptu-react-animated-header/icons/ .
```

## How to use

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React Impromptu Animated Header</title>
    <link href="css/impromptu-header.min.css" rel="stylesheet">
</head>
<body>
    <div id="anchor"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

`main.js`

```javascript
var React     = require('react');
var TopMenu   = require('impromptu-react-animated-header').TopMenu;
var MenuItem  = require('impromptu-react-animated-header').MenuItem;
var MenuBrand = require('impromptu-react-animated-header').MenuBrand;

var MyMenu = React.createClass({
    render: function() {
        return (
            <TopMenu>
                <MenuBrand>
                    <a data-scroll href="#home">Navigation</a>
                </MenuBrand>
                <MenuItem>
                    <a data-scroll href="#home">Home</a>
                </MenuItem>
                <MenuItem>
                    <a data-scroll href="#about">About</a>
                </MenuItem>
                <MenuItem>
                    <a data-scroll href="#configuration">Configuration</a>
                </MenuItem>
                <MenuItem>
                    <a data-scroll href="#contribute">Contribute</a>
                </MenuItem>
             </TopMenu>
        );
    }
});

React.render(
    <MyMenu />,
    document.getElementById('anchor')
);
```

```bash
$ browserify -t reactify main.js -o bundle.js 
```

## Styling

```html
<link href="//cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" rel="stylesheet">
<link href="css/impromptu-header.min.css" rel="stylesheet">
<link href="//fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
<style type="text/css" rel="stylesheet">
    body { 
        font-family: "Lato", sans-serif; 
    }
</style>
```

## Props

| Property         | Type                     | Description   | Default      | 
| ---------------- | ------------------------ | ------------- | ------------ |
| `autoClose`      | Boolean                  | Controls whether the menu should automatically close when an item is clicked.      | true      |
| `threshold`      |  Number                  | Collapse breakpoint: A viewport width less than this value will cause the navbar to collapse. (in pixels). | 769    |
| `cssTransitions` |  Boolean                 | Apply CSS classes for transitions? | false  |
| `animate`        |  Boolean                 | Animate opening and closing of the menu in collapsed mode? | true   |
| `duration`       |  Number                  | Duration of the anmation, in milliseconds. | 300    |

### CSS Transitions

## Contribute

## License

Impromptu React Animated Header is provided under the BSD License.
