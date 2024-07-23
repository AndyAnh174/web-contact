import React from 'react';

const SocialLink = ({ url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-5xl m-2 hover:text-gray-400"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
