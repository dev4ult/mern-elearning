import { Box, Card, CardActions, CardActionArea, CardContent } from '@mui/material';

import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import BreadcrumbsTop from '../components/BreadcrumbsTop';
import SearchInput from '../components/SearchInput';

function Courses() {
  return (
    <div>
      <Navbar>
        <BreadcrumbsTop
          onPage="Courses"
          pageList={[
            { name: 'Home', link: '/' },
            { name: 'Dashboard', link: '/dashboard' },
          ]}
        />
        <Box display="flex" gap="16px" alignItems="center">
          <SearchInput label="Search" placeholder="Courses..." />
          <ProfileAvatar />
        </Box>
      </Navbar>
    </div>
  );
}

export default Courses;
