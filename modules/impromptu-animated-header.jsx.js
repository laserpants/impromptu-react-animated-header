var React  = require('react');
var Snabbt = require('react-snabbt');

var Item = React.createClass({
    render: function() { return null; }
});

var Brand = React.createClass({
    render: function() { return null; }
});

var TopMenu = React.createClass({
    getDefaultProps: function() {
        return {
            threshold      : 769,
            duration       : 300,
            autoClose      : true,
            cssTransitions : false,
            animate        : true
        }
    },
    getInitialState: function() {
        var innerWidth = window.innerWidth;
        return {
            expanded      : false,
            animateExpand : false,
            expandOptions : {height: 0, fromHeight: 0},
            wide          : innerWidth >= this.props.threshold,
            scrolled      : window.pageYOffset > 1
        };
    },
    toggleExpanded: function() {
        if (true === this.props.animate) {
            var height = this.refs.anchor.getDOMNode().clientHeight,
                expand = this.state.expanded;
            this.setState({
                expanded       : !expand,
                animateExpand  : true,
                expandOptions  : {
                    height     : expand ? 0 : height,
                    fromHeight : expand ? height : 0,
                    easing     : 'ease',
                    align      : 'right',
                    duration   : this.props.duration
                }
            });
        } else {
            this.setState({expanded: !this.state.expanded});
        }
    },
    animationComplete: function() {
        this.setState({animateExpand: false});
    },
    handleResize: function(e) {
        var innerWidth = window.innerWidth,
            oldWide = this.state.wide,
            newWide = innerWidth >= this.props.threshold;
        if (true === oldWide && false === newWide) {
            this.setState({
                expanded      : false,
                animateExpand : false,
                expandOptions : {height: 0, fromHeight: 0},
                wide          : innerWidth >= this.props.threshold
            });
            return;
        }
        if (oldWide != newWide)
            this.setState({wide: newWide});
    },
    handleScroll: function(e) {
        var scrolled = this.state.scrolled,
            newScrolled = window.pageYOffset > 1;
        if (scrolled != newScrolled)
            this.setState({scrolled: newScrolled});
    },
    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
    },
    render: function() {
        var brand = <span />;
        var navItems = ( 
            <ul ref="anchor">
                {React.Children.map(this.props.children, function(item) {
                    var onClick = function() {
                        if ('function' === typeof item.props.onClick)
                            item.props.onClick();
                        if (true === this.props.autoClose)
                            this.toggleExpanded();
                    };
                    if (item.type === Item) {
                        return (
                            <li onClick={onClick.bind(this)}>
                                {item.props.children}
                            </li>
                        );
                    } else if (item.type === Brand) {
                        var inlineCss = {};
                        if ('right' === this.props.brandAlign) {
                            inlineCss = {
                                float: 'right'
                            };
                        }
                        brand = (
                            <span style={inlineCss} className={'nav-logo ' + (true === this.state.wide ? 'nav-logo-full' : 'nav-logo-compact')}>
                                {item.props.children}
                            </span>
                        );
                    }
                }.bind(this))}
            </ul>
        );
        var animClass = (true === this.props.cssTransitions) ? 'nav-transitions' : '';
        if (true === this.state.wide) {
            var cssClass = this.state.scrolled ? 'sticky' : 'fixed';
            return (
                <header className={animClass ? (cssClass + ' ' + animClass) : cssClass}>
                    {brand}
                    <nav className={'nav-collapse nav-full' + ('right' === this.props.align ? ' nav-right' : '')}>
                        {navItems}
                    </nav>
                </header>
            );
        } else {
            var nav = <div />;
            if (true === this.props.animate) {
                nav = (
                    <Snabbt 
                        options={this.state.expandOptions} 
                        animate={this.state.animateExpand} 
                        onComplete={this.animationComplete}>
                        <div className="mask">
                            {navItems}
                        </div>
                    </Snabbt>
                );
            } else {
                if (true === this.state.expanded) {
                    nav = (
                        <div>
                            {navItems}
                        </div>
                    );
                }
            }
            var inlineCss = {};
            if ('right' === this.props.brandAlign) {
                inlineCss = {
                    float: 'left'
                };
            }
            return (
                <header className={animClass}>
                    {brand}
                    <a style={inlineCss} href="javascript:" onClick={this.toggleExpanded} className={'nav-toggle' + (this.state.expanded ? ' active' : '')}>Menu</a>
                    <nav className="nav-collapse nav-compact">{nav}</nav>
                </header>
            );
        }
    }
});

module.exports = {
    TopMenu   : TopMenu,
    MenuItem  : Item,
    MenuBrand : Brand
};
