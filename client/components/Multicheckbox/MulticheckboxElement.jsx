import React, { PropTypes } from 'react'

const MulticheckboxElement = ({ onClick, value, label, checked, disabled }) => (
  <h3 onClick={() => onClick(value)}>
    <span style={{color: disabled ? 'red' : 'black'}}>{label}</span> 
    <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
        />
  </h3>
)

MulticheckboxElement.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

export default MulticheckboxElement
