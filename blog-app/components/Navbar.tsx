'use client'

import Link from "next/link";
import A2SVLogo from "@/public/icons/A2SVLogo"; // Adjust the path as necessary
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Hook to get the current route path

  return (
    <nav className="bg-white py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <A2SVLogo className="w-107 h-50" alt="A2SV Logo" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            {[
              { href: "/", label: "Home" },
              { href: "/teams", label: "Teams" },
              { href: "/success-stories", label: "Success Stories" },
              { href: "/about-us", label: "About Us" },
              { href: "/blogs", label: "Blogs" },
              { href: "/get-involved", label: "Get Involved" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-gray-800 border-b-4 border-transparent hover:border-blue-600 rounded-sm ${
                  pathname === href ? "border-blue-600" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right: Login and Donate Button */}
          <div className="flex items-center space-x-6">
            <Link
              href="/login"
              className={`text-gray-800 border-b-4 border-transparent hover:border-blue-600 rounded-sm ${
                pathname === "/login" ? "border-blue-600" : ""
              }`}
            >
              Login
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-[160px] h-[50px] hover:bg-blue-700">
              Donate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
