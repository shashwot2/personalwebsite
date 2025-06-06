export default function Hamburger({
  isOpen,
  toggleMenu,
  currentSection,
  handleSectionChange,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  currentSection: string;
  handleSectionChange: (section: string) => void;
}) {
  const sections = ['Personal', 'Education', 'Projects', 'Contact'];

  return (
    <>
      <div
        onClick={toggleMenu}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '30px',
          height: '27px',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'white',
            transform: isOpen ? 'rotate(45deg) translate(10px, 10px)' : 'none',
            transition: 'transform 0.3s ease',
          }}
        ></div>
        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'white',
            opacity: isOpen ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        ></div>
        <div
          style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'white',
            transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            transition: 'transform 0.3s ease',
          }}
        ></div>
      </div>

      <div
        style={{
          position: 'absolute',
          padding: '20px',
          paddingTop: '75px',
          left: isOpen ? 0 : '-300px', 
          width: '200px',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 30,
          boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.5)',
          transition: 'left 0.3s ease',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {sections.map((section) => (
            <li key={section} style={{ marginBottom: '15px' }}>
              <button
                onClick={() => {
                  handleSectionChange(section);
                  toggleMenu();
                }}
                style={{
                  width: '100%',
                  padding: '10px 15px',
                  fontSize: '16px',
                  background: currentSection === section ? '#ffa0e0' : 'transparent',
                  color: currentSection === section ? 'black' : 'white',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'background 0.3s, color 0.3s',
                  borderRadius: '5px',
                }}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

