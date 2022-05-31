import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import authOperations from '../redux/auth/auth-operations';
import Button from '@mui/material/Button';
// import Div from 'components/AppBar/AppBar.styled'

const LogInView = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2> Log in</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ display: 'block' }}
          margin="normal"
          color="secondary"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          style={{ display: 'block' }}
          margin="normal"
          color="secondary"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button variant="contained" color="secondary" type="submit">
          Log In
        </Button>
      </form>
    </div>
  );
};
export default LogInView;
