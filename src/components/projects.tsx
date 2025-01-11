export default function Projects() {
  const projectData = [
    { title: 'Engrave', description: `Flashcard Android Application. Also winner of instructors choice award :)`, link: 'https://github.com/shashwot2/Engrave'},
    { title: 'SlashyDBot', description: 'Discord bot for playing music using FFMPeg', link: 'https://github.com/shashwot2/Slashydbot' },
    { title: 'Chatty', description: 'Chatroom written in Rust', link: '#' },
    { title: 'Mixologics', description: 'Android application for cocktail recipes', link: '#' },
    { title: 'ChessClock', description: 'Basic Chessclock with configuration options written in Svelte', link: '#' },
    { title: 'Remote Job Scheduler', description: 'Google-Calendar like Project for scheduling remote applications. Made For Masary Studios, (NO LINK, contact me for demo permission)', link: '#' },
    { title: 'Economic Analysis of FOSS trends of public companies', description: 'Data Analysis of public companies correlated with their github contributions with models like multivariate regression, KNN, Random Forest', link: 'https://github.com/shashwot2/Economic-analysis-of-FOSS-trends' },
    { title: 'Wayk', description: 'Maps app for walking with Reportable obstructions like Waze. Developed for HackRPI 2024', link: 'https://github.com/WaykRPI/Wayk' },
  ]

  return (
    <div style={{ height:'80vh', overflowY:'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
      {projectData.map((project, index) => (
        <div
          key={index}
          style={{
            padding: '35px',
            background: '#222',
            borderRadius: '10px',
            color: '#fff',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
          }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.link}
            style={{
              color: '#ffa0e0',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  )
}
