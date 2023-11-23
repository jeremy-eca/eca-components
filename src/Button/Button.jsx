import React from 'react';

export const Button = (props) => {
  const { type, onClick = () => {}, children, ...others } = props;

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary'
  };

  return (
    <button className={`btn ${variants[type]}`} onClick={onClick} {...others}>
      {children}
    </button>
  );
};
