import { Box } from '@mui/material';

import Navbar from '../components/Navbar';
import BreadcrumbsTop from '../components/BreadcrumbsTop';
import ProfileAvatar from '../components/ProfileAvatar';
import SearchInput from '../components/SearchInput';
import InputGroup from '../components/InputGroup';

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
      <Box p="24px" my="24px" border="2px solid black" borderRadius="12px">
        <InputGroup label="Name" placeholder="Please input your name" />
        <InputGroup label="Email" type="email" placeholder="Please input your email" />
        <InputGroup label="Phone Number" type="number" placeholder="Please input your phone number" />
        <InputGroup label="Address" placeholder="Please input your address" />
      </Box>
    </div>
  );
}

export default Profile;
