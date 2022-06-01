import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

import { Div, Link, Name } from './AppBar.styled';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();

  // const name = useSelector(state => state.auth.user.name);

  const handlerLogOut = e => {
    e.preventDefault();
    dispatch(authOperations.logOut());
  };

  return (
    <Div>
      <Link to="contacts"> Contacts</Link>
      <Name></Name>
      <div>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={handlerLogOut}
        >
          Log out
        </Button>
      </div>
    </Div>
  );
};
