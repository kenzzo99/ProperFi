import React from "react";

const Buttonz = ({ styles, to }) => {
  // Check if the link is external
  const isExternal = /^https?:\/\//.test(to);

  // Render a regular anchor tag for external links
  if (isExternal) {
    return (
      <a
        href={to}
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
        target="_blank" // Open link in a new tab
        rel="noopener noreferrer" // Add security measures for external links
      >
        Buy Now
      </a>
    );
  }

  // Render a Link component for internal links
  return (
    <Link
      to={to}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Startedd
    </Link>
  );
};

export default Buttonz;
