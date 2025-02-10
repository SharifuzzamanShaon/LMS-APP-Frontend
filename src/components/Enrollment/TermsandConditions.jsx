"use client"
import React, { useState } from "react";
const TermsAndConditions = ({ setAccepted }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    if (isChecked) {
      setAccepted(true);
    }
  };

  return (
    <div className="flex items-center justify-centep-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Terms & Conditions</h2>
        
        <div className="h-40 overflow-y-auto border p-4 rounded-md text-sm text-gray-700">
          <p>
            1. By using this service, you agree to comply with all applicable laws.
          </p>
          <p>
            2. You shall not misuse or exploit the platform for any unauthorized purposes.
          </p>
          <p>
            3. The company reserves the right to modify or terminate the service at any time.
          </p>
          <p>
            4. Any violation of these terms may result in suspension or permanent removal from the platform.
          </p>
          <p>
            5. Your data may be stored and used as per our privacy policy.
          </p>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="accept"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="mr-2 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
          />
          <label htmlFor="accept" className="text-gray-700 text-sm">
            I have read and agree to the Terms and Conditions
          </label>
        </div>

        <button
          onClick={handleAccept}
          disabled={!isChecked}
          className={`w-full mt-4 py-2 text-white font-semibold rounded-lg ${
            isChecked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Accept & Continue
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
