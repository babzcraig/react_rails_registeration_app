import React, { Component } from 'react';
import axios from 'axios';
import Input from './common/Input'

class CreateParticipant extends Component {
  state = {
    loading: false,
    success: false,
    msg: '',
    user: {
      first_name: '',
      last_name: '',
      email: '',
      phone: ''
    }
  }

  createParticipant = () => {
    console.log('creating...');
    console.log(this.state)
    this.setState({loading: true});
    axios.post('http://localhost:3000/participants', {
      ...this.state.user
    })
    .then(response => {
      // navigate to home with success message
      this.setState({
        loading: false,
        success: true,
        msg: 'Success! You\'ve successfully registered this user!',
        user: {
          first_name: '',
          last_name: '',
          email: '',
          phone: ''
        }
      });
    })
    .catch(error => {
      console.log(error);
      this.setState({loading: false, success: false, msg: 'Error registering participant, please check fields and try again'});
    });
  }


  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      success: false,
      msg: ''
    });
  }

  render() {
    const {first_name, last_name, email, phone} = this.state.user;
    const alertClass = this.state.success ? 'alert alert-success' : 'alert alert-danger'
    return (
      <div className="CreateParticipant">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            {
              this.state.msg ? <div className={alertClass}>{this.state.msg}</div> : ''
            }
            <form>
              <Input
                label="first name"
                placeholder="Enter First Name"
                handleInputChange={this.handleInputChange}
                value={first_name}
                name="first_name"
              />
              <Input
                label="last name"
                placeholder="Enter Last Name"
                handleInputChange={this.handleInputChange}
                value={last_name}
                name="last_name"
              />
              <Input
                label="email"
                placeholder="Enter Email"
                handleInputChange={this.handleInputChange}
                value={email}
                name="email"
              />
              <Input
                label="phone"
                placeholder="Enter Phone"
                handleInputChange={this.handleInputChange}
                value={phone}
                name="phone"
              />
              <a onClick={this.createParticipant} disabled={this.state.loading} className="btn btn-success">Submit</a>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateParticipant;
