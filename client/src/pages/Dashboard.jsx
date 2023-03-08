import { Avatar, Box, Grid, Card, CardContent, CardActions, CardActionArea, Chip, Typography as Text } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import BreadcrumbsTop from '../components/BreadcrumbsTop';
import Navbar from '../components/Navbar';

import VectorDashboard from '../assets/dashboardVector.png';

function Dashboard() {
  return (
    <div>
      <Navbar>
        <BreadcrumbsTop onPage="Dashboard" pageList={[{ name: 'Home', link: '/' }]} />
        <Avatar sx={{ bgcolor: 'black', width: 32, height: 32, fontSize: 16 }}>N</Avatar>
      </Navbar>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap="64px" py="24px">
        <div>
          <Text fontWeight="bold" fontSize="40px">
            Dashboard
          </Text>
          <img src={VectorDashboard} alt="guy" />
        </div>
        <Grid container spacing={1}>
          <Grid item xs="6">
            <Card
              sx={{
                ':hover': {
                  boxShadow: 3,
                },
                backgroundColor: '#37F2A4',
                border: 'none',
                boxShadow: 'none',
              }}
            >
              <CardActionArea component={RouterLink} to="/" sx={{ p: '8px' }}>
                <CardActions>
                  <Chip label="Courses" size="small" sx={{ fontWeight: '700', backgroundColor: 'white' }} component="a" href="#basic-chip" />
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
          <Grid item xs="6">
            <Card
              sx={{
                ':hover': {
                  boxShadow: 3,
                },
                backgroundColor: 'background.dark',
                color: 'white',
                border: 'none',
                boxShadow: 'none',
              }}
            >
              <CardActionArea component={RouterLink} to="/" sx={{ p: '8px' }}>
                <CardActions>
                  <Chip label="Profile" size="small" sx={{ fontWeight: '700', backgroundColor: 'white' }} component="a" href="#basic-chip" />
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
          <Grid item xs="6">
            <Card
              sx={{
                ':hover': {
                  boxShadow: 3,
                },
                backgroundColor: '#F9F143',
                border: 'none',
                boxShadow: 'none',
              }}
            >
              <CardActionArea component={RouterLink} to="/" sx={{ p: '8px' }}>
                <CardActions>
                  <Chip label="Notifications" size="small" sx={{ fontWeight: '700', backgroundColor: 'white' }} component="a" href="#basic-chip" />
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
          <Grid item xs="6">
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
                  <Chip label="Last Visited" size="small" sx={{ fontWeight: '600', bgColor: 'white' }} component="a" href="#basic-chip" />
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
