import React from 'react';
import SocialIcons from './SocialIcons'; // Import SocialIcons
import avatar from '../data/images/yourself.png';

const ProfileCard = ({ data }) => {
  const { name, bio, avatar, links } = data;

  return (
    <div className="card lg:card-side bg-base-300 shadow-xl flex flex-col items-center p-12">
      <figure className="w-full max-w-[200px] mb-4">
        <img src={avatar} alt={name} className="rounded-xl w-full h-auto" />
      </figure>
      <div className="w-full text-center mb-8 px-8">
        <h2 className="card-title text-2xl font-bold mb-2 whitespace-nowrap">{name}</h2>
        <p className="mb-4">{bio}</p>
      </div> 
    </div>
  );
};

export default ProfileCard;