import ContentCenter from '../components/ContentCenter';
import InputGroup from '../components/InputGroup';
import { Box, Button, Typography as Text } from '@mui/material';

function Login() {
  return (
    <ContentCenter>
      <Box p={{ xs: '1.5rem', sm: '2.5rem' }} border="2px solid black" borderRadius="16px" textAlign="center">
        <form action="">
          <Text variant="md" textTransform="uppercase" fontWeight="700">
            login
          </Text>
          <Text maxWidth="small" marginTop="24px">
            Login to get access to some courses
          </Text>
          <Box textAlign="left" marginTop="32px" marginBottom="50px" display="flex" flexDirection="column" gap="16px">
            <InputGroup label="Email" type="email" placeholder="Type your email" fullWidth required />
            <InputGroup label="Password" type="password" placeholder="Type your password" fullWidth required />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="button"
            sx={{
              py: '10px',
              fontWeigth: 'bold',
              boxShadow: 'none',
              ':hover': {
                boxShadow: 'none',
              },
            }}
          >
            login
          </Button>
          <Text variant="sm" textAlign="left" marginTop="4px">
            Don't have an account yet? Contact admin
          </Text>
        </form>
      </Box>
    </ContentCenter>
  );
}

export default Login;
