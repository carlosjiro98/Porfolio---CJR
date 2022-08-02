//css
import './App.css';

//components
import Layout from './components/Layout/Layout'
import Resume from './components/Resume/Resume'
import Error from './components/Error/Error'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Layout />} />
        <Route  path="/resume" element={<Resume />} />
        <Route  path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
