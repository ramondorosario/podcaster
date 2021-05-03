import React, { SVGProps } from "react";

export const Shuffle: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17.9793L5.384 17.9913C6.393 17.9963 7.336 17.4943 7.896 16.6553L14.105 7.34126C14.663 6.50326 15.605 6.00226 16.612 6.00526L21 6.02126"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19.9792L21 17.9792L19 15.9792"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.893 8.62522L7.904 7.25322C7.337 6.46722 6.425 6.00322 5.455 6.00822L3 6.02122"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.969 15.3752L14.095 16.8312C14.665 17.5682 15.546 17.9982 16.478 17.9952L21 17.9792"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8.02124L21 6.02124L19 4.02124"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
