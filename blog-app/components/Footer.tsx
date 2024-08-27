import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import HelpingPartner from '@/public/icons/helping-partner.png'; // Adjust the path if necessary
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row space-x-40 items-center space-y-2 md:space-y-0 border-t">
          {/* 1. FooterIcon (PNG Image) */}
          <div className="flex-shrink-0">
            <Image
              src={HelpingPartner}
              alt="Helping Partner"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>

          {/* 2. Support Us Section */}
          <div className="flex flex-col items-start space-y-2 w-60">
            <p className="text-base font-bold">Get Involved in improving tech education in Africa</p>
            <button className="bg-blue-700 text-white text-sm px-12 py-4 rounded-lg hover:bg-blue-900">
              Support Us
            </button>
          </div>

          {/* 3. Links Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold text-gray-700">Links</h3>
            <Link href="/" className="text-sm hover:text-blue-600 font-light">Home</Link>
            <Link href="/success-stories" className="text-sm hover:text-blue-600 font-light">Success Stories</Link>
            <Link href="/about-us" className="text-sm hover:text-blue-600 font-light">About Us</Link>
            <Link href="/get-involved" className="text-sm hover:text-blue-600 font-light">Get Involved</Link>
          </div>

          {/* 4. Teams Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold text-gray-700">Teams</h3>
            <Link href="/board-members" className="text-sm hover:text-blue-600 font-light">Board Members</Link>
            <Link href="/advisors" className="text-sm hover:text-blue-600 font-light">Advisors/Mentors</Link>
            <Link href="/executives" className="text-sm hover:text-blue-600 font-light">Executives</Link>
            <Link href="/staff" className="text-sm hover:text-blue-600 font-light">Staffs</Link>
          </div>

          {/* 5. Blogs Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold text-gray-700">Blogs</h3>
            <Link href="/recent-blogs" className="text-sm hover:text-blue-600 font-light">Recent Blogs</Link>
            <Link href="/new-blog" className="text-sm hover:text-blue-600 font-light">New Blog</Link>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-300 mt-6 pt-4 flex justify-between items-center text-sm">
          <p className="text-gray-500">2020 Africa to Silicon Valley, Inc All rights reserved</p>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" passHref>
              <FaTwitter className="text-gray-500 hover:text-blue-500 text-sm" />
            </Link>
            <Link href="https://facebook.com" passHref>
              <FaFacebookF className="text-gray-500 hover:text-blue-600 text-sm" />
            </Link>
            <Link href="https://youtube.com" passHref>
              <FaYoutube className="text-gray-500 hover:text-red-600 text-sm" />
            </Link>
            <Link href="https://linkedin.com" passHref>
              <FaLinkedinIn className="text-gray-500 hover:text-blue-700 text-sm" />
            </Link>
            <Link href="https://instagram.com" passHref>
              <FaInstagram className="text-gray-500 hover:text-pink-600 text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
