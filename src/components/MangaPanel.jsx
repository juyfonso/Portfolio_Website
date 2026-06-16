import React, { useState } from 'react';

const MangaPanel = ({ children, gridSpan = 12, className = '', sfx = '', sfxPosition = { top: '10px', right: '10px' } }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    gridColumn: `span ${gridSpan}`,
  };

  return (
    <section 
      className={`manga-panel ${className}`} 
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speedlines Overlay */}
      <div className="speedlines-overlay"></div>

      {/* Manga SFX sound sticker on hover */}
      {sfx && isHovered && (
        <span 
          className="manga-sfx" 
          style={{
            ...sfxPosition,
            animation: 'pulse 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          {sfx}
        </span>
      )}

      {/* Main Content inside the panel */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </section>
  );
};

export default MangaPanel;
