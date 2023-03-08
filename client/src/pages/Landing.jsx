import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

import Navbar from '../components/Navbar';

function Landing() {
  return (
    <div>
      <Navbar>
        <Link component={RouterLink} underline="hover" to="/dashboard">
          Dashboard
        </Link>
      </Navbar>
    </div>
  );
}

export default Landing;
