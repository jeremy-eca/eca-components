import React from 'react';

export default function Button(props) {
  const { type, onClick = () => {}, ...others } = props;

  return (
    <button className={`btn btn-${type}`} onClick={onClick} {...others}>
      {type}
    </button>
  );
}
