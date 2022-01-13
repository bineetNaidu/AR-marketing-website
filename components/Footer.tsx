import { FC } from 'react';
import Link from 'next/link';

export const Footer: FC = () => {
  return (
    <footer className="w-full min-w-full">
      <div className="flex justify-center">
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          About
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          AR/VR
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          Privacy
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          Terms
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          Cookies
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          Advertise
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          API
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          Jobs
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          Locations
        </p>
      </div>
      <div className="flex justify-center">
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          © 2020 Twitter
        </p>
        <p className="cursor-pointer mx-4 hover:underline text-gray-500 text-base font-bold hover:text-gray-700 transition-all">
          Help Center
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/contact-us">
          <a className="cursor-pointer mx-4 underline text-gray-700 text-base font-bold hover:text-gray-900 transition-all">
            CONTACT US
          </a>
        </Link>
      </div>
    </footer>
  );
};
