import React from 'react';
import PropTypes from 'prop-types';

function CheckBox({ label, options, id }) {
  console.log(id);
  return (
    <div className='py-2'>
      <h1 className='font-ubuntu text-body1 font-bold capitalize'>{label}</h1>
      <div className='py-1'>
        {options.map(({ id, label }) => (
          <div className='flex items-center pl-3' key={id}>
            <input
              id={id}
              type='checkbox'
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
            rounded focus:ring-blue-500 cursor-pointer'
            />
            <label
              htmlFor={id}
              className='w-full py-1 ml-2 text-sm font-medium
             text-gray-900 cursor-pointer'
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

CheckBox.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default CheckBox;
