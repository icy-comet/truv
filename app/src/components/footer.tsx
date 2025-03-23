import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-white">UniVote</h2>
          <p className="text-sm">Secure & Transparent Blockchain Voting</p>
        </div>

        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/faq" className="hover:text-white transition">
            FAQ
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} UniVote. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
