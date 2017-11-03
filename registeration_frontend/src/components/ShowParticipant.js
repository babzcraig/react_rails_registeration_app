import React, { Component } from 'react';
import axios from 'axios';
import Input from './common/Input';
import { Link } from 'react-router-dom';

class ShowParticpant extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    axios.get(`http://localhost:3000/participants/${id}`)
    .then(response => {
      this.setState({ ...response.data})
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  deleteParticpant = (id) => {
    //call delete route with id
    console.log(id);
    axios.delete(`http://localhost:3000/participants/${id}`)
    .then(response => {
      // navigate to home with success message
      this.props.history.push('/participants');
    })
    .catch(error => {
      console.log(error);
    });
  }

  updateParticipant = () => {
    console.log('creating...')
    const id = parseInt(this.props.match.params.id, 10);
    axios.put(`http://localhost:3000/participants/${id}`, {
      ...this.state
    })
    .then(response => {
      // navigate to home with success message
      this.props.history.push('/participants');
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const {first_name, last_name, phone, email, id} = this.state;

    return (
      <div className="ShowParticipant">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <Link style={{textDecoration: 'underline', marginBottom: '16px', display: 'inline-block'}} className="back-btn" to={`/participants`}>Go Back</Link>
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
              <a onClick={this.updateParticipant} className="btn btn-success">Update</a>
              <a onClick={() => this.deleteParticpant(id)} className="btn btn-danger">Delete</a>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowParticpant;
