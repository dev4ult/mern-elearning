import BreadcrumbsTop from '../components/BreadcrumbsTop';
import Navbar from '../components/Navbar';
import { Avatar } from '@mui/material';

function Dashboard() {
  return (
    <div>
      <Navbar>
        <BreadcrumbsTop onPage="Dashboard" pageList={[{ name: 'Home', link: '/' }]} />
        <Avatar sx={{ bgcolor: 'black' }}>N</Avatar>
      </Navbar>
    </div>
  );
}

export default Dashboard;
