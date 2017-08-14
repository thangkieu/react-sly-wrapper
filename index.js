import React from 'react';
import PropTypes from 'prop-types';

import DEFAULT_OPTIONS from './options';
import 'jquery';
import 'sly/dist/sly';

const ITEMS_PER_ROW = 5;

class ReactSly extends React.PureComponent {
  constructor(p) {
    super(p);

    // instance of sly
    this.frame = null;
    this.sly = null; // ref of root el
  }
  componentDidMount() {
    if (!this.frame) {
      options.prevPage = this.sly.querySelector('.sly-button-prev');
      options.nextPage = this.sly.querySelector('.sly-button-next');
      const containerWidth = this.sly.offsetWidth;

      const itemEls = this.sly.querySelectorAll('.slidee > li');
      Array.prototype.forEach.call(itemEls, el => {
        el.style.width = containerWidth / this.props.itemsPerRow + 'px';
      });

      this.frame = new Sly(
        this.sly,
        Object.assign(options, this.props.options)
      ).init();

      if (this.props.onInit) {
        this.props.onInit(this.frame);
      }
    } else {
      this.frame.reload();
    }
    window.addEventListener('resize', this.resizeHandler, true);
  }

  componentWillUnmount() {
    this.frame.destroy();

    window.removeEventListener('resize', this.resizeHandler);
  }

  render() {
    return React.cloneElement(this.props.children, {
      ref: el => {
        this.sly = el;
      }
    });
  }
}

ReactSly.propTypes = {
  onInit: PropTypes.func,
  itemsPerRow: PropTypes.number
};

ReactSly.defaultProps = {
  itemsPerRow: ITEMS_PER_ROW
}

export default ReactSly;
