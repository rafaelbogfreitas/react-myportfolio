import React from 'react';

import './Form.scss';

const Form = () =>
    <div className="form-wrap">
      <h3>In a rush? Drop me a quick message!</h3>
      <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact"></input>
        <div className="form-section">
          <input type="text" name="name" placeholder="Name" className="animated fadeInUp" required/>
        </div>
        <div className="form-section">
          <input type="email" name="email" placeholder="Email" className="animated fadeInUp" required/>
        </div>
        <div className="form-section">
          <textarea name="message" rows="8" cols="80" placeholder="Enter a message" className="animated fadeInUp" required></textarea>
        </div>
        <input 
          type="submit" 
          value="Send"
          className="animated fadeInUp"
        />
      </form>
    </div>;
  
         
 

export default Form;