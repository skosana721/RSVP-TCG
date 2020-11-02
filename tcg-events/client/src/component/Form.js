import React, { Component } from 'react';


class Form extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            dietary:[]
        }

    }

    render() {
        return (
          <div>
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name="" id="" />
              <label htmlFor="surname">Surname</label>
              <input type="text" name="" id="" />
              <label htmlFor="email">Email</label>
              <input  type="email" name="" id="" />
              <label htmlFor="dietary">Dietary Requirement</label>
              <textarea name="dietary" id="" cols="30" rows="10"></textarea>
            </form>
          </div>
        );
    }
}


export default Form;