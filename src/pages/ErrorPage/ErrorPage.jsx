import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => (
  <div className="error-page">
    <Link to="/">
      <svg
        height="0.8em"
        width="1em"
        viewBox="0 0 2 1"
        preserveAspectRatio="none"
      >
        <polyline
          fill="none"
          stroke="#777777"
          strokeWidth="0.1"
          points="0.9,0.1 0.1,0.5 0.9,0.9"
        />
      </svg>
      Home
    </Link>
    <div className="background-wrapper">
      <h1 id="visual">404</h1>
    </div>
    <p>The page you’re looking for does not exist.</p>
  </div>
);
