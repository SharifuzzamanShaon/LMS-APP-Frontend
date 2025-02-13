import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

const ForVisitor = ({ 
  message = "For test all features properly, please sign-in first",
  duration = 5000,
  position = "top-center",
  theme = "dark"
}) => {
  useEffect(() => {
    const toastConfig = {
      icon: '⚡',
      duration,
      style: {
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        borderRadius: '8px',
        padding: '12px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontSize: '14px',
        fontWeight: '500',
      },
    };

    toast(message, toastConfig);
  }, [message, duration, theme]);

  return (
    <div className="visitor-toast-container">
      <Toaster 
        position={position}
        toastOptions={{
          className: 'visitor-toast',
          style: {
            maxWidth: '500px',
          },
        }}
      />
    </div>
  );
};

ForVisitor.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number,
  position: PropTypes.oneOf([
    'top-left', 'top-center', 'top-right',
    'bottom-left', 'bottom-center', 'bottom-right'
  ]),
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default ForVisitor;

