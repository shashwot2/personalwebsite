export default function Education() {
  return (
    <div
      style={{
        padding: 'clamp(5px, 5vw, 40px)',
        boxSizing: 'border-box',
        color: '#fff',
        fontFamily: "'Inter var', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(1.1rem, 6vw, 3rem)',
          textAlign: 'center',
          marginBottom: 'clamp(1px, 5vw, 30px)',
        }}
      >
        Education
      </h1>

      {[
        {
          title: 'Master of Science in Information Technology',
          institution: 'Rensselaer Polytechnic Institute, Troy, New York',
          concentration: 'Software Design and Engineering',
          gpa: '3.87/4.0',
        },
        {
          title: 'Bachelor of Science in Computer Science',
          institution: 'Webster University, Bangkok, Thailand',
          honors: 'Summa Cum Laude, Departmental Scholarship',
          leadership: 'President, IT Club',
        },
      ].map((edu, index) => (
        <div
          key={index}
          style={{
            padding: 'clamp35px, 4vw, 20px)',
            borderRadius: 'clamp(3px, 1vw, 10px)',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            marginBottom: 'clamp(3px, 4vw, 40px)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            columnGap: 'clamp(3px, 3vw, 20px)',
            alignItems: 'start',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(0.7rem, 4vw, 1.8rem)',
                marginBottom: 'clamp(3px, 2vw, 10px)',
              }}
            >
              {edu.title}
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                marginBottom: 'clamp(3px, 1.5vw, 10px)',
              }}
            >
              <strong>Institution:</strong> {edu.institution}
            </p>
            {edu.concentration && (
              <p
                style={{
                  fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                  marginBottom: 'clamp(3px, 1.5vw, 10px)',
                }}
              >
                <strong>Concentration:</strong> {edu.concentration}
              </p>
            )}
            {edu.honors && (
              <p
                style={{
                  fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                  marginBottom: 'clamp(3px, 1.5vw, 10px)',
                }}
              >
                <strong>Honors:</strong> {edu.honors}
              </p>
            )}
            {edu.leadership && (
              <p
                style={{
                  fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                  marginBottom: 'clamp(3px, 1.5vw, 10px)',
                }}
              >
                <strong>Leadership Positions:</strong> {edu.leadership}
              </p>
            )}
          </div>
          <div
            style={{
              textAlign: 'right',
              fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)',
            }}
          >
            {edu.gpa && (
              <p
                style={{
                  marginBottom: 'clamp(5px, 1.5vw, 10px)',
                }}
              >
                <strong>GPA:</strong> {edu.gpa}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
