
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">The Rundown AI</h1>
        <p className="text-xl text-gray-600 mb-8">
          Stay updated with the latest in AI with our daily newsletter
        </p>
        <div className="flex justify-center">
          <Link to="/welcome">
            <Button className="bg-blue-500 hover:bg-blue-600">
              View Welcome Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
