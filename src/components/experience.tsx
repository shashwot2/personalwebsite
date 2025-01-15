export default function Experience() {
  return (
    <div
      style={{
        overflowY: 'auto',
        boxSizing: 'border-box',
        color: '#fff',
        fontFamily: "'Inter var', sans-serif",
        padding: 'clamp(1rem, 2vw, 2rem)',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(1.5rem, 5vw, 4rem)',
          textAlign: 'center',
          marginBottom: 'clamp(20px, 5vw, 40px)',
        }}
      >
        Work Experience
      </h1>
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
            width: 'clamp(1px, 0.5vw, 2px)',
            height: '100%',
            background: '#444',
            transform: 'translateX(-50%)',
          }}
        ></div>

        {[
          {
            title: 'Teaching Assistant',
            company: 'Rensselaer Polytechnic Institute',
            date: 'Aug 2023 - Dec 2024',
          },
          {
            title: 'Software Engineer',
            company: 'Mu Space Corp',
            date: 'Nov 2021 - Jun 2023',
          },
        ].map((experience, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: 'clamp(20px, 4vw, 40px)',
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
            }}
          >
            <div
              style={{
                flex: '1',
                textAlign: 'right',
                paddingRight: 'clamp(10px, 2vw, 20px)',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  margin: 0,
                }}
              >
                {experience.title}
              </p>
              <p
                style={{
                  fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                  color: '#aaa',
                }}
              >
                {experience.company}
              </p>
            </div>
            <div
              style={{
                width: 'clamp(10px, 2vw, 20px)',
                height: 'clamp(10px, 2vw, 20px)',
                background: '#ffa0e0',
                borderRadius: '50%',
                position: 'relative',
                top: 'clamp(5px, 1vw, 10px)',
              }}
            ></div>
            <div
              style={{
                flex: '1',
                paddingLeft: 'clamp(10px, 2vw, 20px)',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
                  margin: 0,
                }}
              >
                {experience.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h2
        style={{
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          marginTop: 'clamp(20px, 5vw, 40px)',
          lineHeight: '1.6',
        }}
      >
        I worked as a software engineer for 1 and a half years before starting my Master's degree in Information Technology.
      </h2>
      <h2
        style={{
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          marginTop: 'clamp(10px, 3vw, 20px)',
          lineHeight: '1.6',
        }}
      >
        I worked as a Teaching Assistant during my Master's degree teaching people JavaScript, PHP, HTML, and CSS.
      </h2>
    </div>
  );
}
