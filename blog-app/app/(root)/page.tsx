import React from 'react';
import A2SVLogo from '@/public/icons/A2SVLogo'; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row items-center space-x-4 pt-20">
        <h1 className="text-4xl font-bold">Welcome to</h1>
        <A2SVLogo className="w-50 h-50" /> {/* Adjust width and height as necessary */}
      </div>
    </div>
  );
};

export default Home;
