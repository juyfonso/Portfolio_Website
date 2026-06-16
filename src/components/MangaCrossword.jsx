import React, { useState } from 'react';

const MangaCrossword = () => {
  // Grid dimensions: 7x7
  const initialGrid = [
    ['', '', '', 'D', '', '', ''],
    ['', '', '', 'A', '', '', ''],
    ['', '', '', 'R', '', '', ''],
    ['', 'P', 'Y', 'T', 'H', 'O', 'N'],
    ['', '', 'O', '', '', '', ''],
    ['S', 'Q', 'L', '', '', '', ''],
    ['', '', 'O', '', '', '', '']
  ];

  const cellNumbers = [
    ['', '', '', '1', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '2', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['4', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
  ];

  // Map clues: 3 Down starts at (3,2) which is YOLO
  const cellStartNumbersExtra = (r, c) => {
    if (r === 3 && c === 2) return '3'; // YOLO Down starts here
    return '';
  };

  const [userAnswers, setUserAnswers] = useState(
    Array(7).fill(null).map(() => Array(7).fill(''))
  );
  
  const [success, setSuccess] = useState(false);

  const handleCellChange = (r, c, val) => {
    const updated = [...userAnswers];
    updated[r][c] = val.toUpperCase().slice(0, 1);
    setUserAnswers(updated);

    // Check correctness
    let isCorrect = true;
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 7; col++) {
        if (initialGrid[row][col] !== '') {
          if (updated[row][col] !== initialGrid[row][col]) {
            isCorrect = false;
          }
        }
      }
    }
    setSuccess(isCorrect);
  };

  const handleReveal = () => {
    setUserAnswers(initialGrid.map(row => [...row]));
    setSuccess(true);
  };

  const handleReset = () => {
    setUserAnswers(Array(7).fill(null).map(() => Array(7).fill('')));
    setSuccess(false);
  };

  return (
    <div style={{ padding: '8px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 34px)', gap: '4px', justifyContent: 'center', marginBottom: '20px' }}>
        {initialGrid.map((row, r) => 
          row.map((cell, c) => {
            const isActive = cell !== '';
            const number = cellNumbers[r][c];
            const extraNumber = cellStartNumbersExtra(r, c);
            
            return (
              <div key={`${r}-${c}`} style={{
                width: '34px',
                height: '34px',
                backgroundColor: isActive ? 'transparent' : 'var(--manga-ink)',
                border: isActive ? '2px solid var(--manga-ink)' : 'none',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {isActive && (
                  <>
                    {number && (
                      <span style={{
                        position: 'absolute',
                        top: '1px',
                        left: '2px',
                        fontSize: '9px',
                        fontFamily: 'var(--font-typewriter)',
                        fontWeight: 'bold',
                        color: 'var(--manga-grey-1)'
                      }}>{number}</span>
                    )}
                    {extraNumber && (
                      <span style={{
                        position: 'absolute',
                        top: '1px',
                        left: '2px',
                        fontSize: '9px',
                        fontFamily: 'var(--font-typewriter)',
                        fontWeight: 'bold',
                        color: 'var(--manga-grey-1)'
                      }}>{extraNumber}</span>
                    )}
                    <input
                      type="text"
                      maxLength="1"
                      value={userAnswers[r][c]}
                      onChange={(e) => handleCellChange(r, c, e.target.value)}
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        textAlign: 'center',
                        fontSize: '1.05rem',
                        fontFamily: 'var(--font-typewriter)',
                        fontWeight: 'bold',
                        backgroundColor: success ? 'rgba(100, 220, 100, 0.15)' : 'transparent',
                        color: 'var(--manga-ink)',
                        outline: 'none',
                        textTransform: 'uppercase'
                      }}
                    />
                  </>
                )}
              </div>
            );
          })
        )}
      </div>

      {success && (
        <div style={{ color: 'var(--manga-ink)', fontSize: '0.8rem', fontFamily: 'var(--font-typewriter)', textAlign: 'center', marginBottom: '12px', fontWeight: 'bold' }}>
          ✦ PUZZLE SOLVED! LEVEL UP! ✦
        </div>
      )}

      {/* Clues */}
      <div style={{ fontSize: '0.8rem', borderTop: '2px dashed var(--manga-ink)', paddingTop: '10px' }}>
        <h5 style={{ fontFamily: 'var(--font-typewriter)', fontWeight: 'bold', margin: '0 0 4px' }}>ACROSS:</h5>
        <ul style={{ paddingLeft: '12px', lineHeight: '1.4', marginBottom: '8px', listStyleType: 'square' }}>
          <li style={{ marginBottom: '4px' }}><strong>2.</strong> Primary language for AI pipelines & Flask backends (6 letters)</li>
          <li style={{ marginBottom: '4px' }}><strong>4.</strong> Standard query language for MySQL/PostgreSQL databases (3 letters)</li>
        </ul>
        <h5 style={{ fontFamily: 'var(--font-typewriter)', fontWeight: 'bold', margin: '0 0 4px' }}>DOWN:</h5>
        <ul style={{ paddingLeft: '12px', lineHeight: '1.4', listStyleType: 'square' }}>
          <li style={{ marginBottom: '4px' }}><strong>1.</strong> Script language used for Flutter cross-platform projects (4 letters)</li>
          <li style={{ marginBottom: '4px' }}><strong>3.</strong> Vision object-detection framework used in Zulkarnain's AIRA system (4 letters)</li>
        </ul>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginTop: '12px', justifyContent: 'center' }}>
        <button className="vintage-btn" onClick={handleReveal} style={{ fontSize: '0.7rem', padding: '4px 8px' }}>
          Reveal Answers
        </button>
        <button className="vintage-btn" onClick={handleReset} style={{ fontSize: '0.7rem', padding: '4px 8px' }}>
          Reset Grid
        </button>
      </div>
    </div>
  );
};

export default MangaCrossword;
