export default function Projects() {
  const projectData = [
    { title: 'SlashyDBot', description: 'Discord bot for playing music using FFMPeg', link: '#' },
    { title: 'Remote Job Scheduler', description: 'Google-Calendar like Project for scheduling remote applications. Made For Masary Studios, (NO LINK, contact me for demo permission)', link: '#' },
    { title: 'ChessClock', description: 'Basic Chessclock with configuration options written in Svelte', link: '#' },
    { title: 'Chatty', description: 'Chatroom written in Rust', link: '#' },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
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
