import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaSpotify} from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import avatar from '../data/images/yourself.png';

export const personalData = {
  name: 'Hồ Việt Anh (Andy Anh)',
  bio: 'I am a student at Ho Chi Minh City University of Technology and Education',
  avatar: avatar, // Thay bằng link avatar của bạn
  links: [
    { platform: 'Github', url: 'https://github.com/AndyAnh174', icon: <FaGithub /> },
    { platform: 'Facebook', url: 'https://www.facebook.com/andy.anh174/', icon: <FaFacebook /> },
    { platform: 'Instagram', url: 'https://www.instagram.com/mortal.aa174/', icon: <FaInstagram /> },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/vi%E1%BB%87t-anh-h%E1%BB%93-b61489245/', icon: <FaLinkedin /> },
    { platform: 'Zalo', url: 'https://drive.google.com/file/d/1IHZ_Ae8r53sWLSSopiEN3vQkuGjnSP_c/view?usp=sharing', icon: <SiZalo /> },
    { platform: 'Spotify', url: 'https://open.spotify.com/user/31ici25fxmhca3pkcbcogy34d2ca?si=3e8ecd2e45dd420a', icon: <FaSpotify /> },
    // Thêm các mạng xã hội khác với icon tương ứng
  ],
};