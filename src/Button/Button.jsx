import React from 'react';

export default function Button({ type }) {
  return (
    <button className={`btn btn-${type}`}>{type}</button>
  );
}