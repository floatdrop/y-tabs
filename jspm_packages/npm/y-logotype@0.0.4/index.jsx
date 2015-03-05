var React = require('react');
var b = require('b_');

var logotypeImage = require('./logotype.svg!text');

var YLogotype = {
	render: function () {
		var classes = b('y-logotype', {
			theme: this.props.theme || 'normal'
		});

		return (
			<div className={classes} dangerouslySetInnerHTML={{__html: logotypeImage}}/>
		);
	}
};

module.exports = React.createClass(YLogotype);
module.exports.Class = YLogotype;
