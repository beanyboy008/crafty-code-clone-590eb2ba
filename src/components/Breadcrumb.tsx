
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    path?: string;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      <Link to="/" className="text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-400 mx-1">›</span>}
          {item.path ? (
            <Link to={item.path} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
