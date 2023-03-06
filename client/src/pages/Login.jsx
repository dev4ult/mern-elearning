import ContentCenter from '../components/ContentCenter';
import InputGroup from '../components/InputGroup';
import { Box, Button, Typography as Text } from '@mui/material';

function Login() {
  return (
    <ContentCenter>
      <Box p={{ xs: '1.5rem', sm: '2.5rem' }} border="2px solid black" borderRadius="20px" textAlign="center">
        <form action="">
          <Text variant="md" textTransform="uppercase" fontWeight="700">
            login
          </Text>
          <Text marginTop="24px">Login to your account to access more courses</Text>
          <Box textAlign="left" marginTop="32px" marginBottom="50px">
            <InputGroup title="Email" type="email" placeholder="Type your name" fullWidth required />
            <InputGroup title="Password" type="password" placeholder="Type your email" fullWidth required />
          </Box>
          <Button type="submit" fullWidth variant="contained" size="large" color="button">
            login
          </Button>
          <Text textAlign="left" marginTop="8px">
            Don't have an account yet? Contact admin
          </Text>
        </form>
      </Box>
    </ContentCenter>
  );
}

export default Login;
