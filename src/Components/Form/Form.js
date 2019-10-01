import React, { Component } from 'react';

import './Form.scss';

class Form extends Component {
    render() { 
        return ( 
          <div className="form-wrap">
            <h3>In a rush? Drop me a quick message!</h3>
            <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact"></input>
              <div className="form-section">
                <input type="text" name="name" required/>
                <label for="name">Name</label>
              </div>
              <div className="form-section">
                <input type="email" name="email" required/>
                <label for="email">Email</label>
              </div>
              <div className="form-section">
                <textarea name="message" rows="8" cols="80" required></textarea>
                <label for="message">Message</label>
              </div>
              <input type="submit" value="Send"/>
            </form>
          </div>
  
         );
    }
}
 

export default Form;