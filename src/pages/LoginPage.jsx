import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import { AuthContext } from '../context/AuthContext';

function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    setUser(user);
    navigate('/');
  };

  return (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default LoginPage;