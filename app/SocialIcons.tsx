import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
    <a href="https://www.github.com/bandicootform" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    <a href="https://www.instagram.com/rexthebreathtaker" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
     </div>
         );
         };

     export default SocialIcons;