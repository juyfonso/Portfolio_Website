import React, { useState } from 'react';

const MangaProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'aimi',
      title: 'AIMI CAMPUS CARE',
      subtitle: 'MENTAL HEALTH WELLNESS APP',
      description: 'A cross-platform student wellness application delivering context-aware AI chatbot support, DASS-21 screening diagnostics, and real-time counselor dashboard escalation channels.',
      details: 'Leverages a Python FastAPI backend and a LangGraph conversational state-machine to handle secure AI chatbot prompts. Features a counselor dashboard with automated alert pathways.',
      tech: 'Flutter, Dart, Python, FastAPI, LangGraph, Supabase, OpenRouter API (Gemini)',
      imageText: '[ Converse / Assist ]',
      githubUrl: ''
    },
    {
      id: 'resume_maker',
      title: 'ATS RESUME SUITE',
      subtitle: 'CAREER CO-PILOT & WORKSPACE',
      description: 'A local developer workspace featuring an immutable document builder, live Gemini keyword auditor, and Kanban tracking synchronized locally.',
      details: 'Designed to optimize CV structures against automatic tracking systems. Uses Google Gen AI SDK to audit and rate cover letters and resume keywords dynamically.',
      tech: 'TypeScript, Next.js 16 (App Router), Tailwind CSS v4, SQLite, Prisma ORM, Gemini 1.5 Flash',
      imageText: '[ Audit / Optimize ]',
      githubUrl: 'https://github.com/juyfonso/Resume_Maker'
    },
    {
      id: 'clarity',
      title: 'CLARITY ROADTAG VISUALIZER',
      subtitle: 'GEOSPATIAL TAGGING & MAP ANALYTICS',
      description: 'A modern, interactive map-based visualization tool for tagged locations and geographical tag analytics.',
      details: 'Renders geographic coordinate data points onto interactive maps, facilitating density analysis and tag classification with real-time clustering.',
      tech: 'TypeScript, React, Leaflet.js, OpenStreetMap API, TailwindCSS',
      imageText: '[ Map / Visualize ]',
      githubUrl: 'https://github.com/juyfonso/ClaRity-RoadTag-Data-Visualizer'
    },
    {
      id: 'musang_king',
      title: 'MUSANG KING CV',
      subtitle: 'DURIAN FRUIT SELECTION PIPELINE',
      description: 'An intelligent web application developed for CSC566 (Advanced Image Processing) at UiTM that automates the identification and quality assessment of Musang King durian targets.',
      details: 'Engineered an 8-step hybrid feature-extraction pipeline coupled with an optimized XGBoost classifier. Processes geometric compactness and HSV color levels.',
      tech: 'Python, Flask, OpenCV, XGBoost, scikit-learn, Git LFS, HTML5, CSS3',
      imageText: '[ Durian / Vision ]',
      githubUrl: 'https://github.com/juyfonso/Musang_King_ImageClassification_System'
    },
    {
      id: 'mandarin_learning',
      title: 'MANDARIN LEARNING APP',
      subtitle: 'STUDENT BILINGUAL STUDY TOOL',
      description: 'A feature-rich native Android learning application specifically designed for UiTM students to master Mandarin Chinese.',
      details: 'Integrates interactive flashcards, multiple-choice quizzes, progress tracking, and a dictionary synced with Firebase. Processes animations via Lottie.',
      tech: 'Android (Java), Firebase Auth, Realtime Database, Material Design, Lottie',
      imageText: '[ Study / Dictionary ]',
      githubUrl: 'https://github.com/juyfonso/Mandarin_Learning_App'
    },
    {
      id: 'atlas_fitness',
      title: 'ATLAS: AI FITNESS',
      subtitle: 'COMPANION & DIET PLANNER',
      description: 'An intelligent AI-powered fitness and nutrition coach integrating content-based recommendations to generate customized 30-day workouts and diet tables.',
      details: 'Combines OpenRouter API pipelines with Firestore session caching. Automatically evaluates user metrics (BMI, activity goals) to generate personalized paths.',
      tech: 'Python, Flask, OpenRouter API, Firebase Auth, Cloud Firestore, TailwindCSS',
      imageText: '[ Coach / Plan ]',
      githubUrl: 'https://github.com/juyfonso/Atlas-Chatbot-Fitness-And-Nutrition'
    },
    {
      id: 'smart_vision',
      title: 'SMART VISION DETECTION',
      subtitle: 'INTELLIGENT COMPUTER VISION FEED',
      description: 'A computer vision and image processing framework designed to handle real-time object detection and recognition models.',
      details: 'Leverages deep learning models to capture frame-by-frame visual feeds, performing high-fidelity object identification and boundaries annotation.',
      tech: 'HTML5, CSS3, JavaScript, Web Camera API, Computer Vision Models',
      imageText: '[ Frame / Detect ]',
      githubUrl: 'https://github.com/juyfonso/SmartVision'
    },
    {
      id: 'textbook_preloved',
      title: 'TEXTBOOK PRELOVED MARKETPLACE',
      subtitle: 'SECOND-HAND CAMPUS BOOKSTORE',
      description: 'A dedicated e-commerce web platform for students to buy, sell, and trade pre-owned academic textbooks.',
      details: 'Connects campus sellers with buyers, featuring category filtering, condition rating, and secure campus messaging channels.',
      tech: 'Java, JSP, MySQL, Bootstrap, Apache Tomcat, JDBC',
      imageText: '[ Sell / Exchange ]',
      githubUrl: 'https://github.com/juyfonso/textbookPreloved'
    },
    {
      id: 'simple_bus_ticket',
      title: 'SIMPLE BUS TICKETING',
      subtitle: 'TRANSIT RESERVATION SYSTEM',
      description: 'A lightweight web portal designed for booking transit tickets, selecting routes, and managing seat allocations.',
      details: 'Employs an optimized PHP backend to handle ticket reservations, seat layouts, and real-time transaction processing.',
      tech: 'PHP, MySQL, HTML5, CSS3, JavaScript',
      imageText: '[ Reserve / Travel ]',
      githubUrl: 'https://github.com/juyfonso/SimpleBusTicket'
    },
    {
      id: 'sport_online_system',
      title: 'SPORT ONLINE BOOKING',
      subtitle: 'SPORTS FACILITY SCHEDULER',
      description: 'An online system facilitating court rentals, facility booking, and sports event coordination.',
      details: 'Integrates scheduling logic to prevent double-bookings, featuring automated email confirmations and administrative management dashboards.',
      tech: 'PHP, MySQL, Bootstrap, CSS3, JavaScript',
      imageText: '[ Court / Booking ]',
      githubUrl: 'https://github.com/juyfonso/SportOnlineSystem'
    },
    {
      id: 'cat_3d',
      title: 'CAT 3D RENDERING',
      subtitle: 'GRAPHICS ANIMATION PLAYGROUND',
      description: 'An interactive 3D web rendering sandbox showcasing dynamic animal structures, skeletons, and model animations.',
      details: 'Utilizes WebGL rendering pipelines to create smooth, responsive 3D feline model controls and environment lighting interactions.',
      tech: 'JavaScript, WebGL, Three.js, HTML5 Canvas, OrbitControls',
      imageText: '[ Render / 3D ]',
      githubUrl: 'https://github.com/juyfonso/cat_3D'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div style={{ padding: '8px', position: 'relative' }}>
      {/* Slider Core Frame */}
      <div 
        style={{
          border: '4px solid var(--manga-ink)',
          padding: '24px',
          backgroundColor: '#fff',
          boxShadow: '6px 6px 0px var(--manga-ink)',
          position: 'relative',
          minHeight: '340px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 2fr',
          gap: '24px',
          alignItems: 'center'
        }}
        className="manga-slider-frame"
      >
        {/* Left column: Visual stamp */}
        <div style={{
          height: '100%',
          minHeight: '260px',
          border: '3px solid var(--manga-ink)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
        className="screentone-dots"
        >
          <div style={{
            backgroundColor: '#fff',
            border: '2px solid var(--manga-ink)',
            padding: '8px 16px',
            fontFamily: 'var(--font-typewriter)',
            fontSize: '0.95rem',
            fontWeight: 'bold',
            transform: 'rotate(-4deg)',
            boxShadow: '4px 4px 0 var(--manga-ink)'
          }}>
            {currentProject.imageText}
          </div>
        </div>

        {/* Right column: Content description */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyBetween: 'space-between', height: '100%' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="vintage-label" style={{ color: 'var(--manga-grey-1)' }}>
                SCHEMATIC NO: {currentIndex + 1} OF {projects.length}
              </span>
              <span className="vintage-label" style={{ color: 'red', fontWeight: 'bold' }}>
                ✦ ACTIVE PROJECT
              </span>
            </div>

            <h3 style={{ 
              fontFamily: 'var(--font-headline)', 
              fontSize: '1.8rem', 
              fontWeight: '900', 
              margin: '8px 0 2px',
              color: 'var(--manga-ink)'
            }}>
              {currentProject.title}
            </h3>
            
            <p className="vintage-label" style={{ fontSize: '0.7rem', color: 'var(--manga-grey-2)', marginBottom: '16px' }}>
              {currentProject.subtitle}
            </p>

            <p style={{ fontSize: '0.88rem', lineHeight: '1.5', textAlign: 'justify', color: 'var(--manga-ink)', marginBottom: '16px' }}>
              {currentProject.description}
            </p>
          </div>

          <div>
            <div style={{ borderTop: '2px dashed var(--manga-ink)', paddingTop: '12px', marginBottom: '16px' }}>
              <span className="vintage-label" style={{ fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>INTEGRATED ARSENAL:</span>
              <span className="vintage-label" style={{ fontSize: '0.68rem', color: 'var(--manga-grey-1)' }}>{currentProject.tech}</span>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="vintage-btn"
                onClick={() => setActiveProject(currentProject)}
                style={{ fontSize: '0.8rem', padding: '6px 12px' }}
              >
                UNFOLD BLUEPRINTS →
              </button>
              <a 
                href={currentProject.githubUrl || "https://github.com/juyfonso"} 
                target="_blank" 
                rel="noreferrer" 
                className="vintage-btn"
                style={{ fontSize: '0.8rem', padding: '6px 12px' }}
              >
                SOURCE DECK
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '24px', 
        marginTop: '20px',
        alignItems: 'center'
      }}>
        <button 
          className="vintage-btn" 
          onClick={handlePrev}
          style={{ width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}
        >
          ◀
        </button>
        <span style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.8rem', fontWeight: 'bold' }}>
          PAGE {currentIndex + 1} / {projects.length}
        </span>
        <button 
          className="vintage-btn" 
          onClick={handleNext}
          style={{ width: '40px', height: '40px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}
        >
          ▶
        </button>
      </div>

      {/* Project Details Modal (Manga layout) */}
      {activeProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.85)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 250,
          padding: '20px'
        }}
        onClick={() => setActiveProject(null)}
        >
          <div style={{
            maxWidth: '580px',
            width: '100%',
            backgroundColor: 'var(--manga-paper)',
            border: '6px solid var(--manga-ink)',
            boxShadow: '10px 10px 0px var(--manga-ink)',
            padding: '28px',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="vintage-btn"
              onClick={() => setActiveProject(null)}
              style={{ position: 'absolute', top: '15px', right: '15px', padding: '4px 8px', fontSize: '0.75rem' }}
            >
              [ CLOSE FILE ]
            </button>

            <span className="vintage-label" style={{ color: 'var(--manga-grey-1)', fontSize: '0.7rem' }}>
              FILE NO: ZUL-{activeProject.id.toUpperCase()}
            </span>

            <h3 style={{ 
              fontFamily: 'var(--font-headline)', 
              fontSize: '1.8rem', 
              fontWeight: '900', 
              marginTop: '6px',
              borderBottom: '3px solid var(--manga-ink)',
              paddingBottom: '6px'
            }}>
              {activeProject.title}
            </h3>

            <h4 style={{ 
              fontFamily: 'var(--font-typewriter)', 
              fontSize: '0.85rem', 
              color: 'var(--manga-grey-2)', 
              marginBottom: '20px',
              marginTop: '4px'
            }}>
              {activeProject.subtitle}
            </h4>

            {/* Halftone graphic block */}
            <div style={{
              height: '150px',
              border: '3px solid var(--manga-ink)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '20px'
            }}
            className="screentone-dots"
            >
              <div style={{ 
                fontFamily: 'var(--font-typewriter)', 
                fontSize: '1rem', 
                backgroundColor: 'var(--manga-paper)', 
                border: '2px solid var(--manga-ink)', 
                padding: '6px 12px',
                fontWeight: 'bold',
                transform: 'rotate(1.5deg)'
              }}>
                {activeProject.imageText}
              </div>
            </div>

            <h5 style={{ fontFamily: 'var(--font-typewriter)', margin: '0 0 6px 0', fontSize: '0.9rem', fontWeight: 'bold' }}>
              OPERATION SCHEMATICS:
            </h5>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', textAlign: 'justify', marginBottom: '12px' }}>
              {activeProject.description}
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', textAlign: 'justify', marginBottom: '18px', fontStyle: 'italic' }}>
              {activeProject.details}
            </p>

            <div style={{ borderTop: '2px dashed var(--manga-ink)', paddingTop: '12px', marginTop: '16px' }}>
              <h5 style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>
                TECHNOLOGIES INTEGRATED:
              </h5>
              <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '0.75rem', color: 'var(--manga-grey-1)', lineHeight: '1.4' }}>
                {activeProject.tech}
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <a 
                href={activeProject.githubUrl || "https://github.com/juyfonso"} 
                target="_blank" 
                rel="noreferrer"
                className="vintage-btn"
                style={{ fontSize: '0.8rem' }}
              >
                REQUEST CODE BLUEPRINTS (GITHUB)
              </a>
              <span className="vintage-label" style={{ fontSize: '0.65rem' }}>DOC REF: {activeProject.id.toUpperCase()}-2026</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MangaProjects;
