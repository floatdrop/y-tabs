var React = require('react');
var b = require('b_').with('y-tabs');;

var Style = require('./index.css!');

var YTabs = {
	getDefaultProps: function () {
		return { tabActive: 1 };
	},

	getInitialState: function () {
		return { tabActive: this.props.tabActive };
	},

	setActive: function (index, e) {
		this.setState({ tabActive: index });
		e.preventDefault();
	},

	render: function () {
		var classes = b({
			theme: this.props.theme || 'normal'
		});

		return (
			<div className={classes}>
				{this._items()}
			</div>
		);
	},

	_items: function () {
		var self = this;

		var $menuItems = this.props.children.map(function ($panel, index) {
			var classes = b('item', {
				theme: self.props.theme || 'normal',
				active: self.state.tabActive === (index + 1)
			});

			return (
				<li key={index} className={classes}>
					<a href='#' onClick={self.setActive.bind(self, index + 1)}>
						{$panel}
					</a>
				</li>
			);
		});

		return (
			<nav className={b('navigation')}>
				<ul className={b('list')}>{$menuItems}</ul>
			</nav>
		);
	}
};

module.exports = React.createClass(YTabs);

var Tab = {
	render: function () {
		return (
			<div>{this.props.children}</div>
		);
	}
};

module.exports.Tab = React.createClass(Tab);
module.exports.Tab.Class = Tab;
