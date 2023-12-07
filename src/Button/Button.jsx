import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    variant,
    type = 'button',
    onClick = () => {},
    children,
    ...others
  } = props;

  const bg = {
    primary: 'bg-primary-main',
    info: 'bg-states-info',
    error: 'bg-states-error'
  };

  const border = {
    primary: 'border-primary-accent',
    info: 'border-states-info-accent',
    error: 'border-states-error-accent'
  };

  const hover = {
    primary: 'hover:bg-primary-accent',
    info: 'hover:bg-states-info-accent',
    error: 'hover:bg-states-error-accent'
  };

  return (
    <button
      className={`transition btn 
      ${bg[variant]} ${border[variant]} ${hover[variant]}`}
      type={type}
      onClick={onClick}
      {...others}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
