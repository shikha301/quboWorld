import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img
              loading="lazy"
              src="./images/logo.png"
              className="shrink-0 max-w-full aspect-[3.57] w-[130px]"
            />
      
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>

    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
          <a
            href="#"
            className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 "
            aria-current="page"
          >
            Smart Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
            aria-current="page"
          >
            Connected Auto
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 "
            aria-current="page"
          >
            Smart Accessories
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 "
          >
            Store
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 "
          >
            Qubo Community
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 "
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
