import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function ErrorFallback({ error }) {
  return (
    <div className="error-txt-outer">
      <div className="error-container">
        <p className="glitch">
          <span aria-hidden="true">{error?.toString() || 'Error'}</span>
          {error?.toString() || 'Error'}
          <span aria-hidden="true">{error?.toString() || 'Error'}</span>
        </p>
      </div>
    </div>
  );
}

export { useScrollToTop, ErrorFallback };
