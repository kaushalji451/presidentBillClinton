import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page not found.</p>
        <Link
          to="/"
          className="text-blue-600 hover:underline text-lg"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
