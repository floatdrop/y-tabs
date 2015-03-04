var React = require('react');
var b = require('b_').with('y-tabs');;

var Style = require('./index.css!');

var YTabs = {
	getDefaultProps: function () {
		return { tabActive: 0 };
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
				{this.getItems()}
			</div>
		);
	},

	getItems: function () {
		var self = this;

		var tabItems = this.props.children.map(function ($panel, index) {
			var classes = b('item', {
				theme: self.props.theme || 'normal',
				active: self.state.tabActive === index
			});

			return (
				<li key={index} className={classes}>
					<a href='#' onClick={self.setActive.bind(self, index)}>
						{$panel}
					</a>
				</li>
			);
		});

		return (
			<nav className={b('navigation')}>
				<ul className={b('list')}>{tabItems}</ul>
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
