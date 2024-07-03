import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, login } from '../actions/authActions';

const AuthForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(formData));
    } else {
      dispatch(register(formData));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={onChange} placeholder="Password" required />
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;
