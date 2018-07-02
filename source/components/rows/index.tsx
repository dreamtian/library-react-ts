
import * as React from 'react';
import * as PropTypes from 'prop-types';
// import { Component } from 'react';

interface IRowProps {
  prop1?: string;
  prop2: number;
  prop3: () => void;
  prop4: 'option1' | 'option2' | 'option3';
}


class Row extends React.Component<IRowProps, {}> {

  static propTypes = {
    /** prefixCls */
    prefixCls: PropTypes.string,
    showSearch: PropTypes.bool,
    transitionName: PropTypes.string,
    choiceTransitionName: PropTypes.oneOf(['zoom', 'uncommon']),

  };
  static defaultProps = {
    prefixCls: 'ant-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
  };
  handleClick = () => {
    console.log('heh');
  }
  render() {
    return <div onClick={this.handleClick}>Row1</div>;
  }
}

export default Row;
