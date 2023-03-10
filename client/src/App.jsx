import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTheme from './Theme';
import { Container } from '@mui/material';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound404 from './pages/NotFound404';
import Courses from './pages/Courses';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <MainTheme>
        <Container color="white">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Container>
      </MainTheme>
    </Router>
  );
}

export default App;
