import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGmail } from "react-icons/si";

interface FooterType {
  Footer: {
    contactNumber: string;
    mail: string;
    gitProfile: string;
    linkedIn: string;
    leetcode: string | null;
    instagram: string;
    twitter: string | null;
  }
}



function Contact({ footer }: { footer: FooterType }) {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 py-12 px-6  mt-20 shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Let’s get in touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          Check out my profiles and see what I’m up to
        </p>

        <div className="flex flex-wrap justify-center gap-15 text-base">
          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-xl" />
            <a href={`tel:${footer.Footer.contactNumber}`} className="hover:underline">
              {footer.Footer.contactNumber}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <SiGmail className="text-xl" />
            <a href={`mailto:${footer.Footer.mail}`} className="hover:underline">
              {footer.Footer.mail}
            </a>
          </div>
          {footer.Footer.linkedIn && (
            <a href={footer.Footer.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          )}
          {footer.Footer.gitProfile && (
            <a href={footer.Footer.gitProfile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
          )}
          {footer.Footer.leetcode && (
            <a href={footer.Footer.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <SiLeetcode className="text-xl" />
              <span>LeetCode</span>
            </a>
          )}
          {footer.Footer.instagram && (
            <a href={footer.Footer.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </a>
          )}
          {footer.Footer.twitter && (
            <a href={footer.Footer.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
              <FaTwitter className="text-xl" />
              <span>Twitter</span>
            </a>
          )}
        </div>
        {/* Resume Button */}
      </div>
    </footer>
  );
}

export default Contact;