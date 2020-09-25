import React from 'react';
import './button.scss';

function button(props) {
  return (
    <>
      <button className='button'>{props.title}</button>
    </>
  );
}

export default button;