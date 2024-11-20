import React from 'react';

const ProjectVideo = ({ url }) => (
  <div style={{ width: '100%', maxWidth: '400px', position: 'relative' }}>
    <svg
      viewBox="0 0 200 220"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      {/* Laptop body */}
      <rect x="10" y="5" width="180" height="129" fill="#C0C0C0" rx="5" />
      
      {/* Screen area */}
      <rect x="15" y="10" width="170" height="110" fill="black" rx="3" id="screen" />

      {/* Keyboard and base */}
      <rect x="0" y="125" width="200" height="7" rx="2" fill="#A0A0A0" />
      <rect x="5" y="131" width="190" height="3" rx="2" fill="#808080" />

      {/* Stand area */}
      <line x1="50" y1="125" x2="150" y2="125" stroke="#808080" strokeWidth="2" />
    </svg>

    {/* YouTube Video overlay*/}
    <iframe
      src={url}
      title="YouTube Video"
      allow="autoplay; encrypted-media"
      allowFullScreen
      style={{
        position: 'absolute',
        top: '4.5%',
        left: '7.5%',
        width: '85%',
        height: '50%',
        borderRadius: '3px',
        border: 'none',
      }}
    /> 
  </div>
);

export default ProjectVideo;
