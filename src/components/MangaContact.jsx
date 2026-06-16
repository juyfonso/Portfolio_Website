import React, { useState } from 'react';

const MangaContact = () => {
  const [formData, setFormData] = useState({
    sender: '',
    agency: '',
    message: ''
  });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SENT

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.sender || !formData.message) return;

    setStatus('SENDING');
    
    // Simulate transmission delay
    setTimeout(() => {
      setStatus('SENT');
      setFormData({ sender: '', agency: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 4000);
    }, 2000);
  };

  return (
    <div style={{ padding: '8px' }}>
      <div style={{
        border: '3px solid var(--manga-ink)',
        padding: '24px',
        backgroundColor: '#fff',
        position: 'relative'
      }}>
        {/* Contact Header */}
        <div style={{
          textAlign: 'center',
          borderBottom: '3px solid var(--manga-ink)',
          paddingBottom: '16px',
          marginBottom: '20px'
        }}>
          <h3 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            margin: '0 0 4px 0',
            letterSpacing: '1px'
          }}>
            SEND DISPATCH
          </h3>
          <p className="vintage-label" style={{ fontSize: '0.65rem', color: 'var(--manga-grey-1)' }}>
            DIRECT INK TELEGRAPHY • RESPONSE GUARANTEED
          </p>
        </div>

        {/* Form Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="manga-contact-grid">
          {/* Form Side */}
          <form onSubmit={handleSubmit} style={{ gridColumn: 'span 2' }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', marginBottom: '6px', fontWeight: 'bold' }}>
                SENDER NAME :
              </label>
              <input
                type="text"
                name="sender"
                value={formData.sender}
                onChange={handleInputChange}
                required
                placeholder="YOUR NAME STOP"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '2px solid var(--manga-ink)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  color: 'var(--manga-ink)'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', marginBottom: '6px', fontWeight: 'bold' }}>
                REPLY ADDRESS (AGENCY RECORD) :
              </label>
              <input
                type="email"
                name="agency"
                value={formData.agency}
                onChange={handleInputChange}
                required
                placeholder="EMAIL@DOMAIN.COM STOP"
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '2px solid var(--manga-ink)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  color: 'var(--manga-ink)'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', marginBottom: '6px', fontWeight: 'bold' }}>
                TELEGRAPH MESSAGE BRIEF :
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                placeholder="ENTER DISPATCH HERE STOP PREFER CONCISE STATEMENTS SEPARATED BY STOP KEYWORDS STOP"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '2px solid var(--manga-ink)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  resize: 'none',
                  lineHeight: '1.4',
                  color: 'var(--manga-ink)'
                }}
              />
            </div>

            {/* Submission triggers */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '2px solid var(--manga-ink)',
              paddingTop: '16px'
            }}>
              <div>
                {status === 'SENDING' && (
                  <span className="vintage-label" style={{ color: 'var(--manga-grey-1)', animation: 'pulse 1s infinite', fontSize: '0.7rem' }}>
                    ⚡ TRANSMITTING CABLE WIRE...
                  </span>
                )}
                {status === 'SENT' && (
                  <span className="vintage-label" style={{ color: 'green', fontWeight: 'bold', fontSize: '0.7rem' }}>
                    ✔ DISPATCH TRANSMITTED. STOP.
                  </span>
                )}
                {status === 'IDLE' && (
                  <span className="vintage-label" style={{ color: 'var(--manga-grey-2)', fontSize: '0.7rem' }}>
                    STATUS: ACTIVE LINE
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="vintage-btn"
                disabled={status === 'SENDING'}
                style={{ padding: '6px 16px', fontSize: '0.8rem' }}
              >
                {status === 'SENDING' ? 'CONNECTING...' : 'TRANSMIT TELEGRAM'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Chapter end notation */}
      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        fontFamily: 'var(--font-typewriter)',
        fontSize: '0.75rem',
        color: 'var(--manga-grey-1)'
      }}>
        THE END • THANK YOU FOR READING • TO BE CONTINUED in next deployment...
      </div>
    </div>
  );
};

export default MangaContact;
