import React, { useState, useContext } from 'react';
import { AppContext } from '../../Context';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

export default function SignIn() {

  const { signInError, setSignInError, name1, setName1, password1, setPassword1, setInfo } = useContext(AppContext);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName1(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword1(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    setInfo({
      name: name1,
      email: 'default@email.com',
      password: password1
    })
    e.preventDefault();
    if (name1 === '' || password1 === '') {
      setSignInError(true);
    } else {
      setSubmitted(true);
      setSignInError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
    <div
      className="success"
      style={{
      display: submitted ? '' : 'none',
    }}>
    <h1>User {name1} successfully registered!!</h1>
    </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
    <div
      className="error"
      style={{
      display: signInError ? '' : 'none',
    }}>
    </div>
    );
  };

  return (
    <div className="form1">
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form autocomplete="off">
        {/* Labels and inputs for form data */}
        <>
          <FloatingLabel controlId="floatingTextarea" label="Username" className="mb-3">
            <Form.Control type="text" placeholder="Username" onChange={handleName} value={name1}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea" label="Password" className="mb-3">
            <Form.Control type="password" placeholder="Password" onChange={handlePassword} value={password1}/>
          </FloatingLabel>
        </>
        <Button className="button" variant="danger" onClick={handleSubmit}>Enter</Button>
      </form>
    </div>
  );
}
