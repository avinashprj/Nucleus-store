import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useInput } from '../../CustomHooks/CustomHooks';
import { useAuthContext, useSignUpUser } from '../../store/Context/AuthContext';

export const SignupPage = () => {
  const { inputState, inputUpdate } = useInput({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { setLogin } = useAuthContext();
  const navigate = useNavigate();

  const { user, setUser } = useAuthContext();
  const { mutate: signupUser } = useSignUpUser();

  const handleSignUp = (e) => {
    e.preventDefault();
    const passwordMatch = inputState.password === inputState.confirmPassword;
    if (passwordMatch && inputState.password !== '') {
      signupUser(inputState, {
        onSuccess: (bigData) => {
          setUser({ ...user, id: bigData.data.encodedToken });
          setLogin(true);
          localStorage.setItem('user-token', bigData.data.encodedToken);
          toast.success('successfully signed in');
          navigate('/');
        },
        onError: ({
          response: {
            data: { errors },
          },
        }) => {
          alert(errors);
        },
      });
    } else {
      if (!passwordMatch) {
        toast.error(`passwords don't match`);
        return;
      }

      toast.error('please enter correct details');
    }
  };

  return (
    <main className="section-outer grid-center auth-section">
      <form action="#" className="form form-signup">
        <div className="m-bottom-small flex-jc-center">
          <h3 className="m-bottom-small">Sign Up</h3>
        </div>
        <div className="form-group flex">
          <a href="#">
            <i className="font-icon fa fa-brands fs-medium m-right-small fa-google" />
          </a>
          <a href="#">
            <i className="font-icon fa fa-brands fs-medium m-right-small fa-twitter" />
          </a>
          <a href="#">
            <i className="font-icon fa fa-brands fs-medium fa-github" />
          </a>
        </div>
        <div className="form-group">
          <p className="form-divider">
            <span className="or">or</span>
          </p>
        </div>
        <div className="form-signup-group">
          <input
            id="name"
            type="name"
            name="fullName"
            onChange={inputUpdate}
            className="form-input"
            placeholder="Full Name"
            required
          />
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
        </div>
        <div className="form-signup-group">
          <input
            id="email"
            name="email"
            onChange={inputUpdate}
            type="email"
            className="form-input"
            placeholder="Email Address"
            required
          />
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
        </div>
        <div className="form-signup-group">
          <input
            id="signup-password"
            type="password"
            name="password"
            onChange={inputUpdate}
            className="form-input"
            placeholder="Password"
            minLength="4"
            required
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <div className="form-signup-group">
          <input
            id="password"
            type="password"
            name="confirmPassword"
            onChange={inputUpdate}
            className="form-input"
            placeholder="Confirm Password"
            minLength="4"
            required
          />
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
        </div>

        <div className="form-group">
          <button
            onClick={(e) => {
              handleSignUp(e);
            }}
            type="submit"
            className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
          >
            Sign Up
          </button>
        </div>
        <div className="form-footer form-group flex">
          <p className="">
            <span>
              <i className="fa fa-regular fa-face-smile-beam" />
            </span>
            Already have an account
            <Link
              to="/login"
              id="form-signup-link"
              href="#"
              className="link form-footer-link m-left-smallest"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
