import SiteMapBuilder from './SiteMapBuilder';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <SiteMapBuilder />
      </div>
    </div>
  );
}

export default App;



