import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, name, text, onClick, height, width, customStyle }) {
  return onClick ? (
    <button
      type={type}
      name={name}
      onClick={onClick}
      className={`h-[${height}] w-[${width}] py-2 px-4
      rounded-md text-body1 tracking-[1px]
      text-white font-ubuntu font-bold ${customStyle}`}
    >
      {text}
    </button>
  ) : (
    <button
      type={type}
      name={name}
      className={`h-[${height}] w-[${width}] py-2 px-4
       rounded-md text-body1 tracking-[1px]
       text-white font-ubuntu font-bold ${customStyle}`}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Button;
