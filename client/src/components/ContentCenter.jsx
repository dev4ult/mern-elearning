import { Box } from '@mui/material';

function ContentCenter({ children }) {
  return (
    <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
      {children}
    </Box>
  );
}

export default ContentCenter;
