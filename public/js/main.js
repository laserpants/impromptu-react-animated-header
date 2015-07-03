var React     = require('react');
var TopMenu   = require('impromptu-react-animated-header').TopMenu;
var MenuItem  = require('impromptu-react-animated-header').MenuItem;
var MenuBrand = require('impromptu-react-animated-header').MenuBrand;

var MyMenu = React.createClass({
    render: function() {
        return (
            <TopMenu autoClose={true} animate={true} cssTransitions={true} align="right" duration={200} threshold={769}>
                <MenuBrand>
                    <a data-scroll href="#home">Flabbergast Inc.</a>
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
