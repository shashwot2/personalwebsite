import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Developed with ReactThreeFiber</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);  

root.render(
  <>
    <App />
    <Overlay />
  </>
);

