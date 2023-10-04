import React from "react";

const Logo = () => {
  return (
    <svg
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      {/* Draw your constellation points here */}
      <circle cx="50" cy="50" r="5" fill="white" />
      <circle cx="100" cy="100" r="5" fill="white" />
      <circle cx="150" cy="150" r="5" fill="white" />

      {/* Connect the points with lines */}
      <line x1="50" y1="50" x2="100" y2="100" stroke="white" />
      <line x1="100" y1="100" x2="150" y2="150" stroke="white" />
    </svg>
  );
};

export default Logo;

// LOGO attribution
//Image by <a href="https://www.freepik.com/free-vector/gradient-galaxy-logo-template_20917697.htm#query=night%20sky%20logo&position=1&from_view=keyword&track=ais">Freepik</a>
