import React from 'react';

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

export { ErrorFallback };
