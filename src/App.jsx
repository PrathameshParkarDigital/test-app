import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App1 from './components/app1/App1';
import App2 from './components/app2/App2';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app1" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
      </Routes>
    </Router>
  );
}

export default App
