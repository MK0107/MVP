import { useState, useContext } from 'react';
import { AppContext } from '../../Context';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

export default function SignUp() {

  const { signUpError, setSignUpError,  name2, setName2, password2, setPassword2, email2, setEmail2, setCreate } = useContext(AppContext);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName2(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail2(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword2(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name2 === '' || email2 === '' || password2 === '') {
      setSignUpError(true);
    } else {
      setCreate({
        name: name2,
        email: email2,
        password: password2
      })
      setSubmitted(true);
      setSignUpError(false);
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
    <h1>User {name2} successfully registered!!</h1>
    </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
    <div
      className="error"
      style={{
      display: signUpError ? '' : 'none',
    }}>
    </div>
    );
  };

  return (
    <div className="form3">

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      {signUpError
        ? (<form className="form4" autocomplete="off">
            <FloatingLabel controlId="fe2" label="Username" className="mb-4" autocomplete="off">
              <Form.Control type="text" placeholder="Username" onChange={handleName} value={name2}/>
            </FloatingLabel>
            <FloatingLabel controlId="fe2" label="Email" className="mb-4" autocomplete="off">
              <Form.Control type="text" placeholder="Email" onChange={handleEmail} value={email2}/>
            </FloatingLabel>
            <FloatingLabel controlId="fe2" label="Password" className="mb-4" autocomplete="off">
              <Form.Control type="password" placeholder="Password" onChange={handlePassword} value={password2}/>
            </FloatingLabel>
            <Button className="button13" variant="danger" onClick={handleSubmit}>Create</Button>
          </form>)
        : null}
    </div>
  );
}