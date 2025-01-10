export default function Experience() {
  return (
    <div
      style={{
        overflowY: 'auto',
        boxSizing: 'border-box',
        color: '#fff',
        fontFamily: "'Inter var', sans-serif",
      }}
    >
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '40px' }}>Work Experience</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            width: '2px',
            height: '100%',
            background: '#444',
          }}
        ></div>

        {/* Experience Items */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '40px',
            position: 'relative',
            width: '100%',
          }}
        >
          <div
            style={{
              flex: '1',
              textAlign: 'right',
              paddingRight: '20px',
            }}
          >
            <p style={{ fontSize: '1.5rem', margin: 0 }}>Teaching Assistant</p>
            <p style={{ fontSize: '1rem', color: '#aaa' }}>Rensselaer Polytechnic Institute</p>
          </div>
          <div
            style={{
              width: '20px',
              height: '20px',
              background: '#ffa0e0',
              borderRadius: '50%',
              position: 'relative',
              top: '10px',
            }}
          ></div>
          <div
            style={{
              flex: '1',
              paddingLeft: '20px',
            }}
          >
            <p style={{ fontSize: '1.2rem', margin: 0 }}>Aug 2023 - Dec 2024</p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '40px',
            position: 'relative',
            width: '100%',
          }}
        >
          <div
            style={{
              flex: '1',
              textAlign: 'right',
              paddingRight: '20px',
            }}
          >
            <p style={{ fontSize: '1.5rem', margin: 0 }}>Software Engineer</p>
            <p style={{ fontSize: '1rem', color: '#aaa' }}>Mu Space Corp</p>
          </div>
          <div
            style={{
              width: '20px',
              height: '20px',
              background: '#ffa0e0',
              borderRadius: '50%',
              position: 'relative',
              top: '10px',
            }}
          ></div>
          <div
            style={{
              flex: '1',
              paddingLeft: '20px',
            }}
          >
            <p style={{ fontSize: '1.2rem', margin: 0 }}>Nov 2021 - Jun 2023</p>
          </div>
        </div>
      </div>
        <h2> I worked as a software engineer for 1 and a half years before starting my Master's degree in Information technology. </h2>
        
        <h2>I worked as a Teaching assistant during my Master's degree teaching people JavaScript, PHP, HTML and CSS</h2>
    </div>
  )
}

