var React = require('react');
var CreateReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var assign = require('object-assign');
var Sly = require('sly/src/sly');

var NEWTAB = '_blank';

var ReactSly = CreateReactClass({
  displayName: 'ReactSly',
  propTypes: {},
  statics: {},
  handleClick: function() {},

  render: function() {
    return React.createElement('div', null, 'Hellp');
  }
});

module.exports = ReactSly;
