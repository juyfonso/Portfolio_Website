import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import MangaHeader from './components/MangaHeader';
import MangaPanel from './components/MangaPanel';
import MangaProjects from './components/MangaProjects';
import MangaCrossword from './components/MangaCrossword';
import MangaContact from './components/MangaContact';
import MangaBountyBoard from './components/MangaBountyBoard';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const statsRefs = useRef([]);

  useEffect(() => {
    // Scroll animation for page section reveals
    const sections = gsap.utils.toArray('.manga-scroll-section');
    
    sections.forEach((section) => {
      const panels = section.querySelectorAll('.manga-panel');
      
      gsap.fromTo(panels, 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Stats bar fill animation
    statsRefs.current.forEach((bar) => {
      if (!bar) return;
      const fillWidth = bar.getAttribute('data-width');
      
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: fillWidth,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleScrollToSection = (id) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} style={{ width: '100vw', overflowX: 'hidden' }}>
      
      {/* CHAPTER 1: HOME PAGE */}
      <section className="manga-scroll-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="manga-page">
          <div className="paper-grain-overlay"></div>
          <MangaHeader />

          <div className="manga-grid" style={{ marginTop: '16px' }}>
            
            {/* Left Panel: 1 Manga Character presenting the portfolio */}
            <MangaPanel gridSpan={5} sfx="SHING!" sfxPosition={{ bottom: '20px', left: '20px' }}>
              <div style={{ 
                height: '100%', 
                minHeight: '380px', 
                backgroundImage: 'url("/images/hero.png")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                position: 'relative'
              }}
              className="screentone-dots-dense"
              >
                <div style={{ 
                  position: 'absolute', 
                  bottom: '12px', 
                  right: '12px', 
                  backgroundColor: 'var(--manga-ink)', 
                  color: 'var(--manga-paper)', 
                  padding: '4px 8px', 
                  fontFamily: 'var(--font-typewriter)', 
                  fontSize: '0.8rem',
                  transform: 'rotate(-2deg)',
                  border: '1px solid var(--manga-paper)'
                }}>
                  ZULKARNAIN
                </div>
              </div>
            </MangaPanel>

            {/* Right Panel: Welcoming Speech & 4 Manga Book Buttons */}
            <MangaPanel gridSpan={7} sfx="BA-BAM!" sfxPosition={{ top: '15px', right: '15px' }} className="manga-panel-slanted-right">
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <span className="vintage-label" style={{ fontWeight: 'bold' }}>HERO ARCHETYPE: MULTIMODAL AI ENGINEER</span>
                  
                  {/* Presentation Speech Bubble */}
                  <div className="speech-bubble speech-pointer-left" style={{ margin: '12px 0 24px', fontSize: '0.88rem' }}>
                    "Greetings! Welcome to my official developer portfolio. I specialize in <strong>Multimodal AI Engineering</strong>, bridging Computer Vision and NLP workflows. Select an issue from my bookshelf below to start reading!"
                  </div>

                  {/* 4 Interactive Manga Book Buttons */}
                  <div className="manga-book-deck" style={{ marginBottom: '16px' }}>
                    
                    <div className="manga-book-btn" onClick={() => handleScrollToSection('academic')}>
                      <div className="manga-book-spine"></div>
                      <div className="vintage-label" style={{ fontSize: '0.45rem', textAlign: 'center' }}>VOL. I</div>
                      <div className="manga-book-title">ACADEMY</div>
                      <div className="manga-book-vol">STATS</div>
                    </div>

                    <div className="manga-book-btn" onClick={() => handleScrollToSection('experience')}>
                      <div className="manga-book-spine"></div>
                      <div className="vintage-label" style={{ fontSize: '0.45rem', textAlign: 'center' }}>VOL. II</div>
                      <div className="manga-book-title">CRUSADE</div>
                      <div className="manga-book-vol">LOGS</div>
                    </div>

                    <div className="manga-book-btn" onClick={() => handleScrollToSection('laboratory')}>
                      <div className="manga-book-spine"></div>
                      <div className="vintage-label" style={{ fontSize: '0.45rem', textAlign: 'center' }}>VOL. III</div>
                      <div className="manga-book-title">LAB</div>
                      <div className="manga-book-vol">SCHEMAS</div>
                    </div>

                    <div className="manga-book-btn" onClick={() => handleScrollToSection('quests')}>
                      <div className="manga-book-spine"></div>
                      <div className="vintage-label" style={{ fontSize: '0.45rem', textAlign: 'center' }}>VOL. IV</div>
                      <div className="manga-book-title">HONOR</div>
                      <div className="manga-book-vol">QUESTS</div>
                    </div>

                  </div>
                </div>
              </div>
            </MangaPanel>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: ACADEMIC ARCHIVES (ABOUT & EDUCATION) */}
      <section className="manga-scroll-section" id="section-academic" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="manga-page">
          <div className="paper-grain-overlay"></div>
          <MangaHeader />

          <div className="manga-grid">
            
            {/* Education Logs */}
            <MangaPanel gridSpan={6} sfx="STUDY!" sfxPosition={{ top: '15px', right: '15px' }}>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '12px', borderBottom: '2.5px solid var(--manga-ink)', paddingBottom: '4px' }}>
                  Educational Credentials
                </h3>
                
                <div style={{ marginBottom: '16px' }}>
                  <span className="vintage-label" style={{ fontWeight: 'bold', color: 'var(--manga-grey-1)' }}>2024 — 2026</span>
                  <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1rem', margin: '2px 0' }}>B.Sc in Computer Science (Hons)</h4>
                  <p style={{ fontSize: '0.8rem', fontStyle: 'italic', margin: '2px 0 4px' }}>Universiti Teknologi MARA (UiTM) Tapah</p>
                  <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.85rem', fontWeight: 'bold' }}>CGPA: 3.74 / 4.00</div>
                </div>

                <div>
                  <span className="vintage-label" style={{ fontWeight: 'bold', color: 'var(--manga-grey-1)' }}>2021 — 2024</span>
                  <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1rem', margin: '2px 0' }}>Diploma in Computer Science</h4>
                  <p style={{ fontSize: '0.8rem', fontStyle: 'italic', margin: '2px 0 4px' }}>Universiti Teknologi MARA (UiTM) Tapah</p>
                  <div style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.85rem', fontWeight: 'bold' }}>CGPA: 3.87 / 4.00</div>
                </div>
              </div>
            </MangaPanel>

            {/* Character Stats & Scholar Avatar */}
            <MangaPanel gridSpan={6} className="manga-panel-slanted-right">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', height: '100%' }}>
                <div style={{ 
                  backgroundImage: 'url("/images/scholar.png")', 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center center',
                  borderRight: '3px solid var(--manga-ink)'
                }} className="screentone-stripes">
                </div>
                
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 'bold', marginBottom: '8px', borderBottom: '2px solid var(--manga-ink)', paddingBottom: '2px' }}>
                    CHARACTER ATTRIBUTES
                  </h4>
                  <table className="stats-table">
                    <tbody>
                      <tr>
                        <td className="stat-label">AI & ML</td>
                        <td>
                          <div className="stat-bar-container">
                            <div ref={el => statsRefs.current[0] = el} className="stat-bar-fill" data-width="92%" style={{ width: '0%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="stat-label">Python</td>
                        <td>
                          <div className="stat-bar-container">
                            <div ref={el => statsRefs.current[1] = el} className="stat-bar-fill" data-width="95%" style={{ width: '0%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="stat-label">Frontend</td>
                        <td>
                          <div className="stat-bar-container">
                            <div ref={el => statsRefs.current[2] = el} className="stat-bar-fill" data-width="85%" style={{ width: '0%' }}></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="stat-label">Backend</td>
                        <td>
                          <div className="stat-bar-container">
                            <div ref={el => statsRefs.current[3] = el} className="stat-bar-fill" data-width="88%" style={{ width: '0%' }}></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </MangaPanel>

            {/* Visual tech stack inventory */}
            <MangaPanel gridSpan={12} sfx="EQUIP!" sfxPosition={{ top: '15px', right: '15px' }} className="manga-panel-slanted-left" style={{ marginTop: '24px' }}>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '16px', borderBottom: '3px solid var(--manga-ink)', paddingBottom: '6px' }}>
                  Technology Inventory
                </h3>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '16px' 
                }}>
                  <div style={{ border: '2px solid var(--manga-ink)', padding: '12px', backgroundColor: '#fff' }} className="screentone-stripes">
                    <h5 style={{ fontFamily: 'var(--font-typewriter)', fontWeight: 'bold', marginBottom: '8px', borderBottom: '2px solid var(--manga-ink)' }}>AI & MACHINE LEARNING</h5>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '16px', fontSize: '0.8rem', fontFamily: 'var(--font-typewriter)', lineHeight: '1.6' }}>
                      <li>LangGraph</li>
                      <li>YOLOv8</li>
                      <li>XGBoost</li>
                      <li>RAG Pipelines</li>
                    </ul>
                  </div>

                  <div style={{ border: '2px solid var(--manga-ink)', padding: '12px', backgroundColor: '#fff' }}>
                    <h5 style={{ fontFamily: 'var(--font-typewriter)', fontWeight: 'bold', marginBottom: '8px', borderBottom: '2px solid var(--manga-ink)' }}>LANGUAGES</h5>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '16px', fontSize: '0.8rem', fontFamily: 'var(--font-typewriter)', lineHeight: '1.6' }}>
                      <li>Python</li>
                      <li>Dart</li>
                      <li>JavaScript (ES6+)</li>
                      <li>C++ / Java</li>
                      <li>PHP / SQL</li>
                    </ul>
                  </div>

                  <div style={{ border: '2px solid var(--manga-ink)', padding: '12px', backgroundColor: '#fff' }}>
                    <h5 style={{ fontFamily: 'var(--font-typewriter)', fontWeight: 'bold', marginBottom: '8px', borderBottom: '2px solid var(--manga-ink)' }}>FRONTEND & MOBILE</h5>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '16px', fontSize: '0.8rem', fontFamily: 'var(--font-typewriter)', lineHeight: '1.6' }}>
                      <li>Flutter</li>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>Chart.js</li>
                      <li>HTML5 / CSS3</li>
                    </ul>
                  </div>

                  <div style={{ border: '2px solid var(--manga-ink)', padding: '12px', backgroundColor: '#fff' }} className="screentone-stripes">
                    <h5 style={{ fontFamily: 'var(--font-typewriter)', fontWeight: 'bold', marginBottom: '8px', borderBottom: '2px solid var(--manga-ink)' }}>BACKEND & DATABASE</h5>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '16px', fontSize: '0.8rem', fontFamily: 'var(--font-typewriter)', lineHeight: '1.6' }}>
                      <li>Node.js</li>
                      <li>FastAPI / Flask</li>
                      <li>Supabase</li>
                      <li>Firebase</li>
                      <li>MySQL / PostgreSQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </MangaPanel>

          </div>
        </div>
      </section>

      {/* CHAPTER 3: INTERNSHIP CHRONICLES (EXPERIENCE) */}
      <section className="manga-scroll-section" id="section-experience" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="manga-page">
          <div className="paper-grain-overlay"></div>
          <MangaHeader />

          <div className="manga-grid">
            <MangaPanel gridSpan={12} sfx="SWIPE!" sfxPosition={{ bottom: '15px', right: '15px' }}>
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '16px', borderBottom: '3px solid var(--manga-ink)', paddingBottom: '6px' }}>
                  Professional Internships
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                  
                  <div className="screentone-stripes" style={{ border: '2px solid var(--manga-ink)', padding: '16px', backgroundColor: '#fff' }}>
                    <span className="vintage-label" style={{ fontWeight: 'bold', color: 'var(--manga-grey-1)' }}>MAR 2026 — PRESENT</span>
                    <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', margin: '4px 0' }}>PJIM&A</h4>
                    <p style={{ fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '8px' }}>Software Developer Intern (Remote)</p>
                    <ul style={{ listStyleType: 'square', paddingLeft: '16px', fontSize: '0.82rem', lineHeight: '1.4' }}>
                      <li>Engineered a zero-backend data visualization pipeline with 6,123 lines of optimized code, eliminating server maintenance overhead.</li>
                      <li>Implemented SheetJS parsing across 8 faculties with Playwright E2E testing.</li>
                    </ul>
                  </div>

                  <div className="screentone-stripes" style={{ border: '2px solid var(--manga-ink)', padding: '16px', backgroundColor: '#fff' }}>
                    <span className="vintage-label" style={{ fontWeight: 'bold', color: 'var(--manga-grey-1)' }}>MAR 2026 — PRESENT</span>
                    <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', margin: '4px 0' }}>UiTM Kampus Tapah</h4>
                    <p style={{ fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '8px' }}>Software Developer Intern</p>
                    <ul style={{ listStyleType: 'square', paddingLeft: '16px', fontSize: '0.82rem', lineHeight: '1.4' }}>
                      <li>Co-architected Flask RAG framework (AIRA) integrating YOLOv8 vision pipeline streaming 3 outputs.</li>
                      <li>Showcased prototype at INDES 2026 Exposition, earning scaled deployment validation.</li>
                    </ul>
                  </div>

                  <div className="screentone-stripes" style={{ border: '2px solid var(--manga-ink)', padding: '16px', backgroundColor: '#fff' }}>
                    <span className="vintage-label" style={{ fontWeight: 'bold', color: 'var(--manga-grey-1)' }}>SEP 2023 — MAR 2024</span>
                    <h4 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.15rem', margin: '4px 0' }}>Madani IT Solution</h4>
                    <p style={{ fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '8px' }}>Software Developer Intern</p>
                    <ul style={{ listStyleType: 'square', paddingLeft: '16px', fontSize: '0.82rem', lineHeight: '1.4' }}>
                      <li>Developed full-stack modules for Pusat Sains Negara (PSN) E-Ticketing MySQL databases.</li>
                      <li>Supported deployment of SPTBv6 and SELAMAT systems for Johor Land Office.</li>
                    </ul>
                  </div>

                </div>
              </div>
            </MangaPanel>
          </div>
        </div>
      </section>

      {/* CHAPTER 4: LABORATORY SCHEMATICS (PROJECTS) */}
      <section className="manga-scroll-section" id="section-laboratory" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="manga-page">
          <div className="paper-grain-overlay"></div>
          <MangaHeader />

          <div className="manga-grid">
            <MangaPanel gridSpan={4} sfx="GEAR!" sfxPosition={{ bottom: '15px', right: '15px' }}>
              <div style={{ 
                height: '100%', 
                minHeight: '200px', 
                backgroundImage: 'url("/images/engineer.png")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center'
              }} className="screentone-dots">
              </div>
            </MangaPanel>

            <MangaPanel gridSpan={8} className="manga-panel-slanted-right">
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
                  Laboratory Index
                </h3>
                <div className="speech-bubble speech-pointer-left" style={{ fontSize: '0.85rem' }}>
                  "Welcome to the laboratory! Below is my gallery of active software schematics. Slide through the projects and open blueprints to read specs!"
                </div>
              </div>
            </MangaPanel>

            {/* Slider */}
            <div style={{ gridColumn: 'span 12' }}>
              <MangaProjects />
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: BOUNTY LOGS & CONTACT (ACHIEVEMENTS / CONTACT) */}
      <section className="manga-scroll-section" id="section-quests" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="manga-page">
          <div className="paper-grain-overlay"></div>
          <MangaHeader />

          <div className="manga-grid">
            
            {/* Achievements Quest Board */}
            <MangaPanel gridSpan={12} sfx="HONOR!" sfxPosition={{ top: '15px', right: '15px' }} className="manga-panel-slanted-left" style={{ marginBottom: '24px' }}>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', borderBottom: '3px solid var(--manga-ink)', paddingBottom: '6px', textAlign: 'center' }}>
                  Extracurricular Achievements
                </h3>
                <MangaBountyBoard />
              </div>
            </MangaPanel>

            {/* Crossword Puzzle */}
            <MangaPanel gridSpan={6}>
              <div style={{ padding: '24px', height: '100%' }}>
                <h3 style={{ 
                  fontFamily: 'var(--font-headline)', 
                  fontSize: '1.3rem', 
                  fontWeight: 'bold', 
                  textAlign: 'center',
                  borderBottom: '2.5px solid var(--manga-ink)',
                  paddingBottom: '6px',
                  marginBottom: '16px'
                }}>
                  The Daily Brainteaser
                </h3>
                <MangaCrossword />
              </div>
            </MangaPanel>

            {/* Telegram Dispatch Contact Form */}
            <MangaPanel gridSpan={6} className="manga-panel-slanted-right">
              <div style={{ display: 'grid', gridTemplateRows: '1.1fr 1.9fr', height: '100%' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', borderBottom: '3px solid var(--manga-ink)' }}>
                  <div style={{ 
                    backgroundImage: 'url("/images/messenger.png")', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    borderRight: '3px solid var(--manga-ink)'
                  }} className="screentone-dots-dense"></div>
                  
                  <div style={{ padding: '12px', display: 'flex', alignItems: 'center' }}>
                    <div className="speech-bubble speech-pointer-left" style={{ fontSize: '0.78rem', padding: '8px 12px' }}>
                      "Quest completed? Type your contact dispatch stop and Zulkarnain will respond immediately stop!"
                    </div>
                  </div>
                </div>

                <div>
                  <MangaContact />
                </div>

              </div>
            </MangaPanel>

          </div>
        </div>
      </section>

      {/* Retro Ink Bleed SVG displacement filter */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <filter id="ink-bleed">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
