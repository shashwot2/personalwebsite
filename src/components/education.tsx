export default function Education() {
  return (
    <div
      style={{
        padding: '40px', 
        boxSizing: 'border-box',
        color: '#fff',
        fontFamily: "'Inter var', sans-serif", 
      }}
    >
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '30px' }}>Education</h1>
      
      <div
        style={{
          marginBottom: '40px',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          columnGap: '20px',
          alignItems: 'start',
        }}
      >
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Master of Science in Information Technology</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            <strong>Institution:</strong> Rensselaer Polytechnic Institute, Troy, New York
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            <strong>Concentration:</strong> Software Design and Engineering
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            <strong>Relevant Coursework:</strong> Programming Languages, Software Development
          </p>
          <p style={{ fontSize: '1.2rem' }}>
            <strong>Achievements:</strong> Gamma Nu Eta (Honor Society)
          </p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '1.2rem' }}>
          <p style={{ marginBottom: '10px' }}>
            <strong>GPA:</strong> 3.87/4.0
          </p>
          <p>Aug 2023 - Dec 2024</p>
        </div>
      </div>
      
      <div
        style={{
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          columnGap: '20px',
          alignItems: 'start',
        }}
      >
        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Bachelor of Science in Computer Science</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            <strong>Institution:</strong> Webster University, Bangkok, Thailand
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            <strong>Honors:</strong> Summa Cum Laude, Departmental Scholarship
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            <strong>Leadership Positions:</strong> President, IT Club (Jan 2020 - Aug 2021)
          </p>
        </div>
        <div style={{ textAlign: 'right', fontSize: '1.2rem' }}>
          <p>Aug 2018 - Aug 2021</p>
        </div>
      </div>
    </div>
  )
}

