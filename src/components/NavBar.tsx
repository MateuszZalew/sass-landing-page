function NavBar() {
  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex items-center justify-between">
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="/" className="text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600">
                  Features
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a
              href=""
              className="bg-black px-4 py-2 rounded-md text-white cursor-pointer"
            >
              Login
            </a>
            <a
              href=""
              className="bg-black px-4 py-2 rounded-md text-white cursor-pointer ml-2"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
