import React, { useEffect, useRef, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import SocialIcons from './components/SocialIcons';
import BackgroundAnimation from './components/BackgroundAnimation';
import WelcomeScreen from './components/WelcomeScreen';
import { personalData } from './data/personalData';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error("Audio playback failed:", error));
      }
    };

    document.addEventListener('click', playAudio);
    document.addEventListener('touchstart', playAudio);

    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('touchstart', playAudio);
    };
  }, [isPlaying]);

  const handleStart = () => {
    setShowWelcome(false);
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.error("Audio playback failed:", error));
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.error("Audio playback failed:", error));
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {showWelcome ? (
        <WelcomeScreen onStart={handleStart} />
      ) : (
        <>
          <BackgroundAnimation />
          <audio ref={audioRef} src="/background-music.mp3" loop />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <ProfileCard data={personalData} />
            <SocialIcons links={personalData.links} />
            {/* <button
              onClick={togglePlay}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              {isPlaying ? 'Pause Music' : 'Play Music'}
            </button> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
