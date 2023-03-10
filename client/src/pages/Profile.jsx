import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BreadcrumbsTop from '../components/BreadcrumbsTop';
import ProfileAvatar from '../components/ProfileAvatar';
import SearchInput from '../components/SearchInput';

function Profile() {
  return (
    <div>
      <Navbar>
        <BreadcrumbsTop
          onPage="Profile"
          pageList={[
            { name: 'Home', link: '/' },
            { name: 'Dashboard', link: '/dashboard' },
          ]}
        />
        <Box display="flex" gap="16px" alignItems="center">
          <SearchInput placeholder="Search for courses..." />
          <ProfileAvatar />
        </Box>
      </Navbar>
    </div>
  );
}

export default Profile;
