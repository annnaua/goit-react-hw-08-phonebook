import { Menu, Button } from './UserMenu.styled';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu>
      <p style={{ fontWeight: 600 }}>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Menu>
  );
};
