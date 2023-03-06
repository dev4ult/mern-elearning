import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTheme from './Theme';
import { Container } from '@mui/material';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <MainTheme>
        <Container>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </MainTheme>
    </Router>
  );
}

export default App;
