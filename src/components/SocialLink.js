import React from 'react';

const SocialLink = ({ url, icon }) => { // Loại bỏ platform
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-circle btn-outline text-4xl" // Sử dụng btn-circle
    >
      {icon}
    </a>
  );
};

export default SocialLink;