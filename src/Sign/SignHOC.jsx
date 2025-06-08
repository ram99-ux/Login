import React, { useState } from 'react'; 
import design from'./Hoc.css';

function SignHOC(NewComponent) {

  
  const DemoComponent = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handleMobile = (e) => setMobile(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    
    const handleSignIn = () => {
      if (!email || !password) {
        alert('Please fill in all fields');
      } else {
        alert(`Signed in successfully with:\nEmail: ${email}\nPassword: ${password}`);
      }
    };

    const handleSignUp = () => {
      if (!name || !mobile || !email || !password) {
        alert('Please fill in all fields');
      } else {
        alert(`Signed up successfully with:\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nPassword: ${password}`);
      }
    };

    return (
      <div>
        <NewComponent
          styles={design}
          name={name}
          mobile={mobile}
          email={email}
          password={password}
          handleName={handleName}
          handleMobile={handleMobile}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
        />
      </div>
    );
  };

  return DemoComponent;
}

export default SignHOC;
