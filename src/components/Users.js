import React from 'react';

class Users extends React.Component {
  render() {
    const { greetingMessage = 'Hi There',
      match: { params: { id } } } = this.props;

    return (
      <div>
        <h2> Users </h2>
        <p> { `${greetingMessage} User  ${id}` }, this is my awesome Users component</p>
      </div >
    )
  }
}
export default Users;