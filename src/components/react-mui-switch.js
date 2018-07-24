import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Switch } from '@material-ui/core';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
  };
  /*===properties end===*/

  _onChange = inEvent =>{
    const { checked } = inEvent.target;
    const { onChange } = this.props;
    onChange(
      {
        target:{
          value: checked
        }
      }
    );
  };

  render(){
    const { className, value, onChange,...props } = this.props;
    return (
      <Switch
        className={classNames('react-mui-switch', className)}
        checked={value}
        onChange={this._onChange}
        {...props}
      />
    );
  }
}
