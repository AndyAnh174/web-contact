import React from 'react';
import SocialLink from './SocialLink';
import avatar from '../data/images/yourself.png';

const ProfileCard = ({ data }) => {
  const { name, bio, avatar, links } = data;

  return (
    <div className="card lg:card-side bg-base-300 shadow-xl flex flex-col items-center p-6">
      <figure className="w-full max-w-[300px] mb-4">
        <img src={avatar} alt={name} className="rounded-xl w-full h-auto" />
      </figure>
      <div className="w-full text-center mb-8 px-8"> {/* Thêm mb-8 vào đây */}
      <h2 className="card-title text-4xl font-bold mb-2 whitespace-nowrap">{name}</h2> {/* Thêm whitespace-nowrap vào đây */}
      <p className="mb-4 whitespace-nowrap text-lg">{bio}</p> {/* Thêm whitespace-nowrap vào đây */}
      </div>
      <div className="flex flex-col gap-8">
        {links.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;