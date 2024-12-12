import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-100 dark:bg-green-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm mb-2 text-gray-800 dark:text-gray-200">
          &copy; {new Date().getFullYear()} Rise Africa. All rights reserved.
        </p>
        <div className="flex justify-center mb-4">
          <a href="/privacy" className="text-green-400 hover:text-white mx-4 dark:text-green-300 dark:hover:text-green-100">Privacy Policy</a>
          <a href="/terms" className="text-green-400 hover:text-white mx-4 dark:text-green-300 dark:hover:text-green-100">Terms of Service</a>
        </div>
        <div className="mb-6">
          <p className="text-sm text-gray-800 dark:text-gray-200">Contact us:</p>
          <p className="text-sm mb-2 text-gray-800 dark:text-gray-200">
            <a href="/contact" className="text-green-400 hover:text-white dark:text-green-300 dark:hover:text-green-100">waruilaw@gmail.com</a>
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-200">
            Phone: <a href="tel:+254 701 170 317" className="text-green-400 hover:text-white dark:text-green-300 dark:hover:text-green-100">+254 701 170 317</a>
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/riseafrica" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white dark:text-green-300 dark:hover:text-green-100">Facebook</a>
          <a href="https://twitter.com/riseafrica" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white dark:text-green-300 dark:hover:text-green-100">Twitter</a>
          <a href="https://www.linkedin.com/company/riseafrica" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white dark:text-green-300 dark:hover:text-green-100">LinkedIn</a>
          <a href="https://www.instagram.com/riseafrica" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white dark:text-green-300 dark:hover:text-green-100">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
