import React from 'react';
import SocialLink from './SocialLink';

const SocialIcons = ({ links }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {links.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
};

export default SocialIcons;
