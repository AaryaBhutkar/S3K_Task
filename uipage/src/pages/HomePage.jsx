import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">S3K Frontend UI Task</h1>
      
      <div className="flex flex-row gap-4 justify-center w-full max-w-6xl">
        <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
          <div className="bg-gray-50 p-4 rounded-lg h-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Medical Reports</h2>
            <p className="text-gray-600 mb-4">
              View and manage medical reports in one place.
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Track completion status</li>
              <li>View detailed reports</li>
              <li>Download reports</li>
            </ul>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
          <div className="bg-gray-50 p-4 rounded-lg h-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Diagnostics</h2>
            <p className="text-gray-600 mb-4">
              Access all diagnostic files and results.
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>View test results</li>
              <li>Track diagnostics</li>
              <li>Export data</li>
            </ul>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
          <div className="bg-gray-50 p-4 rounded-lg h-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Summaries</h2>
            <p className="text-gray-600 mb-4">
              Create and manage medical summaries.
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Format tools</li>
              <li>Quick overview</li>
              <li>Share reports</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link 
          to="/dashboard" 
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;