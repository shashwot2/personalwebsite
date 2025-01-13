import { useState } from 'react'

export default function Projects() {
  const [enlargedImage, setEnlargedImage] = useState(null)

  const projectData = [
    { 
      title: 'Engrave', 
      description: `Flashcard Android Application using Expo and React Native. Also winner of instructor's choice award :)`, 
      link: 'https://github.com/shashwot2/Engrave' 
    },
    { 
      title: 'SlashyDBot', 
      description: 'Discord bot for playing music using FFMPeg', 
      link: 'https://github.com/shashwot2/Slashydbot' 
    },
    { 
      title: 'Chatty', 
      description: 'Chatroom written in Rust using Tokio', 
      link: 'https://github.com/shashwot2/chatty' 
    },
    { 
      title: 'Wayk', 
      description: 'Maps app using Expo and React Native for walking with reportable obstructions like Waze. Developed for HackRPI 2024', 
      link: 'https://github.com/WaykRPI/Wayk', 
      image: './src/assets/wayk.png' 
    },
    { 
      title: 'Mixologics', 
      description: 'Android application for cocktail recipes using React Native', 
      link: 'https://github.com/shashwot2/Mixologics' 
    },
    { 
      title: 'ChessClock', 
      description: 'Basic Chessclock with configuration options written in Svelte', 
      link: 'https://github.com/shashwot2/chessclock' 
    },
    { 
      title: 'Remote Job Scheduler', 
      description: 'Google-Calendar like Project for scheduling remote applications. Made for Masary Studios, contact me for demo permission', 
      link: '' 
    },
    { 
      title: 'Economic Analysis of FOSS trends of public companies', 
      description: 'Data Analysis of public companies correlated with their GitHub contributions using models like multivariate regression, KNN, and Random Forest', 
      link: 'https://github.com/shashwot2/Economic-analysis-of-FOSS-trends' 
    },
    { 
      title: 'Naive MatrixMultiplication Optimization', 
      description: 'Optimization of Matrix Multiplication using CUDA and MPI', 
      link: 'https://github.com/shashwot2/Matrix-Multiplication-CUDA-MPI' 
    },
  ]

  const handleImageClick = (image: any) => {
    setEnlargedImage(image)
  }

  const closeModal = () => {
    setEnlargedImage(null)
  }

  return (
    <>
      <div
        style={{
          height: '80vh',
          overflowY: 'auto',
          padding: '20px',
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {projectData.map((project, index) => (
          <div
            key={index}
            style={{
              padding: '20px',
              background: '#222',
              borderRadius: '10px',
              color: '#fff',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
            }}
          >
            {project.image && (
              <img 
                src={project.image} 
                alt={`${project.title} thumbnail`} 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => handleImageClick(project.image)}
              />
            )}
            <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>{project.description}</p>
            {project.link ? (
              <a
                href={project.link}
                style={{
                  color: '#ffa0e0',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            ) : (
              <span
                style={{
                  color: '#555',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  cursor: 'not-allowed',
                }}
              >
                No Link Available
              </span>
            )}
          </div>
        ))}
      </div>

      {enlargedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <img 
            src={enlargedImage} 
            alt="Enlarged view" 
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '10px',
            }}
          />
        </div>
      )}
    </>
  )
}

