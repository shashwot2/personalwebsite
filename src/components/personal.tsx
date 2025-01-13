export default function Personal() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '3rem', margin: '0.5em 0' }}>Hi! I'm Shashwot K C</h1>
      <h2 style={{ fontSize: '2rem', margin: '0.5em 0', fontWeight: '300' }}>
        A passionate full-stack developer
      </h2>
      <img
        src="/shashwotkc.jpg"
        alt="Shashwot KC picture"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
          objectFit: 'cover',
          margin: '1.5em 0',
        }}
      />
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        I enjoy creating efficient, scalable web applications and exploring modern technologies
        that improve user experiences. 
      </p>
    </div>
  )
}

