import { useLocation } from 'react-router-dom';

const SignIn = () => {
  const location = useLocation();

  const isSignInPage = location.pathname === '/signIn';

  return isSignInPage ? <div>Sign In Page</div> : <div>Sign Up Page</div>;
};

export default SignIn;
