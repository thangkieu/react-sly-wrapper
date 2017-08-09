var React = require('react');
var CreateReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var assign = require('object-assign');
var options = require('./options');

require('jquery');
require('sly/dist/sly.js');

var ITEMS_PER_ROW = 5;

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var ReactSly = CreateReactClass({
  displayName: 'ReactSly',
  propTypes: {},
  statics: {},
  handleClick: function handleClick() {},

  componentDidMount: function() {
    if (!this.frame) {
      options.prevPage = this.sly.querySelector('.sly-button-prev');
      options.nextPage = this.sly.querySelector('.sly-button-next');
      var containerWidth = this.sly.offsetWidth;
      var itemsPerRow = this.props.itemsPerRow || ITEMS_PER_ROW;

      var itemEls = this.sly.querySelectorAll('.slidee > li');
      Array.prototype.forEach.call(itemEls, function(el) {
        el.style.width = containerWidth / itemsPerRow + 'px';
      });

      this.frame = new Sly(
        this.sly,
        _extends(options, this.props.options)
      ).init();
      if (this.props.onInit) {
        this.props.onInit(this.frame);
      }
    } else {
      this.frame.reload();
    }
    window.addEventListener('resize', this.resizeHandler, true);
  },

  componentWillUnmount: function() {
    this.frame.destroy();

    window.removeEventListener('resize', this.resizeHandler);
  },

  render: function() {
    var self = this;

    return React.cloneElement(this.props.children, {
      ref: function(el) {
        self.sly = el;
      }
    });
  }
});

module.exports = ReactSly;
