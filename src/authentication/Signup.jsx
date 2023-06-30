import { useState } from 'react';
import './Signup.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(signInWithEmailAndPassword(auth, email, password))
      .then(updateProfile(auth.currentUser, { displayName: username }))
      .catch(err => {
        alert(err)
      });
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSignup();
    }
  };

  

  return (
    <div className='signup'>
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      />
      <input
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder='Email'
        value={email}
        onKeyDown={handleKeyPress}
      />
      <input
        onChange={e => setUsername(e.target.value)}
        type="text"
        placeholder='Username'
        value={username}
        onKeyDown={handleKeyPress}
      />
      <input
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder='Password'
        value={password}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSignup}>Log in</button>
    </div>
  )
}

export default Signup;
