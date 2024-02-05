// AuthContext.js
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  view: 'LOGIN',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      return { view: 'REGISTER' };
    case 'FORGOT_PASSWORD':
      return { view: 'FORGOTPASSWORD' };
    case 'LOGIN':
      return { view: 'LOGIN' };
    case 'NEW_PASSWORD':
      return { view: 'NEWPASSWORD' };
    case 'OTP_VERIFY':
      return { view: 'OTPVERIFY' };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
