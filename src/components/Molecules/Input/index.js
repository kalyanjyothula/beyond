import React from 'react';
import PropTypes from 'prop-types';

function InputField({ label, type, name, placeholder, onChange }) {
  return (
    <div className='flex flex-col gap-y-2 w-full'>
      {label && <p className='text-h9 font-ubuntu'>{label} </p>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className='w-full h-12 border px-2 rounded-md font-ubuntu'
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
