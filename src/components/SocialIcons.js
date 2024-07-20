import React from 'react';
import SocialLink from './SocialLink';

const SocialIcons = ({ links }) => {
  return (
    <div className="flex flex-col gap-8 mt-4 px-6"> {/* Tùy chỉnh CSS theo ý bạn */}
      {links.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
};

export default SocialIcons;