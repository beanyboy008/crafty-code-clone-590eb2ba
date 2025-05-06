
import React from 'react';

interface EmailButtonProps {
  label: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ label }) => {
  return (
    <a 
      href="https://gmail.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-blue-500 text-white font-medium py-3 px-4 rounded hover:bg-blue-600 transition-colors inline-block text-center"
    >
      {label}
    </a>
  );
};

export default EmailButton;
