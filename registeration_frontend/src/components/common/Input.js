import React, { Component } from 'react';


class Input extends Component {
  
  render() {
    const {value, label, placeholder, handleInputChange, name} = this.props;

    return (
      <div className="form-group">
        <label>{label}</label>
        <input placeholder={placeholder} type="text" className="form-control" id="first_name" name={name} value={value} onChange={handleInputChange} />
      </div>
    );
  }
}

export default Input;
