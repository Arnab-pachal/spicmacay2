import React from 'react'
import { Link } from 'react-router-dom';
import dark_logo from './Logos/logo_dark.png'
import light_logo from './Logos/logo_light.png'

const Footer = ({ dark }) => {
  return (
    <footer class="text-gray-600 body-font dark:bg-slate-800 dark:text-white">
      <div class="container p-5 mx-auto flex items-center sm:flex-row flex-col">
        <Link to={'/'} class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={dark ? dark_logo : light_logo} alt="Spicmacay" width={150} height={200} />
        </Link>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Spicmacay —
          <Link href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@smf</Link>
         
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       

          <a
            //facebook
            href="https://www.facebook.com/spicmacaynitd?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            // insta
            href="https://www.instagram.com/spic.macay_nitd?igsh=MXZ2aW1xbjZlMmtmdg=="
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>

          <a
            // linkedin
            href="https://www.linkedin.com/company/spic-macay-nit-durgapur-chapter/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-gray-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer