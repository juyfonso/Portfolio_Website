import React from 'react';

const MangaBountyBoard = () => {
  const quests = [
    {
      year: '2023',
      title: 'SULAM@UiTM - SERVICE LEARNING',
      role: 'FOOD MANAGEMENT LEAD',
      description: 'Led a food management committee for the University for Society (SULAM) program in Majlis Daerah Tapah, coordinating logistics and sponsorships to ensure free meals for all participating students.',
      stamp: 'QUEST MET'
    },
    {
      year: '2023',
      title: 'DISCRETE MATH WORKSHOP',
      role: 'TECHNICAL FACILITATOR',
      description: 'Acted as a student facilitator, hosting workshops to assist peers struggling with Discrete Mathematics logic and formulas, leading to validated grade improvements.',
      stamp: 'PASSED'
    },
    {
      year: '2020',
      title: 'ARDUINO SUMO CAR BATTLE',
      role: 'STATE REPRESENTATIVE',
      description: 'Represented school and state at the UTP Arduino Tournament. Led a 3-member team to design, program, and wire an automated robot Sumo car, competing in controller-based combat rings.',
      stamp: 'BATTLE WON'
    },
    {
      year: '2019',
      title: '3D TRAVEL TOOL TOURNAMENT',
      role: 'SCHOOL REPRESENTATIVE',
      description: 'Represented school at the UTP 3D Tool Design Tournament. Designed a multi-functional smart travel bottle (with integrated boiling/cooling features), oversaw its 3D print render, and pitched to judges.',
      stamp: 'GOLD STAMP'
    }
  ];

  return (
    <div style={{ padding: '8px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px'
      }}>
        {quests.map((quest, index) => (
          <div
            key={index}
            style={{
              border: '3px solid var(--manga-ink)',
              padding: '16px',
              backgroundColor: '#fff',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '4px 4px 0 var(--manga-ink)'
            }}
          >
            {/* Screentone header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '2px solid var(--manga-ink)',
              paddingBottom: '6px',
              marginBottom: '10px'
            }}>
              <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                YEAR: {quest.year}
              </span>
              <span style={{ 
                fontFamily: 'var(--font-typewriter)', 
                fontSize: '0.65rem', 
                backgroundColor: 'var(--manga-ink)', 
                color: 'var(--manga-paper)',
                padding: '2px 6px',
                fontWeight: 'bold'
              }}>
                ACTIVE
              </span>
            </div>

            {/* Title & Role */}
            <div>
              <h4 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.05rem', 
                fontWeight: 'bold', 
                lineHeight: '1.2',
                color: 'var(--manga-ink)',
                marginBottom: '4px'
              }}>
                {quest.title}
              </h4>
              <p style={{ 
                fontFamily: 'var(--font-typewriter)', 
                fontSize: '0.65rem', 
                color: 'var(--manga-grey-1)',
                textTransform: 'uppercase',
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                ROLE: {quest.role}
              </p>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.4', textAlign: 'justify' }}>
                {quest.description}
              </p>
            </div>

            {/* Bold Quest Stamp */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              border: '3px double red',
              color: 'red',
              fontFamily: 'var(--font-typewriter)',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              padding: '2px 8px',
              transform: 'rotate(-10deg) scale(0.95)',
              opacity: 0.85,
              textTransform: 'uppercase',
              pointerEvents: 'none',
              backgroundColor: '#fff'
            }}>
              ★ {quest.stamp} ★
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MangaBountyBoard;
