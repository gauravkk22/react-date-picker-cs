require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDatePicker = require('react-date-picker-cs');

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			selectedDate: '2015-07-20'
		};
	},
	log: function log(date) {
		this.setState({
			selectedDate: date
		});
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(ReactDatePicker, { onChange: this.log, range: [2013, 2020], value: this.state.selectedDate })
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-date-picker-cs":undefined}]},{},[1]);