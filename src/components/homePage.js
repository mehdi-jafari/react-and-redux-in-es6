"use strict"

var React = require('react');

var Home = React.createClass({
	render:function(){
		return (
			<div className ="jumbotron">
				<h1> Application Template</h1>
				<p> React, React Router and Redux exploration</p>
			</div>
			);
	}
});

module.exports = Home;