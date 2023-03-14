import { Box, Button, Typography as Text } from '@mui/material';

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
      <Box p="32px" my="24px" border="2px solid black" borderRadius="12px">
        <Text variant="lg" mb="16px" fontWeight="700">
          EDIT PROFILE
        </Text>
        <Box display="flex" gap="32px">
          <Box display="flex" gap="32px" flexDirection="column" flexGrow="1">
            <InputGroup labelTop label="Name" placeholder="Please input your name" fullWidth />
            <InputGroup labelTop label="NIM" placeholder="Please input your address" fullWidth />
            <InputGroup labelTop label="Country" placeholder="Please input your country" fullWidth />
            <InputGroup labelTop label="Address" placeholder="Please input your Address" fullWidth />
          </Box>
          <Box display="flex" gap="32px" flexDirection="column" flexGrow="1">
            <InputGroup labelTop label="Email" type="email" placeholder="Please input your email" fullWidth />
            <InputGroup labelTop label="Phone Number" type="number" placeholder="Please input your phone number" fullWidth />
            <InputGroup labelTop label="Bio" multiline rows={6} placeholder="your bio" fullWidth />
            <Button
              sx={{
                boxShadow: 'none',
                fontWeight: '600',
                ':hover': {
                  bgcolor: 'black',
                  boxShadow: 'none',
                },
                width: 'fit-content',
                ml: 'auto',
              }}
              variant="contained"
              size="large"
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Profile;
