// app/components/SocialIcons.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { name: 'github', url: 'https://www.github.com/rexthebreathtaker', icon: faGithub },
    { name: 'twitter', url: 'https://twitter.com/yourprofile', icon: faTwitter },
      { name: 'instagram', url: 'https://www.instagram.com/rexthebreathtaker', icon: faInstagram }
      ];

      const SocialIcons: React.FC = () => {
      return (
        <div className="social-icons">
          {socialLinks.map((social) => (
            <a
             key={social.name}
             href={social.url}
             target="_blank"
             rel="noopener noreferrer"
             aria-label={social.name}
             >
            <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
            ))}
        </div>
        
      );   
    };

           export default SocialIcons;