import { Box, Grid, Card, CardContent, CardActions, CardActionArea, Chip, Typography as Text } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import BreadcrumbsTop from '../components/BreadcrumbsTop';
import Navbar from '../components/Navbar';
import ProvileAvatar from '../components/ProfileAvatar';
import SearchInput from '../components/SearchInput';

import VectorDashboard from '../assets/dashboardVector.png';

function Dashboard() {
  return (
    <div>
      <Navbar>
        <BreadcrumbsTop onPage="Dashboard" pageList={[{ name: 'Home', link: '/' }]} />
        <Box display="flex" gap="16px" alignItems="center">
          <SearchInput placeholder="Search for courses..." />
          <ProvileAvatar />
        </Box>
      </Navbar>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap="64px" py="24px">
        <div>
          <Text fontWeight="bold" fontSize="40px">
            Dashboard
          </Text>
          <img src={VectorDashboard} alt="guy" />
        </div>
        <Grid container spacing={1}>
          <Grid item>
            <Card
              sx={{
                ':hover': {
                  boxShadow: 3,
                },
                backgroundColor: '#37F2A4',
                border: '1.5px solid #37F2A4',
              }}
              variant="outlined"
            >
              <CardActionArea component={RouterLink} to="/courses" sx={{ p: '8px' }}>
                <CardActions>
                  <Chip label="Courses" size="small" sx={{ fontWeight: '700', backgroundColor: 'white' }} />
                </CardActions>
                <CardContent>
                  <Text fontWeight="bold" variant="lg" lineHeight="1.3" mb="4px">
                    All Courses
                  </Text>
                  <Text>Search all course</Text>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                ':hover': {
                  boxShadow: 3,
                },
                backgroundColor: 'background.dark',
                border: '1.5px solid black',
                color: 'white',
              }}
              variant="outlined"
            >
              <CardActionArea component={RouterLink} to="/profile" sx={{ p: '8px' }}>
                <CardActions>
                  <Chip label="Profile" size="small" sx={{ fontWeight: '700', backgroundColor: 'white' }} />
                </CardActions>
                <CardContent>
                  <Text fontWeight="bold" variant="lg" lineHeight="1.3" mb="4px">
                    Nibras Alyassar
                  </Text>
                  <Text>Customize your profile</Text>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                ':hover': {
                  boxShadow: 3,
                },
                backgroundColor: '#F9F143',
                border: '1.5px solid #F9F143',
              }}
              variant="outlined"
            >
              <CardActionArea component={RouterLink} to="/history" sx={{ p: '8px' }}>
                <CardActions>
                  <Chip label="Notifications" size="small" sx={{ fontWeight: '700', backgroundColor: 'white' }} />
                </CardActions>
                <CardContent>
                  <Text fontWeight="bold" variant="lg" lineHeight="1.3" mb="4px">
                    Log History
                  </Text>
                  <Text>Open to see</Text>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{
                ':hover': {
                  boxShadow: 3,
                },
                border: '1.5px solid black',
                backgroundColor: 'background.light',
              }}
              variant="outlined"
            >
              <CardActionArea component={RouterLink} to="/" sx={{ p: '8px' }}>
                <CardActions>
                  <Chip label="Last Visited" size="small" sx={{ fontWeight: '600', bgColor: 'white' }} />
                </CardActions>
                <CardContent>
                  <Text fontWeight="bold" variant="lg" lineHeight="1.3" mb="4px">
                    Analisis Sistem...
                  </Text>
                  <Text>Open this course</Text>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
