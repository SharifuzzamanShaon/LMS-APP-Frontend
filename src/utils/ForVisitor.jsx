import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ForVisitor = () => {
  useEffect(() => {
    // Show toast when the component mounts
    toast("For test all features properly, please sign-in first [Chatting and course enrollment]", {
      icon: '⚡', // Optional icon for the toast
      style: {
        background: '#333',
        color: '#fff',
      },
      duration: 5000, // Duration for the toast to remain
    });
  }, []);

  return (
    <div>
      <h1>Welcome, Visitor!</h1>
      <p>For test all features properly, please sign in first.</p>

      {/* Toast Container */}
      <Toaster position="top-center" />
    </div>
  );
};

export default ForVisitor;

