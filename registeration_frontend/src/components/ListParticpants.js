import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListParticipants extends Component {
  state = {
    participants: []
  }

  componentDidMount() {
    this.getParticipants();
  }

  getParticipants = () => {
    axios.get('http://localhost:3000/participants')
    .then(response => {
      this.setState({ participants: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  deleteParticpant = (id) => {
    //call delete route with id
    console.log(id);
    axios.delete(`http://localhost:3000/participants/${id}`)
    .then(response => {
      this.getParticipants();
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const {participants} = this.state;
    console.log(this.state)
    return (
      <div className="ListParticipants">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {
                participants.map( (participant, idx) => {
                  const { first_name, last_name,phone, email, id } = participant;
                  return (
                    <div className="Participant" key={id}>
                      <div className="details">
                        <div className="numbering">
                          {idx+1}.
                        </div>
                        <div>
                          <div>{first_name} {last_name}</div>
                          <div>{phone}</div>
                          <div>{email}</div>
                        </div>
                      </div>
                      <div className="actions">
                        <Link className="btn btn-success" to={`/participants/${id}`} params={{participant}}>Edit</Link>
                        <a onClick={() => this.deleteParticpant(id)} className="btn btn-danger">Delete</a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListParticipants;
