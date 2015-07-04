# Impromptu React Animated Header

Responsive nav header component for React.

### What is it?

[Try it](http://johanneshilden.github.io/impromptu-react-animated-header/) before you browserify it.

## Installation

```bash
$ npm install impromptu-react-animated-header
```

Copy CSS files and icons to build location.

```bash
$ cp -r node_modules/impromptu-react-animated-header/css/ node_modules/impromptu-react-animated-header/icons/ .
```

## How to use

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

```javascript
var React     = require('react');
var TopMenu   = require('impromptu-react-animated-header').TopMenu;
var MenuItem  = require('impromptu-react-animated-header').MenuItem;
var MenuBrand = require('impromptu-react-animated-header').MenuBrand;

var MyMenu = React.createClass({
    render: function() {
        return (
            <TopMenu cssTransitions={true}>
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

## Styling

## Props

| Property         | Type                     | Description   | Default      | 
| ---------------- | ------------------------ | ------------- | ------------ |
| `autoClose`      | Boolean                  | Controls whether the menu should automatically close when a menu item is clicked.      | true      |
| `threshold`      |  Number                  |          | 769    |
| `duration`       |  Number                  |          | 300    |
| `cssTransitions` |  Boolean                 |          | false  |
| `animate`        |  Boolean                 |          | true   |

## Contribute

## License

Impromptu React Animated Header is provided under the BSD License.
