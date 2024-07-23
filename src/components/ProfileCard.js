import React from 'react';

const ProfileCard = ({ data }) => {
  const { name, bio, avatar } = data;

  return (
    <div className="bg-gray-900 shadow-xl flex flex-col items-center p-6 rounded-lg max-w-screen-sm md:max-w-md lg:max-w-lg"> 
      <img src={avatar} alt={name} className="w-48 h-auto mb-4 rounded-lg" />
      <div className="text-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{name}</h2> 
        <p className="text-gray-400 break-words">{bio}</p> 
      </div>
    </div>
  );
};

export default ProfileCard;
